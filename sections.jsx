// sections.jsx v2 — Editorial-modern sections for Verdis

const { useState: useStateS, useEffect: useEffectS, useRef: useRefS } = React;

// ════════════════════════════════════════════════════════════════
// NAV — pill style
// ════════════════════════════════════════════════════════════════
function Nav({ showPricing }) {
  return (
    <header className="v-nav">
      <div className="v-nav-inner">
        <a href="#top" className="v-nav-brand">
          <Logomark size={20} />
          <span>Verdis</span>
        </a>
        <nav className="v-nav-links">
          <a href="#system">System</a>
          <a href="#features">Features</a>
          <a href="#sectors">Sectors</a>
          {showPricing && <a href="#pricing">Pricing</a>}
          <a href="#contact">Contact</a>
        </nav>
        <div className="v-nav-cta">
          <Button href="#demo" variant="primary" size="sm">Request demo</Button>
        </div>
      </div>
    </header>);

}

// ════════════════════════════════════════════════════════════════
// HERO
// ════════════════════════════════════════════════════════════════
function Hero({ audienceEmphasis }) {
  // Three variants of the headline with serif italic accent
  let headline;
  if (audienceEmphasis === "edu") {
    headline = <>Greenhouse operations,<br /><em>built for research.</em></>;
  } else if (audienceEmphasis === "commercial") {
    headline = <>Greenhouse operations,<br /><em>built for production.</em></>;
  } else {
    headline = <>Greenhouse operations,<br /><em>built</em> around your facility.</>;
  }

  return (
    <section id="top" className="v-hero">
      <Container>
        <div className="v-hero-pill">
          <Pill mono>VERDIS · v1.4 · custom builds open</Pill>
        </div>
        <h1 className="v-h-display">{headline}</h1>
        <p className="v-hero-sub">
          A custom-built management platform for research greenhouses and
          commercial growers. Track 140+ rooms across dozens of hallways, route
          service requests with instant push notifications, log pest scouting and
          inventory — on desktop, tablet, and phone.
        </p>
        <div className="v-hero-cta">
          <Button href="#demo" variant="primary" size="lg">Request a demo</Button>
          <Button href="#system" variant="ghost" size="lg">Explore the system</Button>
          <span className="v-hero-fineprint">// 30-min walkthrough · no commitment</span>
        </div>
      </Container>

      <Container wide>
        <Reveal>
          <div className="v-hero-mock">
            <SystemPreview />
          </div>
        </Reveal>
      </Container>
    </section>);

}

