/* DOI Marketing + Design — case-study section primitives.
   Composes the design-system components + DOIShell.Media into the
   reusable building blocks every case study page is assembled from.
   Exposed on window.DOICase. */
(function () {
  const DOI = window.DOIMarketingDesignDesignSystem_a12e37;
  const { Eyebrow, Badge, Button } = DOI;
  const { Media } = window.DOIShell;

  const SECTION_PAD = 'var(--section-pad-y) var(--section-pad-x)';

  /* ---- Small-caps attribution line (client vs self-initiated) ---- */
  function LabelTag({ children }) {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
        <span style={{ width: 6, height: 6, background: 'var(--crimson)', display: 'inline-block' }} />
        {children}
      </span>
    );
  }

  /* ---- Editorial section headline with optional italic emphasis ---- */
  function Headline({ children, center, size = 'var(--text-title-lg)', style }) {
    return (
      <h2 className="doi-editorial" style={{ fontFamily: 'var(--font-editorial)', fontWeight: 300, fontSize: size, lineHeight: 1.18, color: 'var(--text-primary)', margin: 0, maxWidth: center ? '22ch' : '20ch', textAlign: center ? 'center' : 'left', ...style }}>
        {children}
      </h2>
    );
  }

  /* ---- Standard content section: eyebrow + headline + body ---- */
  function Section({ eyebrow, headline, lead, children, center, dark, glow, id, style }) {
    return (
      <section id={id} className="doi-reveal" style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)', background: dark ? 'var(--bg-deep)' : 'transparent', ...style }}>
        {glow && <div style={{ position: 'absolute', width: 680, height: 680, left: '50%', top: '-32%', transform: 'translateX(-50%)', background: 'var(--glow-crimson)', pointerEvents: 'none' }} />}
        <div className="doi-container" style={{ position: 'relative', padding: SECTION_PAD }}>
          {(eyebrow || headline) && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 22, alignItems: center ? 'center' : 'flex-start', textAlign: center ? 'center' : 'left', marginBottom: children ? 'var(--space-8)' : 0 }}>
              {eyebrow && <Eyebrow align={center ? 'center' : 'left'}>{eyebrow}</Eyebrow>}
              {headline && <Headline center={center}>{headline}</Headline>}
              {lead && <p style={{ margin: 0, maxWidth: '60ch', fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 'var(--text-body-lg)', lineHeight: 'var(--lh-body)', color: 'var(--text-secondary)' }}>{lead}</p>}
            </div>
          )}
          {children}
        </div>
      </section>
    );
  }

  /* ---- Long-form body paragraph (editorial weight) ---- */
  function Prose({ children, max = '64ch', style }) {
    return (
      <p style={{ margin: 0, maxWidth: max, fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 'var(--text-body-lg)', lineHeight: 'var(--lh-body)', color: 'var(--text-secondary)', ...style }}>
        {children}
      </p>
    );
  }

  /* ---- 4-up meta grid for case hero ---- */
  function MetaGrid({ items }) {
    return (
      <div className="doi-meta-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${items.length}, 1fr)`, borderTop: '1px solid var(--border)' }}>
        {items.map((m, i) => (
          <div key={m.k} style={{ padding: 'var(--space-6) var(--space-6) var(--space-6) 0', borderRight: i < items.length - 1 ? '1px solid var(--border)' : 'none', paddingLeft: i === 0 ? 0 : 'var(--space-6)' }}>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson)', marginBottom: 12 }}>{m.k}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem, 2.4vw, 2.4rem)', lineHeight: 1, color: 'var(--text-primary)' }}>{m.v}</div>
          </div>
        ))}
      </div>
    );
  }

  /* ---- Case-study hero: back-link, eyebrow, title, subtitle, meta, full-bleed image ---- */
  function CaseHero({ eyebrow, title, subtitle, label, meta, mediaLabel, mediaSrc, mediaPosition }) {
    return (
      <section style={{ position: 'relative', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
        <img src="assets/logos/Doi-Icon-darkBK.svg" alt="" aria-hidden="true" style={{ position: 'absolute', right: '-4%', top: '4%', height: '92%', opacity: 0.04, filter: 'grayscale(1)' }} />
        <div style={{ position: 'absolute', width: 640, height: 640, left: '-12%', top: '-26%', background: 'var(--glow-crimson)' }} />
        <div className="doi-container" style={{ position: 'relative', paddingTop: 'calc(var(--nav-height) + var(--space-8))', paddingBottom: 'var(--space-8)' }}>
          <a href="work.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: 'var(--space-7)', transition: 'color var(--dur) var(--ease-out)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="11 6 5 12 11 18" /></svg>
            Selected Work
          </a>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="doi-display" style={{ fontSize: 'var(--text-hero)', margin: '24px 0 0', maxWidth: '16ch' }}>{title}</h1>
          <p className="doi-editorial" style={{ margin: '22px 0 0', fontFamily: 'var(--font-editorial)', fontWeight: 300, fontStyle: 'italic', fontSize: 'var(--text-lead)', lineHeight: 1.4, color: 'var(--text-secondary)', maxWidth: '40ch' }}>{subtitle}</p>
          {label && <div style={{ marginTop: 'var(--space-6)' }}><LabelTag>{label}</LabelTag></div>}
          {meta && <div style={{ marginTop: 'var(--space-8)' }}><MetaGrid items={meta} /></div>}
        </div>
        <div className="doi-container" style={{ position: 'relative', paddingBottom: 'var(--space-9)' }}>
          <Media label={mediaLabel} ratio="16 / 9" src={mediaSrc} position={mediaPosition} overlay="linear-gradient(to top, rgba(10,11,12,0.62) 0%, rgba(10,11,12,0.14) 55%, rgba(10,11,12,0) 100%)" />
        </div>
      </section>
    );
  }

  /* ---- Three/N card row using the hairline-card treatment ---- */
  function ChallengeCards({ items, cols }) {
    const n = cols || items.length;
    return (
      <div className="doi-card-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${n}, 1fr)`, gap: 'var(--space-5)' }}>
        {items.map((c, i) => <PanelCard key={i} {...c} index={i} />)}
      </div>
    );
  }

  function PanelCard({ number, tag, title, body, index }) {
    const [hover, setHover] = React.useState(false);
    return (
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{ position: 'relative', background: hover ? 'var(--surface-2)' : 'var(--surface-1)', border: '1px solid var(--border)', padding: 'var(--space-7) var(--space-6)', transition: 'background var(--dur) var(--ease-out)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {number && <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-number)', lineHeight: 1, color: hover ? 'var(--crimson)' : 'var(--silver-40)', transition: 'color var(--dur) var(--ease-out)', marginBottom: 20 }}>{number}</div>}
        {tag && <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson)', marginBottom: 14 }}>{tag}</div>}
        <h3 style={{ fontFamily: 'var(--font-editorial)', fontWeight: 400, fontSize: '1.5rem', lineHeight: 1.2, color: 'var(--text-primary)', margin: '0 0 14px' }}>{title}</h3>
        <p style={{ margin: 0, fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-body)', color: 'var(--text-secondary)' }}>{body}</p>
        <span style={{ position: 'absolute', left: 0, bottom: 0, height: 2, background: 'var(--crimson)', width: hover ? '100%' : '0%', transition: 'width var(--dur-slow) var(--ease-out)' }} />
      </div>
    );
  }

  /* ---- Vertical timeline with crimson dot markers ---- */
  function Timeline({ phases }) {
    return (
      <div style={{ position: 'relative', marginTop: 'var(--space-7)' }}>
        <div style={{ position: 'absolute', left: 7, top: 8, bottom: 8, width: 1, background: 'var(--border-strong)' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          {phases.map((p, i) => (
            <div key={i} className="doi-timeline-row" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 'var(--space-7)', paddingLeft: 'var(--space-7)', alignItems: 'start' }}>
              <span style={{ position: 'absolute', left: 0, top: 6, width: 15, height: 15, borderRadius: '50%', background: 'var(--crimson)', boxShadow: '0 0 0 4px var(--bg), 0 0 0 5px var(--crimson-30)' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson)', marginBottom: 12 }}>{p.tag}</div>
                <h3 className="doi-display" style={{ fontSize: 'clamp(1.9rem, 2.6vw, 2.6rem)', margin: 0 }}>{p.title}</h3>
                {p.meta && <div style={{ marginTop: 10, fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{p.meta}</div>}
              </div>
              <p style={{ margin: 0, fontSize: 'var(--text-body)', lineHeight: 'var(--lh-body)', color: 'var(--text-secondary)', maxWidth: '52ch', paddingTop: 4 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* ---- Categorized inventory grid ---- */
  function InventoryGrid({ groups }) {
    return (
      <div className="doi-inventory" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', borderTop: '1px solid var(--border)', borderLeft: '1px solid var(--border)' }}>
        {groups.map((g, i) => (
          <div key={i} style={{ padding: 'var(--space-7) var(--space-6)', borderRight: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16, marginBottom: 'var(--space-5)' }}>
              <h3 className="doi-display" style={{ fontSize: '1.7rem', margin: 0 }}>{g.title}</h3>
              {g.note && <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{g.note}</span>}
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {g.items.map((it) => (
                <li key={it} style={{ display: 'flex', gap: 12, fontSize: 'var(--text-sm)', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
                  <span style={{ width: 5, height: 5, marginTop: 8, background: 'var(--crimson)', flex: '0 0 auto' }} />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  /* ---- Large stat callouts: Bebas figure, silver label, crimson left border ---- */
  function StatCallouts({ stats }) {
    return (
      <div className="doi-stat-callouts" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-5) var(--space-6)' }}>
        {stats.map((s, i) => (
          <div key={i} style={{ borderLeft: '2px solid var(--crimson)', padding: '6px 0 6px var(--space-5)', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.6rem, 4vw, 3.6rem)', lineHeight: 0.95, color: 'var(--text-primary)' }}>{s.v}</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', lineHeight: 1.45, color: 'var(--text-secondary)', maxWidth: '34ch' }}>{s.l}</div>
          </div>
        ))}
      </div>
    );
  }

  /* ---- Full-width dark callout with crimson accent ---- */
  function DarkCallout({ headline, sub, body }) {
    return (
      <section className="doi-reveal" style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg-deep)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ position: 'absolute', width: 760, height: 760, right: '-14%', top: '-40%', background: 'var(--glow-crimson)' }} />
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: 'var(--crimson)' }} />
        <div className="doi-container" style={{ position: 'relative', padding: 'var(--space-10) var(--section-pad-x)' }}>
          <h2 className="doi-display" style={{ fontSize: 'var(--text-display)', margin: 0, maxWidth: '20ch' }}>{headline}</h2>
          <p className="doi-editorial" style={{ margin: '20px 0 0', fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontWeight: 300, fontSize: 'var(--text-title-lg)', color: 'var(--crimson)', lineHeight: 1.2 }}>{sub}</p>
          {body && <p style={{ margin: 'var(--space-7) 0 0', maxWidth: '70ch', fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 'var(--text-body-lg)', lineHeight: 'var(--lh-body)', color: 'var(--text-secondary)' }}>{body}</p>}
        </div>
      </section>
    );
  }

  /* ---- Centered closing pull quote ---- */
  function PullQuote({ children, cite }) {
    return (
      <section className="doi-reveal" style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
        <div style={{ position: 'absolute', width: 680, height: 680, left: '50%', top: '-30%', transform: 'translateX(-50%)', background: 'var(--glow-crimson)' }} />
        <div className="doi-container" style={{ position: 'relative', padding: 'var(--space-10) var(--section-pad-x)', textAlign: 'center' }}>
          <span style={{ display: 'block', width: 40, height: 2, background: 'var(--crimson)', margin: '0 auto var(--space-7)' }} />
          <blockquote className="doi-editorial" style={{ margin: 0, fontFamily: 'var(--font-editorial)', fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(1.6rem, 3.2vw, 2.6rem)', lineHeight: 1.32, color: 'var(--text-primary)', maxWidth: '24ch', marginInline: 'auto' }}>
            {children}
          </blockquote>
          {cite && <div style={{ marginTop: 'var(--space-7)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{cite}</div>}
        </div>
      </section>
    );
  }

  /* ---- Prev / next case navigation ---- */
  function CaseFootNav({ prev, next }) {
    const cell = (item, align) => (
      <a href={item.href} style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 'var(--space-8) var(--space-6)', textAlign: align, alignItems: align === 'right' ? 'flex-end' : 'flex-start', textDecoration: 'none', transition: 'background var(--dur) var(--ease-out)' }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'var(--surface-1)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson)' }}>{align === 'right' ? 'Next Case' : 'Previous Case'}</span>
        <span className="doi-display" style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2.1rem)' }}>{item.label}</span>
      </a>
    );
    return (
      <section style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="doi-container doi-footnav" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
          <div style={{ borderRight: next ? '1px solid var(--border)' : 'none' }}>{prev ? cell(prev, 'left') : <span />}</div>
          <div>{next ? cell(next, 'right') : <span />}</div>
        </div>
      </section>
    );
  }

  /* ---- Three-up image row, captioned like the card grid ---- */
  function ImageRow({ images }) {
    return (
      <div className="doi-card-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${images.length}, 1fr)`, gap: 'var(--space-5)' }}>
        {images.map((im, i) => (
          <figure key={i} style={{ margin: 0, border: '1px solid var(--border)' }}>
            <Media label="" ratio="1 / 1" src={im.src} position={im.position || 'center'}
              overlay="linear-gradient(to top, rgba(10,11,12,0.55) 0%, rgba(10,11,12,0.10) 50%, rgba(10,11,12,0) 100%)"
              style={{ aspectRatio: '1 / 1', border: 'none', borderBottom: '1px solid var(--border)' }} />
            <figcaption style={{ padding: 'var(--space-5) var(--space-5) var(--space-6)' }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson)', marginBottom: 10 }}>{im.tag}</div>
              <div style={{ fontFamily: 'var(--font-editorial)', fontWeight: 400, fontSize: '1.4rem', lineHeight: 1.2, color: 'var(--text-primary)' }}>{im.title}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    );
  }

  window.DOICase = { LabelTag, Headline, Section, Prose, MetaGrid, CaseHero, ChallengeCards, PanelCard, Timeline, ImageRow, InventoryGrid, StatCallouts, DarkCallout, PullQuote, CaseFootNav };
})();
