/* DOI Marketing + Design — shared site shell.
   Media placeholder, fixed Nav (multi-page routing + active state), Footer.
   Composes design-system primitives off the global namespace. */
(function () {
  const DOI = window.DOIMarketingDesignDesignSystem_a12e37;
  const { Button, Eyebrow } = DOI;

  /* ---- Atmospheric image placeholder ----
     Dark charcoal gradient + crimson glow + grain + darkening overlay.
     Swap for real photography by setting `src`. */
  function Media({ label = 'Photography', ratio = '4 / 3', glow = true, src, position = 'center', overlay, children, style }) {
    return (
      React.createElement('div', {
        style: {
          position: 'relative', aspectRatio: ratio, width: '100%', overflow: 'hidden',
          background: src ? `#0d0e10 url("${src}") ${position}/cover no-repeat`
                          : 'linear-gradient(150deg, #15171a 0%, #0d0e10 55%, #050506 100%)',
          border: '1px solid var(--border)', ...style,
        },
      },
        glow && !src && React.createElement('div', { style: { position: 'absolute', width: '70%', height: '70%', right: '-10%', top: '-20%', background: 'var(--glow-crimson)' } }),
        React.createElement('div', { style: { position: 'absolute', inset: 0, background: overlay || 'var(--img-overlay)' } }),
        !src && React.createElement('div', {
          style: {
            position: 'absolute', inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            opacity: 0.05,
          },
        }),
        label && React.createElement('span', {
          style: {
            position: 'absolute', left: 16, bottom: 14, fontFamily: 'var(--font-body)',
            fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--silver-40)',
          },
        }, label),
        children
      )
    );
  }

  /* ---- Fixed navigation, transparent over hero then blurred on scroll ---- */
  function Nav() {
    const [scrolled, setScrolled] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => {
      const handler = () => setScrolled(window.scrollY > 24);
      handler();
      window.addEventListener('scroll', handler, { passive: true });
      return () => window.removeEventListener('scroll', handler);
    }, []);
    const current = window.__DOI_PAGE__ || 'home';
    const links = [
      { label: 'Work', href: 'work.html', key: 'work' },
      { label: 'Services', href: 'services.html', key: 'services' },
      { label: 'Process', href: 'process.html', key: 'process' },
      { label: 'Contact', href: 'contact.html', key: 'contact' },
    ];
    return (
      React.createElement('header', {
        style: {
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, height: 'var(--nav-height)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 var(--section-pad-x)',
          background: scrolled ? 'rgba(10,11,12,0.72)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'background var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out)',
        },
      },
        React.createElement('a', { href: 'index.html', style: { display: 'flex', alignItems: 'center', gap: 14 } },
          React.createElement('img', { src: 'assets/logos/Doi-DarkBackground.svg', alt: 'Doi Marketing + Design Co.', style: { height: 75, padding: '15px' } })
        ),
        React.createElement('nav', { className: 'doi-nav-desktop', style: { display: 'flex', alignItems: 'center', gap: 38 } },
          React.createElement('div', { style: { display: 'flex', gap: 32 } },
            links.map((l) =>
              React.createElement('a', {
                key: l.key, href: l.href,
                style: {
                  position: 'relative', fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500,
                  letterSpacing: 'var(--ls-nav)', textTransform: 'uppercase',
                  color: current === l.key ? 'var(--text-primary)' : 'var(--text-secondary)',
                  paddingBottom: 4,
                  borderBottom: current === l.key ? '1px solid var(--crimson)' : '1px solid transparent',
                  transition: 'color var(--dur) var(--ease-out)',
                },
                onMouseEnter: (e) => { if (current !== l.key) e.currentTarget.style.color = 'var(--text-primary)'; },
                onMouseLeave: (e) => { if (current !== l.key) e.currentTarget.style.color = 'var(--text-secondary)'; },
              }, l.label)
            )
          ),
          React.createElement(Button, { size: 'sm', variant: 'primary', href: 'contact.html' }, 'Start a project')
        ),
        /* mobile toggle */
        React.createElement('button', {
          className: 'doi-nav-toggle', onClick: () => setOpen((v) => !v), 'aria-label': 'Menu',
          style: { display: 'none', background: 'none', border: '1px solid var(--border-strong)', color: 'var(--text-primary)', width: 42, height: 42, cursor: 'pointer' },
        }, open ? '✕' : '☰'),
        open && React.createElement('div', {
          className: 'doi-nav-mobile',
          style: {
            position: 'fixed', top: 'var(--nav-height)', left: 0, right: 0, background: 'rgba(10,11,12,0.96)',
            backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', borderBottom: '1px solid var(--border)',
            padding: 'var(--space-6) var(--section-pad-x) var(--space-7)', display: 'flex', flexDirection: 'column', gap: 22, zIndex: 49,
          },
        },
          links.map((l) =>
            React.createElement('a', {
              key: l.key, href: l.href,
              style: {
                fontFamily: 'var(--font-display)', fontSize: '2rem', textTransform: 'uppercase', letterSpacing: '0.01em',
                color: current === l.key ? 'var(--crimson)' : 'var(--text-primary)',
              },
            }, l.label)
          ),
          React.createElement(Button, { size: 'md', variant: 'primary', href: 'contact.html', style: { marginTop: 8 } }, 'Start a project')
        )
      )
    );
  }

  /* ---- Footer ---- */
  function Footer() {
    const cols = [
      { h: 'Services', items: [
        { t: 'Marketing Diagnostic', href: 'services.html' },
        { t: 'Fractional Director', href: 'services.html' },
        { t: 'Embedded Partner', href: 'services.html' },
        { t: 'Project Work', href: 'services.html' },
      ] },
      { h: 'Company', items: [
        { t: 'Work', href: 'work.html' },
        { t: 'Process', href: 'process.html' },
        { t: 'Contact', href: 'contact.html' },
      ] },
      { h: 'Connect', items: [
        { t: 'LinkedIn', href: 'contact.html' },
        { t: 'Email', href: 'contact.html' },
        { t: 'Schedule a call', href: 'contact.html' },
      ] },
    ];
    return (
      React.createElement('footer', { style: { borderTop: '1px solid var(--border)', padding: 'var(--space-9) 0 var(--space-7)' } },
        React.createElement('div', { className: 'doi-container doi-footer-grid', style: { display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 'var(--space-7)' } },
          React.createElement('div', null,
            React.createElement('img', { src: 'assets/logos/Doi-DarkBackground.svg', alt: 'Doi Marketing + Design Co.', style: { height: 75, marginBottom: 22 } }),
            React.createElement('p', { style: { margin: 0, fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-body)', color: 'var(--text-secondary)', maxWidth: '34ch' } },
              'Fractional marketing leadership and creative direction for growing product, AV, outdoor, and B2B brands.'),
            React.createElement('p', { style: { margin: '20px 0 0', fontSize: 'var(--text-xs)', letterSpacing: '0.06em', color: 'var(--text-muted)' } }, 'St. George, Utah · Remote-first')
          ),
          cols.map((c) =>
            React.createElement('div', { key: c.h },
              React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: 18 } }, c.h),
              React.createElement('ul', { style: { listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 } },
                c.items.map((it) =>
                  React.createElement('li', { key: it.t },
                    React.createElement('a', {
                      href: it.href,
                      style: { fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', transition: 'color var(--dur) var(--ease-out)' },
                      onMouseEnter: (e) => e.currentTarget.style.color = 'var(--text-primary)',
                      onMouseLeave: (e) => e.currentTarget.style.color = 'var(--text-secondary)',
                    }, it.t)
                  )
                )
              )
            )
          )
        ),
        React.createElement('div', { className: 'doi-container doi-footer-base', style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'var(--space-8)', paddingTop: 'var(--space-5)', borderTop: '1px solid var(--border)', gap: 16, flexWrap: 'wrap' } },
          React.createElement('span', { style: { fontSize: 'var(--text-xs)', color: 'var(--text-muted)', letterSpacing: '0.06em' } }, '© 2026 Doi Marketing + Design Co.'),
          React.createElement('span', { style: { fontSize: 'var(--text-xs)', color: 'var(--text-muted)', letterSpacing: '0.16em', textTransform: 'uppercase' } }, 'Strategy · Direction · Execution')
        )
      )
    );
  }

  /* ---- Page CTA band, reused on most pages ---- */
  function CTABand({ heading, emphasis, body, primary = 'Book a Diagnostic', secondary, secondaryHref }) {
    return (
      React.createElement('section', { style: { position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)' } },
        React.createElement(Media, { label: '', ratio: 'auto', style: { position: 'absolute', inset: 0, aspectRatio: 'auto', border: 'none' } }),
        React.createElement('div', { className: 'doi-container', style: { position: 'relative', textAlign: 'center', padding: 'var(--space-10) var(--section-pad-x)' } },
          React.createElement('h2', { className: 'doi-display', style: { fontSize: 'var(--text-display)', margin: '0 auto', maxWidth: '17ch' } },
            heading, ' ', React.createElement('span', { style: { color: 'var(--crimson)' } }, emphasis)),
          React.createElement('p', { style: { margin: '24px auto 36px', maxWidth: '48ch', fontSize: 'var(--text-body-lg)', lineHeight: 'var(--lh-body)', color: 'var(--text-secondary)' } }, body),
          React.createElement('div', { style: { display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' } },
            React.createElement(Button, { variant: 'primary', size: 'lg', arrow: true, href: 'contact.html' }, primary),
            secondary && React.createElement(Button, { variant: 'secondary', size: 'lg', href: secondaryHref || 'services.html' }, secondary)
          )
        )
      )
    );
  }

  /* ---- Inner-page hero (shorter than the home hero) ---- */
  function PageHero({ eyebrow, title, emphasis, lede, kicker }) {
    return (
      React.createElement('section', { style: { position: 'relative', borderBottom: '1px solid var(--border)', overflow: 'hidden' } },
        React.createElement('img', { src: 'assets/logos/Doi-Icon-darkBK.svg', alt: '', 'aria-hidden': 'true', style: { position: 'absolute', right: '-3%', top: '8%', height: '108%', opacity: 0.04, filter: 'grayscale(1)' } }),
        React.createElement('div', { style: { position: 'absolute', width: 620, height: 620, left: '-12%', top: '-30%', background: 'var(--glow-crimson)' } }),
        React.createElement('div', { className: 'doi-container', style: { position: 'relative', paddingTop: 'calc(var(--nav-height) + var(--space-9))', paddingBottom: 'var(--space-9)' } },
          React.createElement(Eyebrow, null, eyebrow),
          React.createElement('h1', { className: 'doi-display', style: { fontSize: 'var(--text-hero)', margin: '26px 0 0', maxWidth: '14ch' } },
            title, emphasis && React.createElement('span', { style: { color: 'var(--crimson)' } }, ' ', emphasis)),
          lede && React.createElement('p', { style: { margin: '28px 0 0', maxWidth: '52ch', fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 'var(--text-body-lg)', lineHeight: 'var(--lh-body)', color: 'var(--text-secondary)' } }, lede),
          kicker
        )
      )
    );
  }

  /* ---- Scroll-reveal: fade sections in as they enter the viewport ---- */
  function initReveal() {
    const els = document.querySelectorAll('.doi-reveal:not(.is-in)');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach((el) => io.observe(el));
  }

  window.DOIShell = { Media, Nav, Footer, CTABand, PageHero, initReveal };
})();
