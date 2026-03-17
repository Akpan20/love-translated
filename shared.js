/* shared.js — nav + mobile + active link + reveal + floating CTA */
(function () {

  // ── Google Analytics 4 ─────────────────────────────────────────────
  const GA_ID = 'G-B9G09R5JK5';

  if (!window.gtag) {
    const gaScript = document.createElement('script');
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    gaScript.async = true;
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA_ID);
  }
  // ──────────────────────────────────────────────────────────────────

  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.nav-burger');
  const mobileMenu = document.querySelector('.nav-mobile');
  const buyBtn = document.getElementById('floatingBuyBtn');

  let pulseTriggered = false;

  // ── Combined Scroll Handler (better performance) ───────────────────
  function onScroll() {

    const scrollY = window.scrollY;

    // Nav shadow
    if (nav) {
      nav.classList.toggle('scrolled', scrollY > 20);
    }

    // Floating Buy Button
    if (buyBtn) {
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const progress = scrollY / (docHeight - winHeight);

      const showThreshold = Math.min(300, winHeight * 0.4);

      if (scrollY > showThreshold) {
        buyBtn.classList.add('visible');

        // Pulse only once
        if (!pulseTriggered) {
          buyBtn.classList.add('pulse');
          pulseTriggered = true;

          setTimeout(() => {
            buyBtn.classList.remove('pulse');
          }, 4000);
        }

        // Dynamic CTA text
        buyBtn.textContent = progress > 0.6
          ? '🛒 Get the Full Book on Selar'
          : '📖 Buy This Book';

      } else {
        buyBtn.classList.remove('visible');
      }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('load', onScroll);

  // ── Mobile Menu ────────────────────────────────────────────────────
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }

  // ── Active Nav Link ────────────────────────────────────────────────
  const currentPage = location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-center a, .nav-mobile a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ── Scroll Reveal (IntersectionObserver) ───────────────────────────
  const revealEls = document.querySelectorAll('.reveal');

  if (revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(el => io.observe(el));
  }

})();