// ════════════════════════════════════════════════════════════════
// SYSTEM PREVIEW — accurate representation of the actual software
// ════════════════════════════════════════════════════════════════
function SystemPreview() {
  // Hallway palette modeled after the real app's colored hallway headers
  const halls = [
  { name: "Hallway A", count: 14, color: "linear-gradient(135deg,#0d9488,#0891b2)" },
  { name: "Hallway B", count: 14, color: "linear-gradient(135deg,#16a34a,#15803d)" },
  { name: "Hallway C", count: 14, color: "linear-gradient(135deg,#0891b2,#0e7490)" },
  { name: "Hallway D", count: 14, color: "linear-gradient(135deg,#7c3aed,#6d28d9)" },
  { name: "Hallway E", count: 14, color: "linear-gradient(135deg,#db2777,#be185d)" },
  { name: "Hallway F", count: 14, color: "linear-gradient(135deg,#f59e0b,#d97706)" }];


  // Generate room statuses per hallway
  const statuses = ["assigned", "assigned", "assigned", "assigned", "empty", "assigned", "empty", "task", "assigned", "assigned", "alert", "assigned", "assigned", "empty"];

  return (
    <div className="v-preview">
      {/* Browser chrome */}
      <div className="v-preview-chrome">
        <div className="v-preview-dots">
          <span /><span /><span />
        </div>
        <div className="v-preview-url">
          <span className="v-preview-url-lock">⌁</span>
          verdissolution.com
        </div>
        <div className="v-preview-actions">
          <span>auto-sync · 14s</span>
          <span className="v-preview-live"><span className="v-live-dot" /> live</span>
        </div>
      </div>

      {/* App body — mirrors the real software */}
      <div className="v-app">
        {/* Hero header — dark green gradient bar */}
        <div className="v-app-hero">
          <div className="v-app-hero-l">
            <h3 className="v-app-hero-title">Greenhouse Management System</h3>
          </div>
          <div className="v-app-hero-r">
            <div className="v-app-hero-meta">
              <span className="v-app-user">Dr. Motolai</span>
              <button className="v-app-logout">Logout</button>
            </div>
            <div className="v-app-hero-date">Today: May 21, 2026 <span className="v-app-sync">· synced 14s ago</span></div>
          </div>
        </div>

        {/* Pill nav tabs */}
        <div className="v-app-nav">
          {[
          ["Home", true],
          ["Requests", false, 7],
          ["To-Do", false, 3],
          ["Pests", false],
          ["Temperature", false],
          ["Inventory", false],
          ["Reports", false],
          ["History", false],
          ["Settings", false]].
          map(([label, active, badge]) =>
          <button key={label} className={"v-app-tab" + (active ? " v-app-tab--active" : "")}>
              {label}
              {badge && <span className="v-app-tab-badge">{badge}</span>}
            </button>
          )}
        </div>

        {/* Quick Actions */}
        <div className="v-app-qa">
          <div className="v-app-qa-title">Quick Actions</div>
          <div className="v-app-qa-grid">
            <button className="v-app-qa-btn v-app-qa-btn--amber">Report Maintenance Issue</button>
            <button className="v-app-qa-btn v-app-qa-btn--emerald">Environmental Control Change</button>
            <button className="v-app-qa-btn v-app-qa-btn--green">Biological Pest Program</button>
            <button className="v-app-qa-btn v-app-qa-btn--sky">Request Pesticide Application</button>
            <button className="v-app-qa-btn v-app-qa-btn--teal">Reserve Room</button>
          </div>
        </div>

        {/* Selectors */}
        <div className="v-app-sel">
          <div className="v-app-sel-field">
            <label>Select Hallway</label>
            <div className="v-app-select">Hallway B <span className="v-app-select-chev">▾</span></div>
          </div>
          <div className="v-app-sel-field">
            <label>Select Room</label>
            <div className="v-app-select v-app-select--dis">— select hallway first — <span className="v-app-select-chev">▾</span></div>
          </div>
        </div>

        {/* Greenhouse Map */}
        <div className="v-app-map">
          <div className="v-app-map-h">
            <span className="v-app-map-title">
              <span className="v-app-map-bar" />
              Greenhouse Map
            </span>
            <div className="v-app-map-toggle">
              <span>Availability</span>
              <span className="v-app-map-switch"><span /></span>
              <span>Utilization</span>
            </div>
          </div>

          <div className="v-app-map-grid">
            {halls.map((h, hi) =>
            <div key={h.name} className="v-app-hall">
                <div className="v-app-hall-h" style={{ background: h.color }}>
                  <span>{h.name}</span>
                  <span className="v-app-hall-count">{h.count} rooms</span>
                </div>
                <div className="v-app-rooms">
                  {statuses.map((s, ri) => {
                  const rotated = statuses[(ri + hi * 3) % statuses.length];
                  return (
                    <div key={ri} className={"v-app-room v-app-room--" + rotated}>
                        <span className="v-app-room-n">{String.fromCharCode(65 + hi)}-{String(ri + 1).padStart(2, "0")}</span>
                      </div>);

                })}
                </div>
              </div>
            )}
          </div>

          <div className="v-app-legend">
            <span><i className="v-app-sw v-app-sw--assigned" /> Assigned</span>
            <span><i className="v-app-sw v-app-sw--empty" /> Available</span>
            <span><i className="v-app-sw v-app-sw--task" /> Active task</span>
            <span><i className="v-app-sw v-app-sw--alert" /> Maintenance</span>
            <span className="v-app-legend-r">Click a room to select it</span>
          </div>
        </div>
      </div>
    </div>);

}

