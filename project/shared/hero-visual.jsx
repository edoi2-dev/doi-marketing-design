/* DOI Marketing + Design — Home hero visual.
   Three on-brand abstract directions, full-bleed behind the headline.
   All share the brand DNA: dark canvas, sharp geometry echoing the chevron
   mark, a single restrained crimson glow, film grain. Quiet ambient motion,
   gated by .doi-hero--motion (and globally disabled under prefers-reduced-motion
   via site.css). Exposed on window.DOIHeroVisual. */
(function () {
  const VB_W = 1600;
  const VB_H = 900;

  // Reusable film-grain layer (matches the Media placeholder texture).
  const GRAIN_URI =
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

  function Grain() {
    return <div style={{ position: 'absolute', inset: 0, backgroundImage: GRAIN_URI, opacity: 0.05, mixBlendMode: 'overlay', pointerEvents: 'none' }} />;
  }

  // Keeps the bottom-left headline legible: heaviest dark exactly where the
  // type sits, lifting toward the visual's focal side.
  function Legibility() {
    return (
      <React.Fragment>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(108deg, rgba(10,11,12,0.94) 0%, rgba(10,11,12,0.74) 30%, rgba(10,11,12,0.28) 58%, rgba(10,11,12,0.50) 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,11,12,0.92) 0%, rgba(10,11,12,0.30) 38%, transparent 60%)', pointerEvents: 'none' }} />
      </React.Fragment>
    );
  }

  function svgBase() {
    return { position: 'absolute', inset: 0, width: '100%', height: '100%' };
  }

  /* ---------- A · ECHO ----------------------------------------------------
     Concentric chevron-diamonds rippling out from a focal point, echoing the
     logo mark's central diamond + twin vertical bars. Innermost rings crimson;
     outer rings fade to silver hairlines. Slow scale-breath + glow pulse. */
  function Echo({ glow }) {
    const cx = 1090, cy = 410;
    const ratio = 0.78;               // diamond half-w / half-h, from the mark
    const rings = [];
    const count = 9;
    for (let i = 0; i < count; i++) {
      const w = 60 + i * 78;
      const h = w / ratio;
      const t = i / (count - 1);
      const crimson = i < 2;
      const pts = [
        [cx, cy - h], [cx + w, cy], [cx, cy + h], [cx - w, cy],
      ].map((p) => p.join(',')).join(' ');
      rings.push(
        <polygon key={i} points={pts} fill="none"
          stroke={crimson ? 'var(--crimson)' : 'rgba(176,179,184,1)'}
          strokeWidth={crimson ? 2 : 1}
          opacity={crimson ? 0.85 - i * 0.12 : Math.max(0.05, 0.32 * (1 - t))} />
      );
    }
    // twin vertical bars from the mark
    const barOff = 150;
    return (
      <React.Fragment>
        <div className="doi-hero-glow" style={{ position: 'absolute', left: `${(cx / VB_W) * 100}%`, top: `${(cy / VB_H) * 100}%`, width: 720, height: 720, transform: 'translate(-50%,-50%)', background: 'radial-gradient(closest-side, rgba(117,29,47,' + (0.30 * glow) + '), transparent 72%)', pointerEvents: 'none' }} />
        <svg viewBox={`0 0 ${VB_W} ${VB_H}`} preserveAspectRatio="xMidYMid slice" style={svgBase()}>
          <g className="doi-echo-rings" style={{ transformOrigin: `${cx}px ${cy}px` }}>
            {rings}
            <line x1={cx - barOff} y1={cy - 560} x2={cx - barOff} y2={cy + 560} stroke="rgba(176,179,184,1)" strokeWidth="1.5" opacity="0.16" />
            <line x1={cx + barOff} y1={cy - 560} x2={cx + barOff} y2={cy + 560} stroke="var(--crimson)" strokeWidth="1.5" opacity="0.5" />
            <line x1={cx} y1={cy - 620} x2={cx} y2={cy + 620} stroke="rgba(176,179,184,1)" strokeWidth="1" opacity="0.08" />
          </g>
        </svg>
      </React.Fragment>
    );
  }

  /* ---------- B · STRATA --------------------------------------------------
     A perspective floor + ceiling receding to a crimson horizon glow on the
     right. Architectural depth = "systems / strategy". Slow forward drift. */
  function Strata({ glow }) {
    const vpx = 1230, vpy = 405;
    const lines = [];
    // verticals fanning from the vanishing point to top & bottom edges
    const fan = 17;
    for (let i = 0; i <= fan; i++) {
      const fx = (i / fan) * VB_W;
      lines.push(<line key={'vb' + i} x1={vpx} y1={vpy} x2={fx} y2={VB_H} stroke="rgba(176,179,184,1)" strokeWidth="1" opacity="0.12" />);
      lines.push(<line key={'vt' + i} x1={vpx} y1={vpy} x2={fx} y2={0} stroke="rgba(176,179,184,1)" strokeWidth="1" opacity="0.05" />);
    }
    // receding horizontals (eased so they bunch near the horizon)
    const rows = 9;
    const horiz = [];
    for (let i = 1; i <= rows; i++) {
      const t = i / rows;
      const e = t * t;                 // ease toward horizon
      const yB = vpy + e * (VB_H - vpy);
      const yT = vpy - e * vpy;
      horiz.push(<line key={'hb' + i} className="doi-strata-row" x1="0" y1={yB} x2={VB_W} y2={yB} stroke="rgba(176,179,184,1)" strokeWidth="1" opacity={0.14 * t + 0.04} />);
      horiz.push(<line key={'ht' + i} x1="0" y1={yT} x2={VB_W} y2={yT} stroke="rgba(176,179,184,1)" strokeWidth="1" opacity={0.06 * t} />);
    }
    return (
      <React.Fragment>
        <div className="doi-hero-glow" style={{ position: 'absolute', left: `${(vpx / VB_W) * 100}%`, top: `${(vpy / VB_H) * 100}%`, width: 760, height: 760, transform: 'translate(-50%,-50%)', background: 'radial-gradient(closest-side, rgba(117,29,47,' + (0.40 * glow) + '), transparent 70%)', pointerEvents: 'none' }} />
        <svg viewBox={`0 0 ${VB_W} ${VB_H}`} preserveAspectRatio="xMidYMid slice" style={svgBase()}>
          <g className="doi-strata-drift">{lines}{horiz}</g>
          <line x1="0" y1={vpy} x2={VB_W} y2={vpy} stroke="var(--crimson)" strokeWidth="1.5" opacity="0.45" />
          <circle cx={vpx} cy={vpy} r="3" fill="var(--crimson)" />
        </svg>
      </React.Fragment>
    );
  }

  /* ---------- C · VECTOR --------------------------------------------------
     Parallel diagonal hairlines at the chevron's stroke angle, with a crimson
     light-sweep band drifting across and the ghost mark anchored right.
     Reads as "direction / momentum". */
  function Vector({ glow }) {
    const slope = -0.62;               // ~ chevron arm angle
    const lines = [];
    const n = 26;
    for (let i = 0; i <= n; i++) {
      const c = -400 + (i / n) * 2400; // x-intercept spread
      const x1 = c, y1 = 0;
      const x2 = c + (VB_H / -slope) * -1, y2 = VB_H;
      // recompute end from slope: y = slope*(x - c)  ->  x = c + y/slope
      const ex = c + VB_H / slope;
      const accent = i % 7 === 3;
      lines.push(<line key={i} x1={c} y1={0} x2={ex} y2={VB_H}
        stroke={accent ? 'var(--crimson)' : 'rgba(176,179,184,1)'}
        strokeWidth={accent ? 1.5 : 1}
        opacity={accent ? 0.4 : 0.10 + 0.10 * (i / n)} />);
    }
    return (
      <React.Fragment>
        <div className="doi-hero-glow" style={{ position: 'absolute', right: '4%', top: '34%', width: 720, height: 720, transform: 'translate(0,-50%)', background: 'radial-gradient(closest-side, rgba(117,29,47,' + (0.34 * glow) + '), transparent 72%)', pointerEvents: 'none' }} />
        <img src="assets/logos/Doi-Icon-darkBK.svg" alt="" aria-hidden="true" style={{ position: 'absolute', right: '6%', top: '50%', height: '116%', transform: 'translateY(-50%)', opacity: 0.07, filter: 'grayscale(1)' }} />
        <svg viewBox={`0 0 ${VB_W} ${VB_H}`} preserveAspectRatio="xMidYMid slice" style={svgBase()}>
          {lines}
        </svg>
        <div className="doi-vector-sweep" style={{ position: 'absolute', top: 0, bottom: 0, width: '46%', left: '-50%', background: 'linear-gradient(100deg, transparent, rgba(117,29,47,' + (0.22 * glow) + ') 50%, transparent)', transform: 'skewX(-26deg)', pointerEvents: 'none' }} />
      </React.Fragment>
    );
  }

  const VARIANTS = { echo: Echo, strata: Strata, vector: Vector };

  function HeroVisual({ variant = 'echo', motion = true, glow = 1 }) {
    const V = VARIANTS[variant] || Echo;
    return (
      <div className={'doi-hero-visual' + (motion ? ' doi-hero--motion' : '')} aria-hidden="true"
        style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: 'radial-gradient(140% 120% at 78% 30%, #16181b 0%, #0c0d0f 52%, #050506 100%)' }}>
        <V glow={glow} />
        <Grain />
        <Legibility />
      </div>
    );
  }

  window.DOIHeroVisual = { HeroVisual };
})();
