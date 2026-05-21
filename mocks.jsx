// mocks.jsx — Faux app screenshots & animated mocks for feature rows

const { useState: useStateM, useEffect: useEffectM, useRef: useRefM } = React;

// ─── MiniRoomsMock — Multi-zone room management mock ─────────────
// Shows hallway rows with rooms, mimicking the actual Greenhouse Map view.
function MiniRoomsMock() {
  const halls = [
    { name: "Hallway A", color: "linear-gradient(135deg,#0d9488,#0891b2)" },
    { name: "Hallway B", color: "linear-gradient(135deg,#16a34a,#15803d)" },
    { name: "Hallway C", color: "linear-gradient(135deg,#7c3aed,#6d28d9)" },
    { name: "Hallway D", color: "linear-gradient(135deg,#db2777,#be185d)" },
  ];
  const statuses = ["assigned", "assigned", "empty", "assigned", "task", "assigned", "alert", "assigned"];

  return (
    <div className="v-mock v-mock--rooms">
      <div className="v-mock-chrome">
        <span className="v-mock-dots"><span /><span /><span /></span>
        <span className="v-mock-url">greenhouse-management.web.app</span>
      </div>
      <div className="v-mock-body v-mock-body--dash">
        <div className="v-mock-hero-bar">
          <span className="v-mock-hero-title">Greenhouse Management System</span>
          <span className="v-mock-hero-meta">today · synced 14s ago</span>
        </div>
        <div className="v-mock-tabs">
          <span className="v-mock-tab v-mock-tab--active">Home</span>
          <span className="v-mock-tab">Requests<span className="v-mock-tab-b">7</span></span>
          <span className="v-mock-tab">To-Do<span className="v-mock-tab-b">3</span></span>
          <span className="v-mock-tab">Pests</span>
          <span className="v-mock-tab">Temperature</span>
          <span className="v-mock-tab">Inventory</span>
        </div>
        <div className="v-mock-map">
          <div className="v-mock-map-h">
            <span className="v-mock-map-t"><span className="v-mock-map-bar" />Greenhouse Map</span>
            <span className="v-mock-map-hint">140 rooms · 10 hallways</span>
          </div>
          <div className="v-mock-halls">
            {halls.map((h, hi) => (
              <div key={h.name} className="v-mock-hall">
                <div className="v-mock-hall-h" style={{ background: h.color }}>
                  <span>{h.name}</span>
                  <span className="v-mock-hall-c">14 rooms</span>
                </div>
                <div className="v-mock-hall-rooms">
                  {statuses.map((_, ri) => {
                    const s = statuses[(ri + hi * 2) % statuses.length];
                    return (
                      <span key={ri} className={"v-mock-room v-mock-room--" + s}>
                        {String.fromCharCode(65 + hi)}-{String(ri + 1).padStart(2, "0")}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MiniRequestsAnim — Animated service request workflow ────────
// Shows: user submits → push notification → manager approves → room flags update
function MiniRequestsAnim() {
  return (
    <div className="v-mock v-mock--requests">
      <div className="v-mock-chrome">
        <span className="v-mock-dots"><span /><span /><span /></span>
        <span className="v-mock-url">greenhouse-management.web.app/requests</span>
        <span className="v-mock-live"><span className="v-mock-live-d" /> LIVE</span>
      </div>
      <div className="v-mock-body v-mock-body--req">
        <div className="v-mock-req-cols">
          {/* User side */}
          <div className="v-mock-req-col">
            <div className="v-mock-req-col-h">USER · Dr. Patel</div>
            <div className="v-mock-qa-stack">
              <div className="v-mock-qa-btn v-mock-qa-btn--amber v-anim-press">
                Report Maintenance Issue
              </div>
              <div className="v-mock-qa-btn v-mock-qa-btn--emerald">
                Environmental Change
              </div>
              <div className="v-mock-qa-btn v-mock-qa-btn--sky">
                Pesticide Application
              </div>
              <div className="v-mock-qa-btn v-mock-qa-btn--teal">
                Reserve Room
              </div>
            </div>
            <div className="v-mock-req-form v-anim-form">
              <div className="v-mock-req-form-h">New Maintenance Request</div>
              <div className="v-mock-req-form-row">
                <span>Room</span><span>C-04</span>
              </div>
              <div className="v-mock-req-form-row">
                <span>Issue</span><span>Heater not cycling</span>
              </div>
              <div className="v-mock-req-form-submit">Submit →</div>
            </div>
          </div>

          {/* Network arrow */}
          <div className="v-mock-req-arrow">
            <div className="v-mock-req-arrow-line">
              <span className="v-mock-req-pulse" />
            </div>
            <div className="v-mock-req-arrow-l">via Firebase Cloud Functions</div>
          </div>

          {/* Manager side */}
          <div className="v-mock-req-col">
            <div className="v-mock-req-col-h">MANAGER · Dr. Motolai</div>
            <div className="v-mock-toast v-anim-toast">
              <span className="v-mock-toast-icon">!</span>
              <div className="v-mock-toast-body">
                <div className="v-mock-toast-title">New maintenance request</div>
                <div className="v-mock-toast-sub">Room C-04 · just now</div>
              </div>
            </div>
            <div className="v-mock-req-queue">
              <div className="v-mock-req-queue-h">Open Requests</div>
              <div className="v-mock-req-queue-item v-anim-new">
                <span className="v-mock-req-dot v-mock-req-dot--alert" />
                <div>
                  <div className="v-mock-req-item-t">Maintenance · C-04</div>
                  <div className="v-mock-req-item-s">Heater not cycling</div>
                </div>
                <button className="v-mock-req-approve">Approve</button>
              </div>
              <div className="v-mock-req-queue-item">
                <span className="v-mock-req-dot v-mock-req-dot--ok" />
                <div>
                  <div className="v-mock-req-item-t">Reservation · A-11</div>
                  <div className="v-mock-req-item-s">Fri–Mon · plant cycle</div>
                </div>
                <button className="v-mock-req-approve">Approve</button>
              </div>
              <div className="v-mock-req-queue-item">
                <span className="v-mock-req-dot v-mock-req-dot--warn" />
                <div>
                  <div className="v-mock-req-item-t">Pesticide · Hallway D</div>
                  <div className="v-mock-req-item-s">Awaiting approval</div>
                </div>
                <button className="v-mock-req-approve">Approve</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── DeviceShowcase — Mobile PWA on multiple devices ─────────────
function DeviceShowcase() {
  return (
    <div className="v-mock v-mock--devices">
      <div className="v-devices">
        {/* Phone */}
        <div className="v-device v-device--phone">
          <div className="v-device-phone-screen">
            <div className="v-device-phone-status">
              <span>9:41</span>
              <span className="v-device-phone-icons">
                <span className="v-icon-signal" />
                <span className="v-icon-wifi" />
                <span className="v-icon-batt" />
              </span>
            </div>
            <div className="v-device-app-hero">Greenhouse</div>
            <div className="v-device-app-tabs">
              <span className="v-device-app-tab v-device-app-tab--active">Home</span>
              <span className="v-device-app-tab">Req<span className="v-device-tab-b">7</span></span>
              <span className="v-device-app-tab">Pests</span>
            </div>
            <div className="v-device-app-rooms">
              {Array.from({ length: 12 }).map((_, i) => {
                const arr = ["assigned","assigned","empty","assigned","task","assigned","alert","assigned","assigned","empty","assigned","assigned"];
                return <span key={i} className={"v-device-room v-device-room--" + arr[i]} />;
              })}
            </div>
            <div className="v-device-app-cta">Reserve Room</div>
          </div>
          <div className="v-device-home" />
        </div>

        {/* Tablet */}
        <div className="v-device v-device--tablet">
          <div className="v-device-tablet-screen">
            <div className="v-device-tablet-bar">Greenhouse Management</div>
            <div className="v-device-tablet-grid">
              {Array.from({ length: 32 }).map((_, i) => {
                const arr = ["assigned","assigned","empty","assigned","task","assigned","alert","assigned"];
                return <span key={i} className={"v-device-mini v-device-mini--" + arr[i % arr.length]} />;
              })}
            </div>
          </div>
        </div>

        {/* Laptop */}
        <div className="v-device v-device--laptop">
          <div className="v-device-laptop-screen">
            <div className="v-device-laptop-bar">
              <span className="v-device-laptop-dots"><span /><span /><span /></span>
              <span className="v-device-laptop-url">greenhouse-management.web.app</span>
            </div>
            <div className="v-device-laptop-content">
              <div className="v-device-laptop-hero">Greenhouse Management System</div>
              <div className="v-device-laptop-grid">
                {Array.from({ length: 56 }).map((_, i) => {
                  const arr = ["assigned","assigned","empty","assigned","task","assigned","alert","assigned"];
                  return <span key={i} className={"v-device-mini v-device-mini--" + arr[i % arr.length]} />;
                })}
              </div>
            </div>
          </div>
          <div className="v-device-laptop-base" />
        </div>
      </div>

      {/* Platform badges */}
      <div className="v-platforms">
        <div className="v-platform">
          <svg viewBox="0 0 24 24" className="v-platform-icon" aria-hidden="true">
            <path fill="currentColor" d="M3 5.5L10.5 4.4v8.1H3V5.5zm0 13l7.5 1.1v-8H3v6.9zM11.5 4.2L21 3v9.5h-9.5V4.2zm0 15.6L21 21v-9.5h-9.5v8.3z" />
          </svg>
          <div className="v-platform-l">Windows</div>
          <div className="v-platform-s">PWA · install</div>
        </div>
        <div className="v-platform">
          <svg viewBox="0 0 24 24" className="v-platform-icon" aria-hidden="true">
            <path fill="currentColor" d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12-1.03.396-2.13 1.077-2.83.764-.8 2.02-1.4 3.087-1.42v.05zm3.235 6.42c-.027-.84.21-1.61.66-2.21-.96-1.34-2.34-2.09-3.93-2.09-1.62 0-3.04.94-3.85.94-.83 0-2.05-.91-3.37-.89C7.65 3.62 6.13 4.51 5.26 6.04c-1.89 3.27-.48 8.1 1.36 10.76.9 1.31 1.97 2.77 3.38 2.72 1.36-.05 1.87-.88 3.51-.88 1.63 0 2.09.88 3.51.86 1.45-.02 2.36-1.32 3.25-2.63 1.02-1.51 1.45-2.98 1.47-3.06-.03-.01-2.82-1.08-2.85-4.28-.02-2.68 2.19-3.97 2.29-4.03l.02-.05z" />
          </svg>
          <div className="v-platform-l">macOS</div>
          <div className="v-platform-s">PWA · install</div>
        </div>
        <div className="v-platform">
          <svg viewBox="0 0 24 24" className="v-platform-icon" aria-hidden="true">
            <path fill="currentColor" d="M17.523 15.34a1.27 1.27 0 1 1 0 -2.54a1.27 1.27 0 0 1 0 2.54zm-11.05 0a1.27 1.27 0 1 1 0 -2.54a1.27 1.27 0 0 1 0 2.54zm11.5-6.36l2.07-3.58a.42.42 0 0 0 -.73 -.42l-2.1 3.63a13.04 13.04 0 0 0 -10.43 0L4.69 5.0a.42.42 0 0 0 -.73 .42l2.07 3.58A12.13 12.13 0 0 0 0 19h24a12.13 12.13 0 0 0 -6.02 -10.02z" />
          </svg>
          <div className="v-platform-l">Android</div>
          <div className="v-platform-s">PWA · install</div>
        </div>
        <div className="v-platform">
          <svg viewBox="0 0 24 24" className="v-platform-icon" aria-hidden="true">
            <path fill="currentColor" d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12-1.03.396-2.13 1.077-2.83.764-.8 2.02-1.4 3.087-1.42v.05zm3.235 6.42c-.027-.84.21-1.61.66-2.21-.96-1.34-2.34-2.09-3.93-2.09-1.62 0-3.04.94-3.85.94-.83 0-2.05-.91-3.37-.89C7.65 3.62 6.13 4.51 5.26 6.04c-1.89 3.27-.48 8.1 1.36 10.76.9 1.31 1.97 2.77 3.38 2.72 1.36-.05 1.87-.88 3.51-.88 1.63 0 2.09.88 3.51.86 1.45-.02 2.36-1.32 3.25-2.63 1.02-1.51 1.45-2.98 1.47-3.06-.03-.01-2.82-1.08-2.85-4.28-.02-2.68 2.19-3.97 2.29-4.03l.02-.05z" />
          </svg>
          <div className="v-platform-l">iPhone · iPad</div>
          <div className="v-platform-s">Add to Home</div>
        </div>
      </div>
    </div>
  );
}

// ─── FacilityMock — for sectors lead card (real photo or placeholder) ─
function FacilityMock({ label, src, alt }) {
  return (
    <div className="v-mock v-mock--facility">
      <div className="v-mock-facility-img">
        {src ? (
          <img src={src} alt={alt || label} className="v-mock-facility-photo" />
        ) : (
          <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice" className="v-mock-facility-svg">
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1a3d2f" />
                <stop offset="100%" stopColor="#0d2620" />
              </linearGradient>
              <linearGradient id="ghroof" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(180,230,200,0.20)" />
                <stop offset="100%" stopColor="rgba(140,200,170,0.05)" />
              </linearGradient>
              <pattern id="ribs" patternUnits="userSpaceOnUse" width="14" height="14">
                <line x1="0" y1="0" x2="0" y2="14" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="400" height="220" fill="url(#sky)" />
            <polygon points="120,160 200,90 280,160" fill="url(#ghroof)" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" />
            <rect x="120" y="160" width="160" height="50" fill="url(#ghroof)" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" />
            <rect x="120" y="160" width="160" height="50" fill="url(#ribs)" />
            {[0,1,2,3,4].map(i => (
              <rect key={i} x={130 + i*32} y="180" width="22" height="20" fill="rgba(76,217,150,0.35)" rx="2" />
            ))}
            <rect x="0" y="210" width="400" height="10" fill="rgba(0,0,0,0.4)" />
          </svg>
        )}
        <div className="v-mock-facility-overlay">
          <div className="v-mock-facility-pill">
            <span className="v-mock-facility-dot" />
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  MiniRoomsMock, MiniRequestsAnim, DeviceShowcase, FacilityMock
});
