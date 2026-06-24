/* @ds-bundle: {"format":3,"namespace":"DOIMarketingDesignDesignSystem_a12e37","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Marquee","sourcePath":"components/core/Marquee.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"79aca6809ed1","components/core/Button.jsx":"8b29f2d044f1","components/core/Card.jsx":"e96628fa2a1d","components/core/Eyebrow.jsx":"517e28539abd","components/core/Marquee.jsx":"9adbbe1134d4","components/core/SectionHeading.jsx":"9f9418123019","components/core/Stat.jsx":"fd0a021166c1","components/forms/Input.jsx":"d9b7c0621e5d","components/forms/Select.jsx":"4fae4353039c","components/forms/Textarea.jsx":"961cb43f038f","ui_kits/marketing-site/kit-content.jsx":"3b32a2c71b0c","ui_kits/marketing-site/kit-more.jsx":"44c9dbba911c","ui_kits/marketing-site/kit-shell.jsx":"c34351facdbc"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DOIMarketingDesignDesignSystem_a12e37 = window.DOIMarketingDesignDesignSystem_a12e37 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DOI Badge — small-caps pill or square tag. Default = crimson-tinted outline.
 * Sharp edges to match the brand (no rounding).
 */
function Badge({
  children,
  tone = 'accent',
  style,
  ...rest
}) {
  const tones = {
    accent: {
      color: 'var(--crimson)',
      borderColor: 'var(--crimson-30)',
      background: 'var(--crimson-10)'
    },
    neutral: {
      color: 'var(--text-secondary)',
      borderColor: 'var(--border-strong)',
      background: 'var(--white-02)'
    },
    solid: {
      color: 'var(--off-white)',
      borderColor: 'var(--crimson)',
      background: 'var(--crimson)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 12px',
      borderRadius: 0,
      border: '1px solid',
      fontFamily: 'var(--font-body)',
      fontSize: '10px',
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      lineHeight: 1,
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DOI Button — sharp-edged, wide-tracked caps. Crimson is the only fill.
 * Variants: primary (crimson fill), secondary (hairline outline), ghost (text + arrow).
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  arrow = false,
  disabled = false,
  as = 'button',
  href,
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '10px 18px',
      fontSize: '11px'
    },
    md: {
      padding: '15px 28px',
      fontSize: '12px'
    },
    lg: {
      padding: '19px 38px',
      fontSize: '13px'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    letterSpacing: 'var(--ls-button)',
    textTransform: 'uppercase',
    lineHeight: 1,
    border: '1px solid transparent',
    borderRadius: 0,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: 'background var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out), color var(--dur) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    whiteSpace: 'nowrap',
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--crimson)',
      color: 'var(--off-white)',
      borderColor: 'var(--crimson)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'transparent',
      padding: '0'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyles = !disabled && hover ? {
    primary: {
      background: 'var(--crimson-bright)',
      borderColor: 'var(--crimson-bright)'
    },
    secondary: {
      borderColor: 'var(--crimson)',
      color: 'var(--off-white)'
    },
    ghost: {
      color: 'var(--crimson)'
    }
  }[variant] : {};
  const Tag = href ? 'a' : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyles,
      ...style
    },
    disabled: Tag === 'button' ? disabled : undefined
  }, rest), children, arrow && /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "square",
    style: {
      transform: hover ? 'translateX(4px)' : 'none',
      transition: 'transform var(--dur) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "13 6 19 12 13 18"
  })));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DOI Card — hairline-bordered panel on the dark canvas. Sharp corners.
 * On hover: subtle background lift + animated crimson bottom border.
 * Pass `number` for the numbered-service treatment.
 */
function Card({
  children,
  number,
  interactive = true,
  padding = 'var(--card-pad)',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      position: 'relative',
      background: hover ? 'var(--surface-2)' : 'var(--surface-1)',
      border: '1px solid var(--border)',
      borderRadius: 0,
      padding,
      transition: 'background var(--dur) var(--ease-out)',
      overflow: 'hidden',
      ...style
    }
  }, rest), typeof number !== 'undefined' && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-number)',
      lineHeight: 1,
      color: hover ? 'var(--crimson)' : 'var(--silver-40)',
      transition: 'color var(--dur) var(--ease-out)',
      marginBottom: 20
    }
  }, number), children, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      height: 2,
      background: 'var(--crimson)',
      width: hover ? '100%' : '0%',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  }));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DOI Eyebrow — small-caps label preceded (or wrapped) by a thin crimson line.
 * The signature section opener across the brand.
 */