// ════════════════════════════════════════════════════════════════
// MARQUEE STRIP
// ════════════════════════════════════════════════════════════════
function TrustStrip() {
  const items = [
  "140+ rooms managed",
  "Built on Firebase / Firestore",
  "SOC 2 Type II infrastructure",
  "Real-time multi-user sync",
  "Push notifications via FCM",
  "Installable PWA · offline-ready",
  "Custom builds per client",
  "Encryption at rest + in transit"];

  return <Marquee items={items} />;
}

// ════════════════════════════════════════════════════════════════
// SYSTEM SECTION — bento grid
// ════════════════════════════════════════════════════════════════
function SystemSection() {
  // Sample illustrations
  const rooms = [
  "on", "on", "on", "warn", "on", "on", "on", "on",
  "on", "alert", "on", "on", "on", "warn", "on", "on"];


  return (
    <Section id="system" num="01" label="THE SYSTEM">
      <div className="v-section-head">
        <Reveal>
          <h2 className="v-h2">One <em>source of truth</em> for the whole facility.</h2>
          <p className="v-section-sub">
            Originally hardened in a 140-room university research facility, Verdis
            collapses spreadsheets, sticky notes, and group chats into one live view
            that every operator shares.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <div className="v-bento">
          {/* LG: Rooms */}
          <div className="v-bento-cell v-bento-cell--lg">
            <div className="v-bento-tag">01 · ROOM MANAGEMENT</div>
            <h3 className="v-bento-h">Every room, color-coded, live.</h3>
            <p className="v-bento-p">
              Track 140+ rooms across hallways. Click any tile for temperature,
              lighting, sulfur, current and next user. Color-coded by availability
              or utilization. Click-to-select rooms, hallway-grouped layout.
            </p>
            <div className="v-bento-art">
              <div className="v-illu-rooms">
                {[...rooms, ...rooms].map((s, i) =>
                <span key={i} className={s} />
                )}
              </div>
            </div>
          </div>

          {/* MD: Push notifications */}
          <div className="v-bento-cell v-bento-cell--md">
            <div className="v-bento-tag">02 · INSTANT ROUTING</div>
            <h3 className="v-bento-h">Push notifications to phone or desktop.</h3>
            <p className="v-bento-p">
              The moment a request lands, the right manager hears about it — via
              Firebase Cloud Messaging.
            </p>
            <div className="v-bento-art">
              <div className="v-illu-notif">
                <div className="v-notif">
                  <span className="v-notif-dot v-notif-dot--alert" />
                  <span>maintenance · room C-04</span>
                  <span className="v-notif-time">12s ago</span>
                </div>
                <div className="v-notif">
                  <span className="v-notif-dot" />
                  <span>reservation · room A-11</span>
                  <span className="v-notif-time">1m ago</span>
                </div>
                <div className="v-notif">
                  <span className="v-notif-dot v-notif-dot--warn" />
                  <span>pesticide · hallway D</span>
                  <span className="v-notif-time">4m ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* MD: Real-time sync */}
          <div className="v-bento-cell v-bento-cell--md">
            <div className="v-bento-tag">03 · LIVE SYNC</div>
            <h3 className="v-bento-h">Real-time, multi-user, no clobbering.</h3>
            <p className="v-bento-p">
              Auto-sync every 15 seconds with conflict-aware merge.
              Unsaved edits preserved during sync.
            </p>
            <div className="v-bento-art">
              <div className="v-illu-pulse">
                {Array.from({ length: 14 }).map((_, i) =>
                <span key={i} style={{ animationDelay: `${i * 0.12}s` }} />
                )}
              </div>
            </div>
          </div>

          {/* SM: Scouting */}
          <div className="v-bento-cell v-bento-cell--sm">
            <div className="v-bento-tag">04 · SCOUTING</div>
            <h3 className="v-bento-h">Pest tracking, 0–5 severity.</h3>
            <p className="v-bento-p">
              Visual pest map, scouting history, per-room ratings.
            </p>
          </div>

          {/* SM: Inventory */}
          <div className="v-bento-cell v-bento-cell--sm">
            <div className="v-bento-tag">05 · INVENTORY</div>
            <h3 className="v-bento-h">Auto-deduct on application.</h3>
            <p className="v-bento-p">
              Supplies, pesticides, tools — with low-stock alerts and
              usage logs.
            </p>
          </div>

          {/* SM: Reports */}
          <div className="v-bento-cell v-bento-cell--sm">
            <div className="v-bento-tag">06 · REPORTS</div>
            <h3 className="v-bento-h">PDF / CSV exports.</h3>
            <p className="v-bento-p">
              Utilization, pesticide logs, scouting, maintenance,
              audit history.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>);

}

