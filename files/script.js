/* ============================================================
   Tacos N' Stuff — script.js
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Mobile Navigation ---------- */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close nav when any link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close nav on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  /* ---------- Tabbed Menu System ---------- */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels  = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      // Deactivate all
      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      tabPanels.forEach(p => p.classList.remove('active'));

      // Activate selected
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const panel = document.getElementById('tab-' + target);
      if (panel) {
        panel.classList.add('active');

        // Smooth fade-in animation
        panel.style.opacity = '0';
        panel.style.transform = 'translateY(10px)';
        requestAnimationFrame(() => {
          panel.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
          panel.style.opacity = '1';
          panel.style.transform = 'translateY(0)';
        });
      }
    });
  });

  /* ---------- Sticky Nav Shadow on Scroll ---------- */
  const header = document.querySelector('.nav-header');

  const onScroll = () => {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 1px 32px rgba(0,0,0,0.5)';
    } else {
      header.style.boxShadow = 'none';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Scroll-reveal animation (Intersection Observer) ---------- */
  const fadeEls = document.querySelectorAll(
    '.menu-card, .review-card, .info-block, .map-placeholder'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  fadeEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.4s ease ${(i % 6) * 0.07}s, transform 0.4s ease ${(i % 6) * 0.07}s`;
    observer.observe(el);
  });

})();