function Eyebrow({
  children,
  align = 'left',
  line = 'before',
  color = 'var(--accent)',
  style,
  ...rest
}) {
  const lineEl = /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 1,
      background: color,
      flex: '0 0 auto'
    }
  });
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 14,
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-eyebrow)',
      fontWeight: 600,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, rest), (line === 'before' || line === 'both') && lineEl, children, (line === 'after' || line === 'both') && lineEl);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Marquee.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DOI Marquee — scrolling keyword strip between sections, bounded by hairline rules.
 * Pure-CSS infinite scroll; respects prefers-reduced-motion via the global base layer.
 */
function Marquee({
  items = [],
  separator = '/',
  speed = 28,
  style,
  ...rest
}) {
  const seq = items.length ? items : ['Strategy', 'Direction', 'Execution'];
  const run = key => /*#__PURE__*/React.createElement("div", {
    key: key,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 40,
      paddingRight: 40,
      flex: '0 0 auto'
    }
  }, seq.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, it), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--silver-40)'
    }
  }, separator))));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      whiteSpace: 'nowrap',
      padding: '16px 0',
      fontFamily: 'var(--font-body)',
      fontSize: '12px',
      fontWeight: 500,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      width: 'max-content',
      animation: `doi-marquee ${speed}s linear infinite`
    }
  }, run('a'), run('b'), /*#__PURE__*/React.createElement("style", null, `@keyframes doi-marquee { to { transform: translateX(-50%); } }`)));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DOI SectionHeading — eyebrow + large editorial (Cormorant) or display (Bebas) title.
 * Use *display* for hero/section numbers, *editorial* for content titles.
 */
function SectionHeading({
  eyebrow,
  title,
  emphasis,
  variant = 'editorial',
  align = 'left',
  children,
  style,
  ...rest
}) {
  const isDisplay = variant === 'display';
  const titleStyle = isDisplay ? {
    fontFamily: 'var(--font-display)',
    textTransform: 'uppercase',
    fontWeight: 400,
    lineHeight: 'var(--lh-hero)',
    letterSpacing: 'var(--ls-display)',
    fontSize: 'var(--text-display)'
  } : {
    fontFamily: 'var(--font-editorial)',
    fontWeight: 300,
    lineHeight: 'var(--lh-title)',
    fontSize: 'var(--text-title-lg)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    align: align
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      color: 'var(--text-primary)',
      maxWidth: '18ch',
      ...titleStyle
    }
  }, title, emphasis && /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: isDisplay ? 'var(--crimson)' : 'var(--text-secondary)'
    }
  }, ' ', emphasis)), children && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '52ch',
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)'
    }
  }, children));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DOI Stat — a big Bebas Neue figure over a small-caps label.
 * Used in the intro split and About credentials.
 */
function Stat({
  value,
  label,
  align = 'left',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-number)',
      lineHeight: 1,
      color: 'var(--text-primary)',
      letterSpacing: '0.01em'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-eyebrow)',
      fontWeight: 600,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DOI Input — dark field with a hairline underline that turns crimson on focus.
 * Label is a wide-tracked small-caps eyebrow.
 */