// ════════════════════════════════════════════════════════════════
// FEATURES — alternating editorial rows + extras grid
// ════════════════════════════════════════════════════════════════
function FeaturesSection() {
  const rows = [
  {
    n: "01",
    t: "Multi-zone room management at scale.",
    p: "Track 140+ rooms across 10+ hallways. Color-coded by availability or utilization. Click-to-select rooms with full edit history. The Requests and Tasks tabs surface only the rooms that need attention.",
    tags: ["140+ rooms", "Hallway grouping", "Color-coded states", "Click-to-edit"],
    art: <MiniRoomsMock />
  },
  {
    n: "02",
    t: "Service requests with manager approval workflow.",
    p: "Six request types — maintenance, environmental, pesticide, reservation, beneficial release, and meeting — flow through a manager approval chain. Push notifications fire the instant a user submits.",
    tags: ["6 request types", "Approval workflow", "Push notifications", "FCM + Cloud Functions"],
    art: <MiniRequestsAnim />,
    rev: true
  },
  {
    n: "03",
    t: "One app. Every device you own.",
    p: "Installable as a Progressive Web App on Windows, macOS, Android, and iPhone — no app-store gatekeeping, no separate codebases. Workbox service worker keeps the app running on spotty greenhouse Wi-Fi; Firestore offline persistence syncs changes the moment connectivity returns.",
    tags: ["Windows · macOS", "iPhone · iPad", "Android", "Offline-ready PWA"],
    art: <DeviceShowcase />
  }];


  const extras = [
  { k: "F.04", t: "Climate & temperature", d: "Per-room temperature, lighting, and sulfur settings. Read from existing hardware via integration adapter." },
  { k: "F.05", t: "Humidity monitoring", d: "Hooked into your sensor network. Threshold alerts, trending, export." },
  { k: "F.06", t: "Data logging & analytics", d: "Per-room utilization graphs, color-coded tables, point-level edits." },
  { k: "F.07", t: "Alerts & thresholds", d: "Low-stock inventory, maintenance flags, task notifications to specific staff." },
  { k: "F.08", t: "Integrates with existing equipment", d: "Adapter-based integration with current climate, irrigation, and sensor hardware." },
  { k: "F.09", t: "Audit trail", d: "Every action logged. Per-entry delete for admins. PDF or CSV export for compliance." },
  { k: "F.10", t: "Role-based access", d: "Admin / Manager / User tiers. SHA-256 with per-user salt, 15-minute session timeout." },
  { k: "F.11", t: "Employee directory", d: "Greenhouse and HNR staff management with user account linking." },
  { k: "F.12", t: "Auto-deduct inventory", d: "Pesticides auto-deduct on application. Low-stock alerts before you run out." }];


  return (
    <Section id="features" num="02" label="FEATURES">
      <div className="v-section-head">
        <Reveal>
          <h2 className="v-h2">Twelve modules. <em>One platform.</em> Pick what fits.</h2>
          <p className="v-section-sub">
            Every install is configured to the client. The catalog reflects what's
            available — not what you're forced to deploy.
          </p>
        </Reveal>
      </div>

      <div className="v-feat-list">
        {rows.map((r, i) =>
        <Reveal key={r.n} delay={i * 60}>
            <div className={"v-feat-row" + (r.rev ? " v-feat-row--rev" : "")}>
              <div className="v-feat-row-text">
                <div className="v-feat-num">{r.n}</div>
                <h3 className="v-feat-row-h">{r.t}</h3>
                <p className="v-feat-row-p">{r.p}</p>
                <div className="v-feat-row-meta">
                  {r.tags.map((t) => <span key={t} className="v-feat-tag">{t}</span>)}
                </div>
              </div>
              <div className="v-feat-row-art">
                {r.art}
              </div>
            </div>
          </Reveal>
        )}
      </div>

      <Reveal>
        <div className="v-feat-extras-head">
          <span>+ NINE MORE</span>
          <span className="v-feat-extras-line" />
        </div>
        <div className="v-feat-extras">
          {extras.map((f) =>
          <div key={f.k} className="v-feat-extra">
              <div className="v-feat-extra-k">{f.k}</div>
              <h4 className="v-feat-extra-t">{f.t}</h4>
              <p className="v-feat-extra-d">{f.d}</p>
            </div>
          )}
        </div>
      </Reveal>
    </Section>);

}

