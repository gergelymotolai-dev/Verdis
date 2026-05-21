// components.jsx v2 — Shared UI primitives for Verdis (editorial-modern)

const { useState, useEffect, useRef } = React;

// ─── Section wrapper ─────────────────────────────────────────────
function Section({ id, num, label, children, style = {} }) {
  return (
    <section id={id} className="v-section" style={style}>
      <Container>
        {label && (
          <div className="v-section-label">
            <span className="v-section-label-num">{num}</span>
            <span className="v-section-label-line" />
            <span>{label}</span>
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}

// ─── Container ───────────────────────────────────────────────────
function Container({ children, wide = false, style = {} }) {
  return (
    <div className={"v-container" + (wide ? " v-container--wide" : "")} style={style}>
      {children}
    </div>
  );
}

// ─── Button ──────────────────────────────────────────────────────
function Button({ children, variant = "primary", href, onClick, type, size = "md", noArrow }) {
  const cls = `v-btn v-btn--${variant} v-btn--${size}`;
  const inner = (
    <React.Fragment>
      {children}
      {!noArrow && <span className="v-btn-arrow">→</span>}
    </React.Fragment>
  );
  if (href) return <a href={href} className={cls} onClick={onClick}>{inner}</a>;
  return <button type={type || "button"} className={cls} onClick={onClick}>{inner}</button>;
}

// ─── Pill ────────────────────────────────────────────────────────
function Pill({ children, dot = true, mono = false }) {
  return (
    <span className={"v-pill" + (mono ? " v-pill-mono" : "")}>
      {dot && <span className="v-blink" />}
      {children}
    </span>
  );
}

// ─── Striped placeholder ─────────────────────────────────────────
function Placeholder({ label, ratio = "16/9", style = {}, dense = false }) {
  const id = label?.replace(/\W/g, '-');
  return (
    <div className="v-ph" style={{ aspectRatio: ratio, ...style }}>
      <svg className="v-ph-stripes" preserveAspectRatio="none" viewBox="0 0 100 100">
        <defs>
          <pattern id={`stripe-${id}`} patternUnits="userSpaceOnUse" width={dense ? "4" : "8"} height={dense ? "4" : "8"} patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2={dense ? "4" : "8"} stroke="currentColor" strokeWidth={dense ? "0.6" : "1"} opacity="0.45" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill={`url(#stripe-${id})`} />
      </svg>
      <div className="v-ph-label">
        <span className="v-ph-bracket">[</span>
        <span>{label}</span>
        <span className="v-ph-bracket">]</span>
      </div>
    </div>
  );
}

// ─── Logomark ────────────────────────────────────────────────────
function Logomark({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeOpacity="0.4" />
      <circle cx="12" cy="12" r="6" fill="currentColor" />
      <circle cx="12" cy="12" r="2.5" fill="var(--v-bg)" />
    </svg>
  );
}

// ─── Metric ──────────────────────────────────────────────────────
function Metric({ value, label, suffix }) {
  return (
    <div className="v-metric">
      <div className="v-metric-value">
        {value}<span className="v-metric-suffix">{suffix}</span>
      </div>
      <div className="v-metric-label">{label}</div>
    </div>
  );
}

// ─── Spec row ────────────────────────────────────────────────────
function SpecRow({ k, v }) {
  return (
    <div className="v-spec">
      <span className="v-spec-k">{k}</span>
      <span className="v-spec-dots" />
      <span className="v-spec-v">{v}</span>
    </div>
  );
}

// ─── Scroll reveal wrapper ───────────────────────────────────────
function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("v-in"), delay);
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "-50px 0px", threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return <div ref={ref} className="v-reveal">{children}</div>;
}

// ─── Marquee ─────────────────────────────────────────────────────
function Marquee({ items }) {
  const all = [...items, ...items];
  return (
    <div className="v-marquee">
      <div className="v-marquee-track">
        {all.map((item, i) => (
          <span key={i} className="v-marquee-item">
            <span className="v-marquee-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, {
  Section, Container, Button, Pill, Placeholder, Logomark, Metric, SpecRow, Reveal, Marquee
});
