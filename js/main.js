/* BrainFuel – Main JavaScript */

(function () {
  'use strict';

  /* ---- Mobile Menu ---- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---- Search Modal ---- */
  const searchTriggers = document.querySelectorAll('[data-search]');
  const searchOverlay  = document.getElementById('search-overlay');
  const searchInput    = document.getElementById('search-input');
  const searchResults  = document.getElementById('search-results');

  const PAGES = [
    { title: 'Excel Basics for Beginners',    cat: 'MS Excel',   url: 'excel/basics.html',        icon: '📊' },
    { title: 'Essential Excel Formulas',       cat: 'MS Excel',   url: 'excel/formulas.html',      icon: '📊' },
    { title: 'Creating Charts in Excel',       cat: 'MS Excel',   url: 'excel/charts.html',        icon: '📊' },
    { title: 'Excel Pivot Tables Guide',       cat: 'MS Excel',   url: 'excel/pivot-tables.html',  icon: '📊' },
    { title: 'MS Excel – All Lessons',         cat: 'Category',   url: 'excel/',                   icon: '📂' },
    { title: 'About BrainFuel',                cat: 'Page',       url: 'about.html',               icon: '🏠' },
    { title: 'Contact Us',                     cat: 'Page',       url: 'contact.html',             icon: '✉️' },
  ];

  function openSearch() {
    if (!searchOverlay) return;
    searchOverlay.classList.add('open');
    setTimeout(() => searchInput && searchInput.focus(), 50);
    document.body.style.overflow = 'hidden';
    renderResults('');
  }
  function closeSearch() {
    if (!searchOverlay) return;
    searchOverlay.classList.remove('open');
    document.body.style.overflow = '';
    if (searchInput) searchInput.value = '';
  }
  function renderResults(query) {
    if (!searchResults) return;
    const q = query.trim().toLowerCase();
    const matches = q
      ? PAGES.filter(p => p.title.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q))
      : PAGES;
    searchResults.innerHTML = matches.length
      ? matches.map(p => `
          <a class="search-result" href="${p.url}">
            <span class="search-result__icon">${p.icon}</span>
            <span>
              <span class="search-result__title">${p.title}</span>
              <span class="search-result__cat">${p.cat}</span>
            </span>
          </a>`).join('')
      : '<p style="padding:16px;color:var(--text-muted);font-size:.9rem;">No results found.</p>';
  }

  searchTriggers.forEach(el => el.addEventListener('click', openSearch));
  if (searchOverlay) {
    searchOverlay.addEventListener('click', e => { if (e.target === searchOverlay) closeSearch(); });
  }
  if (searchInput) {
    searchInput.addEventListener('input', () => renderResults(searchInput.value));
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSearch();
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
  });

  /* ---- Reading Progress Bar ---- */
  const progressBar = document.getElementById('reading-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const doc  = document.documentElement;
      const top  = doc.scrollTop || document.body.scrollTop;
      const full = doc.scrollHeight - doc.clientHeight;
      progressBar.style.width = full > 0 ? (top / full * 100) + '%' : '0%';
    }, { passive: true });
  }

  /* ---- Back to Top ---- */
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---- Table of Contents Highlight ---- */
  const tocLinks = document.querySelectorAll('.toc-list a');
  if (tocLinks.length) {
    const headings = Array.from(document.querySelectorAll('.article-body h2, .article-body h3'));
    const highlight = () => {
      let active = headings[0];
      headings.forEach(h => {
        if (h.getBoundingClientRect().top < 120) active = h;
      });
      tocLinks.forEach(a => {
        a.classList.toggle('active', active && a.getAttribute('href') === '#' + active.id);
      });
    };
    window.addEventListener('scroll', highlight, { passive: true });
    highlight();
  }

  /* ---- Smooth-anchor offset (for fixed nav) ---- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const offset = 80;
      const top    = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---- Active nav link ---- */
  const path = location.pathname;
  document.querySelectorAll('.nav__link').forEach(a => {
    if (a.getAttribute('href') && path.includes(a.getAttribute('href').replace('./', '').replace('../', ''))) {
      a.classList.add('active');
    }
  });

  /* ---- Scroll Reveal ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => revealObserver.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* Auto-stagger grid children */
  ['.categories-grid', '.articles-grid', '.features-grid'].forEach(sel => {
    const grid = document.querySelector(sel);
    if (!grid) return;
    Array.from(grid.children).forEach((child, i) => {
      child.classList.add('reveal', 'reveal-d' + Math.min(i + 1, 5));
      if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver(([e]) => {
          if (e.isIntersecting) { child.classList.add('visible'); obs.disconnect(); }
        }, { threshold: 0.1 });
        obs.observe(child);
      } else {
        child.classList.add('visible');
      }
    });
  });

  /* ---- Animated Counters ---- */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        countObserver.unobserve(e.target);
        const target = parseInt(e.target.getAttribute('data-count'), 10);
        const duration = 1200;
        const start = performance.now();
        const tick = (now) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          e.target.textContent = Math.round(eased * target);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.5 });
    counters.forEach(el => countObserver.observe(el));
  }

})();