// ════════════════════════════════════════════════════════════════
// SECTORS
// ════════════════════════════════════════════════════════════════
function SectorsSection({ audienceEmphasis }) {
  const edu = {
    label: "FOR EDUCATION",
    title: <>University research & <em>horticulture programs.</em></>,
    copy: "Verdis was hardened in production at a major land-grant research greenhouse. It's built around the realities of academic operations: rotating student workers, principal investigators with their own assignments, compliance audit trails, and the kind of reporting that only matters when grants are on the line.",
    photo: "facility-research.png",
    photoLabel: "Research & horticulture",
    use: [
    "University research facilities",
    "Community college horticulture programs",
    "Land-grant ag extension stations",
    "Botanical research collections"]

  };
  const com = {
    label: "FOR COMMERCIAL",
    title: <>Nurseries, growers & <em>production facilities.</em></>,
    copy: "Production environments need throughput and reliability. Verdis brings the same room-level rigor to commercial growers — pesticide compliance logging, batch reservations, beneficial release tracking, and the data trail that buyers and regulators increasingly expect.",
    photo: "facility-production.png",
    photoLabel: "Nurseries & production",
    use: [
    "Commercial nurseries",
    "Hydroponic & vertical farms",
    "Plant production at scale",
    "Custom workflow per facility"]

  };
  const order = audienceEmphasis === "commercial" ? [com, edu] : [edu, com];

  return (
    <Section id="sectors" num="03" label="SECTORS">
      <div className="v-section-head">
        <Reveal>
          <h2 className="v-h2">Same platform. <em>Different operational realities.</em></h2>
          <p className="v-section-sub">
            Verdis ships as a configurable core, then bends to fit your facility —
            not the other way around.
          </p>
        </Reveal>
      </div>
      <div className="v-sector-grid">
        {order.map((s, i) =>
        <Reveal key={s.label} delay={i * 80}>
            <div className={"v-sector" + (i === 0 ? " v-sector--lead" : "")}>
              <Pill dot={false} mono>{s.label}</Pill>
              <h3 className="v-sector-h">{s.title}</h3>
              <FacilityMock src={s.photo} label={s.photoLabel} alt={s.photoLabel} />
              <p className="v-sector-p">{s.copy}</p>
              <ul className="v-sector-ul">
                {s.use.map((u) =>
              <li key={u}><span className="v-tick">+</span>{u}</li>
              )}
              </ul>
            </div>
          </Reveal>
        )}
      </div>
    </Section>);

}