function Input({
  label,
  hint,
  type = 'text',
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `in-${String(label).toLowerCase().replace(/\s+/g, '-')}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '10px',
      fontWeight: 600,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: focus ? 'var(--crimson)' : 'var(--text-secondary)',
      transition: 'color var(--dur) var(--ease-out)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      background: 'transparent',
      color: 'var(--text-primary)',
      border: 'none',
      borderBottom: `1px solid ${focus ? 'var(--crimson)' : 'var(--border-strong)'}`,
      borderRadius: 0,
      padding: '12px 0',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-lg)',
      fontWeight: 300,
      outline: 'none',
      transition: 'border-color var(--dur) var(--ease-out)',
      width: '100%'
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DOI Select — native select styled as an underline field with a chevron.
 * Used for budget / timeline pickers on the contact form.
 */
function Select({
  label,
  options = [],
  value,
  onChange,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `sel-${String(label).toLowerCase().replace(/\s+/g, '-')}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '10px',
      fontWeight: 600,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: focus ? 'var(--crimson)' : 'var(--text-secondary)',
      transition: 'color var(--dur) var(--ease-out)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      background: 'transparent',
      color: 'var(--text-primary)',
      border: 'none',
      borderBottom: `1px solid ${focus ? 'var(--crimson)' : 'var(--border-strong)'}`,
      borderRadius: 0,
      padding: '12px 28px 12px 0',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-lg)',
      fontWeight: 300,
      outline: 'none',
      width: '100%',
      transition: 'border-color var(--dur) var(--ease-out)',
      cursor: 'pointer'
    }
  }, rest), options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value,
      style: {
        background: 'var(--charcoal)'
      }
    }, opt.label);
  })), /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-secondary)",
    strokeWidth: "1.5",
    strokeLinecap: "square",
    style: {
      position: 'absolute',
      right: 2,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** DOI Textarea — matches Input: underline field, crimson on focus. */
function Textarea({
  label,
  hint,
  rows = 4,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `ta-${String(label).toLowerCase().replace(/\s+/g, '-')}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '10px',
      fontWeight: 600,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: focus ? 'var(--crimson)' : 'var(--text-secondary)',
      transition: 'color var(--dur) var(--ease-out)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      background: 'transparent',
      color: 'var(--text-primary)',
      border: 'none',
      borderBottom: `1px solid ${focus ? 'var(--crimson)' : 'var(--border-strong)'}`,
      borderRadius: 0,
      padding: '12px 0',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-lg)',
      fontWeight: 300,
      outline: 'none',
      resize: 'vertical',
      lineHeight: 1.7,
      transition: 'border-color var(--dur) var(--ease-out)',
      width: '100%'
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/kit-content.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* DOI marketing site — content sections: IntroSplit, Services, WorkGrid. */
const DOIc = window.DOIMarketingDesignDesignSystem_a12e37;
const {
  Button: BtnC,
  Eyebrow: EyebrowC,
  SectionHeading: SectionHeadingC,
  Stat: StatC,
  Card: CardC,
  Badge: BadgeC
} = DOIc;
function IntroSplit() {
  const stats = [{
    v: '$500K',
    l: 'Budget managed / yr'
  }, {
    v: '10+',
    l: 'Years building brands'
  }, {
    v: '2',
    l: 'Brands run at once'
  }, {
    v: "'15",
    l: 'CEDIA Expo since'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "doi-container",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)',
      alignItems: 'center',
      padding: 'var(--section-pad-y) var(--section-pad-x)'
    }
  }, /*#__PURE__*/React.createElement(window.Media, {
    label: "Brand / campaign work",
    ratio: "4 / 5"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeadingC, {
    eyebrow: "A partner, not a vendor",
    title: "Most consultants strategize",
    emphasis: "or execute. We do both."
  }, "DOI is the senior marketing function for founders who are smart, busy, and frustrated that their marketing isn't working as hard as they are. Director-level thinking and creative craft \u2014 embedded into your brand, not bolted on."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6) var(--space-7)',
      marginTop: 'var(--space-7)',
      borderTop: '1px solid var(--border)',
      paddingTop: 'var(--space-6)'
    }
  }, stats.map(s => /*#__PURE__*/React.createElement(StatC, {
    key: s.l,
    value: s.v,
    label: s.l
  }))))));
}
function Services() {
  const services = [{
    n: '01',
    t: 'Marketing Diagnostic',
    p: 'A director-level audit of brand, channels, and competitive position. Deliverable: a prioritized 90-day action roadmap.',
    price: '$497',
    unit: 'one-time',
    tag: 'Entry point'
  }, {
    n: '02',
    t: 'Fractional Director',
    p: 'Up to 20 hrs/month of ongoing marketing leadership and execution. Monthly strategy call, async comms, shared dashboard.',
    price: '$2,500',
    unit: '/ month',
    tag: 'Most popular'
  }, {
    n: '03',
    t: 'Embedded Partner',
    p: 'Up to 40 hrs/month. Full marketing department — strategy, creative direction, vendor management, campaigns, events.',
    price: '$4,500',
    unit: '/ month',
    tag: null
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "doi-container",
    style: {
      padding: 'var(--section-pad-y) var(--section-pad-x)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 24,
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeadingC, {
    eyebrow: "Engagements",
    title: "Senior marketing,",
    emphasis: "three ways in.",
    variant: "display"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '34ch',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--lh-body)'
    }
  }, "Start with a diagnostic. Scale into a retainer. Pause anytime.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-5)'
    }
  }, services.map(s => /*#__PURE__*/React.createElement(CardC, {
    key: s.n,
    number: s.n,
    padding: "var(--space-7) var(--space-6) var(--space-6)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 300
    }
  }, s.tag && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(BadgeC, {
    tone: s.tag === 'Most popular' ? 'solid' : 'neutral'
  }, s.tag)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-editorial)',
      fontWeight: 300,
      fontSize: 'var(--text-title)',
      color: 'var(--text-primary)'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 0',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)'
    }
  }, s.p), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-6)',
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '2.6rem',
      color: 'var(--text-primary)',
      lineHeight: 1
    }
  }, s.price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, s.unit))))))));
}
function WorkGrid() {
  const projects = [{
    t: 'VSSL',
    cat: 'Outdoor / Lifestyle',
    d: 'Brand system from inception',
    span: 7,
    tall: false
  }, {
    t: 'TruAudio',
    cat: 'AV / Custom Install',
    d: 'Product launch campaign',
    span: 5,
    tall: false
  }, {
    t: 'CEDIA Expo',
    cat: 'Events',
    d: 'Annual tradeshow presence',
    span: 4,
    tall: true
  }, {
    t: 'ISE Barcelona',
    cat: 'Events',
    d: 'International booth build',
    span: 4,
    tall: true
  }, {
    t: 'Dealer Conference',
    cat: 'Experiential',
    d: 'Caribbean — 160 attendees',
    span: 4,
    tall: true
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    style: {
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "doi-container",
    style: {
      padding: 'var(--section-pad-y) var(--section-pad-x)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeadingC, {
    eyebrow: "Selected work",
    title: "Brands built and",
    emphasis: "scaled, hands-on.",
    variant: "display",
    style: {
      marginBottom: 'var(--space-8)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gap: 'var(--space-4)'
    }
  }, projects.map(p => /*#__PURE__*/React.createElement(WorkTile, _extends({
    key: p.t
  }, p))))));
}
function WorkTile({
  t,
  cat,
  d,
  span,
  tall
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#work",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      gridColumn: `span ${span}`,
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement(window.Media, {
    label: cat,
    ratio: tall ? '3 / 4' : '4 / 3',
    style: {
      height: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: hover ? 'translateY(0)' : 'translateY(8px)',
      opacity: hover ? 1 : 0.85,
      transition: 'all var(--dur) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--crimson)'
    }
  }, cat), /*#__PURE__*/React.createElement("h3", {
    className: "doi-display",
    style: {
      fontSize: '2rem',
      margin: '6px 0 0'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      maxHeight: hover ? 40 : 0,
      opacity: hover ? 1 : 0,
      overflow: 'hidden',
      transition: 'all var(--dur) var(--ease-out)'
    }
  }, d))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      height: 2,
      background: 'var(--crimson)',
      width: hover ? '100%' : '0%',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  }));
}
Object.assign(window, {
  IntroSplit,
  Services,
  WorkGrid
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/kit-content.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/kit-more.jsx
try { (() => {
/* DOI marketing site — Industries, Process, Testimonial, CTA, and the App composition. */
const DOIm = window.DOIMarketingDesignDesignSystem_a12e37;
const {
  Button: BtnM,
  Eyebrow: EyebrowM,
  SectionHeading: SectionHeadingM,
  Marquee: MarqueeM
} = DOIm;
function Industries() {
  const items = [{
    t: 'AV / Consumer Tech',
    d: 'Custom install, outdoor audio, product brands. CEDIA and ISE fluency on day one.'
  }, {
    t: 'Outdoor / Lifestyle',
    d: 'Built VSSL from inception — we know how to launch and scale a lifestyle brand.'
  }, {
    t: 'B2B / SaaS',
    d: 'Remote-first companies scaling past $1M who need direction and execution, not a generalist.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "doi-container",
    style: {
      padding: 'var(--section-pad-y) var(--section-pad-x)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeadingM, {
    eyebrow: "Industries",
    title: "We speak your language.",
    style: {
      marginBottom: 'var(--space-8)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 0,
      borderTop: '1px solid var(--border)'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it.t,
    style: {
      padding: 'var(--space-7) var(--space-6)',
      borderBottom: '1px solid var(--border)',
      borderRight: i < 2 ? '1px solid var(--border)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "doi-display",
    style: {
      fontSize: '1.9rem',
      marginBottom: 16
    }
  }, it.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)'
    }
  }, it.d))))));
}
function Process() {
  const steps = [{
    n: '01',
    t: 'Diagnostic',
    d: 'Brand, channel, and competitor audit → a prioritized 90-day roadmap.'
  }, {
    n: '02',
    t: 'Strategy',
    d: 'Priorities, channels, and measurable goals — agreed before we build.'
  }, {
    n: '03',
    t: 'Execution',
    d: 'Async updates via Loom, shared Notion dashboard, one 60-min monthly call.'
  }, {
    n: '04',
    t: 'Momentum',
    d: 'Systems that compound month over month. No weekly status calls.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "process",
    style: {
      borderBottom: '1px solid var(--border)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 600,
      height: 600,
      left: '50%',
      top: '-30%',
      transform: 'translateX(-50%)',
      background: 'var(--glow-crimson)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "doi-container",
    style: {
      position: 'relative',
      padding: 'var(--section-pad-y) var(--section-pad-x)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeadingM, {
    eyebrow: "How it works",
    title: "Async-first,",
    emphasis: "built for busy founders.",
    variant: "display",
    align: "center",
    style: {
      alignItems: 'center',
      margin: '0 auto var(--space-8)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-5)'
    }
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      paddingTop: 'var(--space-5)',
      borderTop: '2px solid var(--crimson)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '3rem',
      lineHeight: 1,
      color: 'var(--text-primary)'
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '18px 0 10px',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-primary)'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)'
    }
  }, s.d))))));
}
function Testimonial() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "doi-container",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.3fr',
      gap: 'var(--space-8)',
      alignItems: 'center',
      padding: 'var(--section-pad-y) var(--section-pad-x)'
    }
  }, /*#__PURE__*/React.createElement(window.Media, {
    label: "Eric Doi \u2014 on-site",
    ratio: "1 / 1"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EyebrowM, null, "The difference"), /*#__PURE__*/React.createElement("blockquote", {
    className: "doi-editorial",
    style: {
      margin: '24px 0 0',
      fontSize: 'var(--text-title-lg)',
      lineHeight: 1.25,
      color: 'var(--text-primary)'
    }
  }, "\u201CDirector-level thinking ", /*#__PURE__*/React.createElement("em", null, "without"), " a director-level salary. We've built brands from inception and run two of them at once \u2014 we know what it takes to launch and scale.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 40,
      background: 'var(--crimson)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '0.08em',
      color: 'var(--text-primary)'
    }
  }, "Eric Doi"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Founder \xB7 Marketing & Creative Director"))))));
}
function CTASection({
  onContact
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(window.Media, {
    label: "",
    ratio: "auto",
    style: {
      position: 'absolute',
      inset: 0,
      aspectRatio: 'auto',
      border: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "doi-container",
    style: {
      position: 'relative',
      textAlign: 'center',
      padding: 'var(--space-10) var(--section-pad-x)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "doi-display",
    style: {
      fontSize: 'var(--text-display)',
      margin: '0 auto',
      maxWidth: '16ch'
    }
  }, "Your marketing should work", /*#__PURE__*/React.createElement("br", null), "as hard as ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--crimson)'
    }
  }, "you do.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px auto 36px',
      maxWidth: '46ch',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)'
    }
  }, "Start with a $497 diagnostic. Walk away with a 90-day roadmap \u2014 whether or not we work together after."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(BtnM, {
    variant: "primary",
    size: "lg",
    arrow: true,
    onClick: onContact
  }, "Book a Diagnostic"), /*#__PURE__*/React.createElement(BtnM, {
    variant: "secondary",
    size: "lg",
    href: "#services"
  }, "See engagements"))));
}
function App() {
  const [contact, setContact] = React.useState(false);
  const open = () => setContact(true);
  return /*#__PURE__*/React.createElement("div", {
    id: "site-scroll",
    style: {
      height: '100vh',
      overflowY: 'auto',
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement(window.Nav, {
    onContact: open
  }), /*#__PURE__*/React.createElement(window.Hero, {
    onContact: open
  }), /*#__PURE__*/React.createElement(MarqueeM, {
    items: ['Strategy', 'Direction', 'Execution', 'Brand Systems', 'Product Launches', 'Tradeshows', 'Campaigns', 'Creative Direction']
  }), /*#__PURE__*/React.createElement(window.IntroSplit, null), /*#__PURE__*/React.createElement(window.Services, null), /*#__PURE__*/React.createElement(window.WorkGrid, null), /*#__PURE__*/React.createElement(Industries, null), /*#__PURE__*/React.createElement(Process, {
    onContact: open
  }), /*#__PURE__*/React.createElement(Testimonial, null), /*#__PURE__*/React.createElement(CTASection, {
    onContact: open
  }), /*#__PURE__*/React.createElement(window.Footer, {
    onContact: open
  }), /*#__PURE__*/React.createElement(window.ContactOverlay, {
    open: contact,
    onClose: () => setContact(false)
  }));
}
Object.assign(window, {
  Industries,
  Process,
  Testimonial,
  CTASection,
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/kit-more.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/kit-shell.jsx
try { (() => {
/* DOI marketing site — shared shell: Media placeholder, Nav, Hero, Footer, Contact overlay.
   Composes design-system primitives off the global namespace. */
const DOI = window.DOIMarketingDesignDesignSystem_a12e37;
const {
  Button,
  Eyebrow,
  SectionHeading,
  Stat,
  Marquee,
  Input,
  Textarea,
  Select,
  Badge
} = DOI;

/* Atmospheric image placeholder — dark charcoal + crimson glow + grain + darkening overlay.
   Swap for real photography (see README). */
function Media({
  label = 'Photography',
  ratio = '4 / 3',
  glow = true,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      width: '100%',
      overflow: 'hidden',
      background: `linear-gradient(150deg, #15171a 0%, #0d0e10 55%, #050506 100%)`,
      border: '1px solid var(--border)',
      ...style
    }
  }, glow && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: '70%',
      height: '70%',
      right: '-10%',
      top: '-20%',
      background: 'var(--glow-crimson)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--img-overlay)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      opacity: 0.05
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 16,
      bottom: 14,
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--silver-40)'
    }
  }, label), children);
}
function Nav({
  onContact
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const root = document.getElementById('site-scroll') || window;
    const el = document.getElementById('site-scroll');
    const handler = () => setScrolled((el ? el.scrollTop : window.scrollY) > 20);
    root.addEventListener('scroll', handler);
    return () => root.removeEventListener('scroll', handler);
  }, []);
  const links = ['Work', 'Services', 'Process', 'About'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      height: 'var(--nav-height)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--section-pad-x)',
      background: scrolled ? 'rgba(10,11,12,0.72)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'background var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/Doi-Icon-darkBK.svg",
    alt: "DOI",
    style: {
      height: 38
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/Doi-DarkBackground.svg",
    alt: "DOI Marketing + Design Co.",
    style: {
      height: 30
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 38
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: '#' + l.toLowerCase(),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: 'var(--ls-nav)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    onClick: onContact
  }, "Start a project")));
}
function Hero({
  onContact
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      minHeight: '88vh',
      display: 'flex',
      alignItems: 'flex-end',
      borderBottom: '1px solid var(--border)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Media, {
    label: "Hero \u2014 atmospheric brand image",
    ratio: "auto",
    style: {
      position: 'absolute',
      inset: 0,
      aspectRatio: 'auto',
      border: 'none'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/Doi-Icon-darkBK.svg",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '-2%',
      top: '6%',
      height: '92%',
      opacity: 0.05,
      filter: 'grayscale(1)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "doi-container",
    style: {
      position: 'relative',
      width: '100%',
      paddingBottom: 'var(--space-9)',
      paddingTop: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Fractional Marketing Director"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.25fr 1fr',
      gap: 'var(--space-8)',
      alignItems: 'end',
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "doi-display",
    style: {
      fontSize: 'var(--text-hero)',
      margin: 0
    }
  }, "Strategy.", /*#__PURE__*/React.createElement("br", null), "Direction.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--crimson)'
    }
  }, "Execution.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
      paddingBottom: 12
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)',
      maxWidth: '42ch'
    }
  }, "Senior marketing leadership and creative direction for growing brands \u2014 without the cost of a full-time hire. Director-level thinking, built into systems that compound month over month."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true,
    onClick: onContact
  }, "Book a Diagnostic"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: "#work"
  }, "View Work"))))));
}
function Footer({
  onContact
}) {
  const cols = [{
    h: 'Services',
    items: ['Marketing Diagnostic', 'Fractional Director', 'Embedded Partner', 'Project Work']
  }, {
    h: 'Company',
    items: ['Work', 'Process', 'About Eric', 'Contact']
  }, {
    h: 'Connect',
    items: ['LinkedIn', 'Email', 'Schedule a call']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border)',
      padding: 'var(--space-9) 0 var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "doi-container",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/Doi-DarkBackground.svg",
    alt: "DOI Marketing + Design Co.",
    style: {
      height: 40,
      marginBottom: 22
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)',
      maxWidth: '34ch'
    }
  }, "Fractional marketing leadership and creative direction for growing product, AV, outdoor, and B2B brands."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      fontSize: 'var(--text-xs)',
      letterSpacing: '0.06em',
      color: 'var(--text-muted)'
    }
  }, "St. George, Utah \xB7 Remote-first")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-primary)',
      marginBottom: 18
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, c.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)'
    }
  }, it))))))), /*#__PURE__*/React.createElement("div", {
    className: "doi-container",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 'var(--space-8)',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      letterSpacing: '0.06em'
    }
  }, "\xA9 2026 DOI Marketing + Design Co."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      letterSpacing: '0.16em',
      textTransform: 'uppercase'
    }
  }, "Strategy \xB7 Direction \xB7 Execution")));
}
function ContactOverlay({
  open,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(0,0,0,0.7)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 'min(520px, 100%)',
      height: '100%',
      background: 'var(--dark-bg)',
      borderLeft: '1px solid var(--border-strong)',
      boxShadow: 'var(--shadow-overlay)',
      padding: 'var(--space-8) var(--space-7)',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Start a project"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      background: 'none',
      border: '1px solid var(--border-strong)',
      color: 'var(--text-secondary)',
      width: 38,
      height: 38,
      cursor: 'pointer',
      fontSize: 16
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("h2", {
    className: "doi-editorial",
    style: {
      fontSize: 'var(--text-title)',
      marginBottom: 28
    }
  }, "Tell us where your", /*#__PURE__*/React.createElement("br", null), "marketing is ", /*#__PURE__*/React.createElement("em", null, "stuck.")), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => e.preventDefault(),
    style: {
      display: 'grid',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Jane Founder"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    type: "email",
    placeholder: "jane@brand.com"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Engagement",
    options: ['Marketing Diagnostic — $497', 'Fractional Director — $2,500/mo', 'Embedded Partner — $4,500/mo', 'Project work', 'Not sure yet']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Timeline",
    options: ['ASAP', 'This quarter', 'Exploring options']
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "What are you trying to fix?",
    rows: 3,
    placeholder: "A few sentences is plenty."
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true
  }, "Send inquiry"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "Director-level reply within one business day."))));
}
Object.assign(window, {
  Media,
  Nav,
  Hero,
  Footer,
  ContactOverlay
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/kit-shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