// ════════════════════════════════════════════════════════════════
// DIFFERENTIATORS
// ════════════════════════════════════════════════════════════════
function DiffSection() {
  const diffs = [
  {
    n: "I",
    t: "Custom to your facility.",
    d: "Off-the-shelf systems force your operation into their data model. Verdis is the opposite — we map our core to your hallway naming, your request taxonomy, your role hierarchy, your reporting templates. Every deployment is bespoke, on a proven foundation.",
    bullets: [
    "Custom hallway / zone schema",
    "Your request types, not ours",
    "Per-client role & permission model",
    "Reporting tuned to your compliance needs"]

  },
  {
    n: "II",
    t: "Enterprise-grade infrastructure.",
    d: "Verdis runs on Google Cloud's Firebase platform. Firestore handles the data layer with SOC 2 Type II compliance, encryption at rest and in transit, and Google's global infrastructure underneath every read and write — no servers for you to maintain.",
    bullets: [
    "SOC 2 Type II compliant Firebase",
    "Encryption at rest + in transit",
    "SHA-256 + per-user salt",
    "Firestore security rules + audit trail"]

  },
  {
    n: "III",
    t: "Reliability you can plan around.",
    d: "Greenhouses don't take weekends off. Verdis is built for uptime: real-time sync with offline fallback, automatic conflict resolution, no single point of failure, and a service worker that keeps the app working when the Wi-Fi doesn't.",
    bullets: [
    "Targeted 99.95% uptime on GCP",
    "Offline PWA — keeps working off-network",
    "Conflict-aware merge on every sync",
    "Push to phone for time-critical requests"]

  }];

  return (
    <Section id="diff" num="04" label="WHY VERDIS">
      <div className="v-section-head">
        <Reveal>
          <h2 className="v-h2">Three reasons facilities pick <em>Verdis</em> over generic software.</h2>
        </Reveal>
      </div>
      <div className="v-diff-stack">
        {diffs.map((d, i) =>
        <Reveal key={d.n} delay={i * 60}>
            <div className="v-diff">
              <div className="v-diff-n">{d.n}</div>
              <div className="v-diff-body">
                <h3 className="v-diff-t">{d.t}</h3>
                <p className="v-diff-p">{d.d}</p>
              </div>
              <ul className="v-diff-bullets">
                {d.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          </Reveal>
        )}
      </div>
    </Section>);

}

// ════════════════════════════════════════════════════════════════
// PRICING
// ════════════════════════════════════════════════════════════════
function PricingSection() {
  const tiers = [
  {
    name: "Pilot",
    from: "$1,800",
    sub: "one-time setup",
    desc: "Single-site deployment for facilities up to 25 rooms. Core modules configured to your data model. The fastest way to put Verdis in the hands of your team.",
    includes: ["Up to 25 rooms / 2 hallways", "Core modules (rooms, requests, tasks)", "Standard reporting", "Onboarding workshop", "30-day support included"],
    tag: "Starting at"
  },
  {
    name: "Facility",
    from: "$6,500",
    sub: "one-time setup",
    desc: "Mid-to-large facilities. Full module suite with custom integration to existing climate hardware.",
    includes: ["Up to 150 rooms", "All modules + custom flows", "Climate hardware integration", "Dedicated rollout support", "90-day support included"],
    tag: "Starting at",
    featured: true
  },
  {
    name: "Custom",
    from: "Quote",
    sub: "scoped per engagement",
    desc: "Multi-site, enterprise commercial, or unusual operational models. Built to spec, ongoing partnership.",
    includes: ["Multi-site / unlimited rooms", "Bespoke integrations", "Custom modules built to spec", "Priority SLA support"],
    tag: "From"
  }];

  return (
    <Section id="pricing" num="05" label="PRICING">
      <div className="v-section-head">
        <Reveal>
          <h2 className="v-h2">Transparent ranges. <em>Custom quotes.</em></h2>
          <p className="v-section-sub">
            Every install is bespoke, so the final number depends on scope.
            These are honest starting points. Annual hosting & support is separate
            and quoted with your engagement.
          </p>
        </Reveal>
      </div>
      <Reveal>
        <div className="v-price-grid">
          {tiers.map((t) =>
          <div key={t.name} className={"v-price" + (t.featured ? " v-price--featured" : "")}>
              {t.featured && <div className="v-price-flag">Most facilities</div>}
              <div className="v-price-name">{t.name}</div>
              <div className="v-price-from">
                <span className="v-price-tag">{t.tag}</span>
                <span className="v-price-amt">{t.from}</span>
                <span className="v-price-sub">{t.sub}</span>
              </div>
              <p className="v-price-desc">{t.desc}</p>
              <ul className="v-price-ul">
                {t.includes.map((i) => <li key={i}><span className="v-tick">+</span>{i}</li>)}
              </ul>
              <Button href="#demo" variant={t.featured ? "primary" : "ghost"} size="md">
                Get a quote
              </Button>
            </div>
          )}
        </div>
        <p className="v-price-fine">
          // Annual Firebase hosting typically lands within Google's free tier at facility usage.
        </p>
      </Reveal>
    </Section>);

}

// ════════════════════════════════════════════════════════════════
// DEMO REQUEST FORM
// ════════════════════════════════════════════════════════════════
function DemoSection() {
  const [submitted, setSubmitted] = useStateS(false);
  const [form, setForm] = useStateS({
    name: "", email: "", phone: "", org: "", role: "", size: "",
    institution: "", timeline: "", message: ""
  });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  function submit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Section id="demo" num="06" label="REQUEST A DEMO">
      <div className="v-demo-grid">
        <div className="v-demo-intro">
          <Reveal>
            <h2 className="v-h2 v-demo-h">See Verdis in <em>your facility's</em> data.</h2>
            <p className="v-demo-p">
              A live demo takes about 30 minutes. We walk through the platform
              configured roughly to your operation — rooms, requests, scouting,
              reporting. After the demo, we scope a custom build if it makes sense.
            </p>
            <div className="v-demo-spec">
              <SpecRow k="Format" v="Live screenshare · 30 min" />
              <SpecRow k="Response" v="Within 1 business day" />
              <SpecRow k="Commitment" v="None — just a conversation" />
              <SpecRow k="NDA" v="On request" />
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <form className="v-form" onSubmit={submit}>
            {submitted ?
            <div className="v-form-done">
                <Pill mono>STATUS · RECEIVED</Pill>
                <h3 className="v-form-done-h">Got it — <em>talk soon.</em></h3>
                <p>
                  Your request has been logged. Gergely will reach out within one
                  business day to schedule the walkthrough. In the meantime, feel
                  free to email directly.
                </p>
                <Button href="#contact" variant="ghost" size="md">See contact info</Button>
              </div> :

            <React.Fragment>
                <div className="v-form-h">
                  <span className="v-form-meta">FORM · DEMO_REQUEST</span>
                  <span className="v-form-meta">9 fields</span>
                </div>
                <div className="v-field-grid">
                  <Field label="Name" required value={form.name} onChange={set("name")} />
                  <Field label="Email" type="email" required value={form.email} onChange={set("email")} />
                  <Field label="Phone" type="tel" value={form.phone} onChange={set("phone")} />
                  <Field label="Organization" required value={form.org} onChange={set("org")} />
                  <Field label="Role" value={form.role} onChange={set("role")}
                select options={["Educator / faculty", "Researcher", "Grower / operator", "Facility manager", "Admin / IT", "Other"]} />
                  <Field label="Institution type" value={form.institution} onChange={set("institution")}
                select options={["University", "Community college", "K-12", "Commercial — nursery", "Commercial — production", "Commercial — hydroponic", "Other"]} />
                  <Field label="Size / # of zones" value={form.size} onChange={set("size")} placeholder="e.g. 40 rooms, 4 hallways" />
                  <Field label="Timeline / urgency" value={form.timeline} onChange={set("timeline")}
                select options={["Within 1 month", "1–3 months", "3–6 months", "6–12 months", "Just exploring"]} />
                </div>
                <Field label="Specific needs / questions" value={form.message} onChange={set("message")} textarea />
                <div className="v-form-foot">
                  <span className="v-form-fine">By submitting, you agree to be contacted about Verdis.</span>
                  <Button type="submit" variant="primary" size="lg">Send request</Button>
                </div>
              </React.Fragment>
            }
          </form>
        </Reveal>
      </div>
    </Section>);

}

function Field({ label, type = "text", value, onChange, required, select, options, textarea, placeholder }) {
  return (
    <label className={"v-field" + (textarea ? " v-field--wide" : "")}>
      <span className="v-field-l">
        {label}
        {required && <span className="v-field-req">*</span>}
      </span>
      {textarea ?
      <textarea rows="4" value={value} onChange={onChange} placeholder={placeholder} required={required} /> :
      select ?
      <select value={value} onChange={onChange}>
          <option value="">— select —</option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select> :

      <input type={type} value={value} onChange={onChange} placeholder={placeholder} required={required} />
      }
    </label>);

}

// ════════════════════════════════════════════════════════════════
// CONTACT
// ════════════════════════════════════════════════════════════════
function ContactSection() {
  return (
    <Section id="contact" num="07" label="CONTACT">
      <div className="v-contact">
        <div className="v-contact-l">
          <Reveal>
            <h2 className="v-h2">Talk to <em>Gergely</em>.</h2>
            <p className="v-section-sub">
              Verdis is built and sold directly. No reseller, no support tier chain
              — when you reach out, you reach the person who builds it.
            </p>
          </Reveal>
        </div>
        <div className="v-contact-r">
          <Reveal delay={100}>
            <div className="v-contact-card">
              <div className="v-contact-avatar">G</div>
              <div>
                <div className="v-contact-name">Gergely Motolai</div>
                <div className="v-contact-role">Founder · Engineer</div>
              </div>
              <div className="v-contact-rows">
                <SpecRow k="Email" v="[ contact info — add later ]" />
                <SpecRow k="Phone" v="[ contact info — add later ]" />
                <SpecRow k="Location" v="[ contact info — add later ]" />
                <SpecRow k="Response" v="Within 1 business day" />
              </div>
              <Button href="#demo" variant="primary" size="md">Request a demo</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>);

}

// ════════════════════════════════════════════════════════════════
// BIG CTA + FOOTER
// ════════════════════════════════════════════════════════════════
function BigCta() {
  return (
    <section className="v-bigcta">
      <Container>
        <Reveal>
          <h2 className="v-bigcta-h">Run your facility on <em>Verdis.</em></h2>
          <p className="v-bigcta-sub">
            A 30-minute walkthrough is the fastest way to find out if it fits.
          </p>
          <div className="v-bigcta-cta">
            <Button href="#demo" variant="primary" size="lg">Request a demo</Button>
            <Button href="#contact" variant="ghost" size="lg">Talk to Gergely</Button>
          </div>
        </Reveal>
      </Container>
    </section>);

}

function Footer() {
  return (
    <footer className="v-footer">
      <Container>
        <div className="v-wordmark">Verd<em>is</em></div>
        <div className="v-footer-inner">
          <div className="v-footer-brand">
            <Logomark size={20} />
            <span>Verdis</span>
            <span className="v-footer-tag">Greenhouse operations platform — custom builds for research & production facilities.</span>
          </div>
          <div className="v-footer-cols">
            <div>
              <div className="v-footer-h">Product</div>
              <a href="#system">System</a>
              <a href="#features">Features</a>
              <a href="#sectors">Sectors</a>
              <a href="#pricing">Pricing</a>
            </div>
            <div>
              <div className="v-footer-h">Company</div>
              <a href="#demo">Request demo</a>
              <a href="#contact">Contact</a>
              <span className="v-footer-static">Gergely Motolai</span>
            </div>
            <div>
              <div className="v-footer-h">Infrastructure</div>
              <span className="v-footer-static">Firebase / Firestore</span>
              <span className="v-footer-static">Google Cloud</span>
              <span className="v-footer-static">SOC 2 Type II</span>
            </div>
          </div>
        </div>
        <div className="v-footer-base">
          <span>© 2026 Verdis · Gergely Motolai</span>
          <span>build 240521 · v1.4</span>
        </div>
      </Container>
    </footer>);

}

Object.assign(window, {
  Nav, Hero, TrustStrip, SystemSection, FeaturesSection, SectorsSection,
  DiffSection, PricingSection, DemoSection, ContactSection, BigCta, Footer
});