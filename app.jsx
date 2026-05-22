// app.jsx v2 — Root component for Verdis

const { useState: useStateApp, useEffect: useEffectApp } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "forest",
  "dark": true,
  "showPricing": true,
  "audience": "balanced"
}/*EDITMODE-END*/;

// Palette tokens — accents in OKLCH for harmony
const PALETTES = {
  forest: {
    label: "Forest",
    bgDark: "#0a0e0b", bgDeepDark: "#060807",
    cardDark: "#131814", elevDark: "#1a211d",
    lineDark: "rgba(202, 215, 200, 0.08)",
    line2Dark: "rgba(202, 215, 200, 0.16)",
    line3Dark: "rgba(202, 215, 200, 0.30)",
    textDark: "#ecf0e9", text2Dark: "#b8c1b6", mutedDark: "#7a847a",
    accentDark: "oklch(0.82 0.17 142)",
    accentDeepDark: "oklch(0.66 0.17 142)",
    accentDimDark: "oklch(0.55 0.14 142)",
    glowDark: "oklch(0.65 0.18 142 / 0.18)",

    bgLight: "#f6f5f0", bgDeepLight: "#ecebe5",
    cardLight: "#ffffff", elevLight: "#fbfaf5",
    lineLight: "rgba(20, 30, 20, 0.08)",
    line2Light: "rgba(20, 30, 20, 0.16)",
    line3Light: "rgba(20, 30, 20, 0.28)",
    textLight: "#0d130d", text2Light: "#3a423a", mutedLight: "#6a746a",
    accentLight: "oklch(0.42 0.13 142)",
    accentDeepLight: "oklch(0.35 0.13 142)",
    accentDimLight: "oklch(0.55 0.13 142)",
    glowLight: "oklch(0.55 0.15 142 / 0.12)",
  },
  sage: {
    label: "Sage",
    bgDark: "#0a0e0d", bgDeepDark: "#060807",
    cardDark: "#131816", elevDark: "#1a211e",
    lineDark: "rgba(200, 210, 210, 0.08)",
    line2Dark: "rgba(200, 210, 210, 0.16)",
    line3Dark: "rgba(200, 210, 210, 0.30)",
    textDark: "#eaeeec", text2Dark: "#b6c0bd", mutedDark: "#7a8480",
    accentDark: "oklch(0.82 0.10 168)",
    accentDeepDark: "oklch(0.65 0.10 168)",
    accentDimDark: "oklch(0.55 0.10 168)",
    glowDark: "oklch(0.65 0.12 168 / 0.18)",

    bgLight: "#f3f5f3", bgDeepLight: "#e8ebe8",
    cardLight: "#ffffff", elevLight: "#fafbf9",
    lineLight: "rgba(20, 25, 22, 0.08)",
    line2Light: "rgba(20, 25, 22, 0.16)",
    line3Light: "rgba(20, 25, 22, 0.28)",
    textLight: "#0d130f", text2Light: "#3a423e", mutedLight: "#6a7470",
    accentLight: "oklch(0.45 0.09 168)",
    accentDeepLight: "oklch(0.38 0.09 168)",
    accentDimLight: "oklch(0.55 0.09 168)",
    glowLight: "oklch(0.55 0.10 168 / 0.12)",
  },
  ember: {
    label: "Ember",
    bgDark: "#0d0a08", bgDeepDark: "#070605",
    cardDark: "#181410", elevDark: "#211c17",
    lineDark: "rgba(220, 210, 200, 0.08)",
    line2Dark: "rgba(220, 210, 200, 0.16)",
    line3Dark: "rgba(220, 210, 200, 0.30)",
    textDark: "#f0ece6", text2Dark: "#c0b8ae", mutedDark: "#847c72",
    accentDark: "oklch(0.78 0.14 60)",
    accentDeepDark: "oklch(0.62 0.14 60)",
    accentDimDark: "oklch(0.52 0.12 60)",
    glowDark: "oklch(0.62 0.16 60 / 0.18)",

    bgLight: "#f6f4ef", bgDeepLight: "#ecead0",
    cardLight: "#ffffff", elevLight: "#fdfbf5",
    lineLight: "rgba(30, 20, 15, 0.08)",
    line2Light: "rgba(30, 20, 15, 0.16)",
    line3Light: "rgba(30, 20, 15, 0.28)",
    textLight: "#1a1410", text2Light: "#3a3028", mutedLight: "#74685c",
    accentLight: "oklch(0.50 0.14 60)",
    accentDeepLight: "oklch(0.40 0.14 60)",
    accentDimLight: "oklch(0.58 0.12 60)",
    glowLight: "oklch(0.55 0.14 60 / 0.12)",
  },
  mono: {
    label: "Mono",
    bgDark: "#0a0a0a", bgDeepDark: "#060606",
    cardDark: "#141414", elevDark: "#1c1c1c",
    lineDark: "rgba(255, 255, 255, 0.08)",
    line2Dark: "rgba(255, 255, 255, 0.16)",
    line3Dark: "rgba(255, 255, 255, 0.30)",
    textDark: "#ececec", text2Dark: "#b8b8b8", mutedDark: "#7a7a7a",
    accentDark: "#ececec",
    accentDeepDark: "#bababa",
    accentDimDark: "#9a9a9a",
    glowDark: "rgba(255,255,255,0.08)",

    bgLight: "#f5f5f5", bgDeepLight: "#e8e8e8",
    cardLight: "#ffffff", elevLight: "#fbfbfb",
    lineLight: "rgba(0, 0, 0, 0.08)",
    line2Light: "rgba(0, 0, 0, 0.16)",
    line3Light: "rgba(0, 0, 0, 0.28)",
    textLight: "#0a0a0a", text2Light: "#3a3a3a", mutedLight: "#6a6a6a",
    accentLight: "#0a0a0a",
    accentDeepLight: "#2a2a2a",
    accentDimLight: "#5a5a5a",
    glowLight: "rgba(0,0,0,0.04)",
  },
};

function applyTheme(palette, dark) {
  const p = PALETTES[palette] || PALETTES.forest;
  const root = document.documentElement;
  const set = (k, v) => root.style.setProperty(k, v);
  set("--v-bg",            dark ? p.bgDark : p.bgLight);
  set("--v-bg-deep",       dark ? p.bgDeepDark : p.bgDeepLight);
  set("--v-card",          dark ? p.cardDark : p.cardLight);
  set("--v-elev",          dark ? p.elevDark : p.elevLight);
  set("--v-line",          dark ? p.lineDark : p.lineLight);
  set("--v-line-2",        dark ? p.line2Dark : p.line2Light);
  set("--v-line-3",        dark ? p.line3Dark : p.line3Light);
  set("--v-text",          dark ? p.textDark : p.textLight);
  set("--v-text-2",        dark ? p.text2Dark : p.text2Light);
  set("--v-muted",         dark ? p.mutedDark : p.mutedLight);
  set("--v-accent",        dark ? p.accentDark : p.accentLight);
  set("--v-accent-deep",   dark ? p.accentDeepDark : p.accentDeepLight);
  set("--v-accent-dim",    dark ? p.accentDimDark : p.accentDimLight);
  set("--v-glow",          dark ? p.glowDark : p.glowLight);
  set("color-scheme",      dark ? "dark" : "light");
  root.setAttribute("data-mode", dark ? "dark" : "light");
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffectApp(() => {
    applyTheme(t.palette, t.dark);
  }, [t.palette, t.dark]);

  return (
    <div className="v-root">
      <Nav showPricing={t.showPricing} dark={t.dark} onToggleDark={() => setTweak("dark", !t.dark)} />
      <main>
        <Hero audienceEmphasis={t.audience} />
        <TrustStrip />
        <SystemSection />
        <FeaturesSection />
        <SectorsSection audienceEmphasis={t.audience} />
        <DiffSection />
        {t.showPricing && <PricingSection />}
        <DemoSection />
        <ContactSection />
        <BigCta />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakRadio
          label="Mode"
          value={t.dark ? "dark" : "light"}
          options={["dark", "light"]}
          onChange={(v) => setTweak("dark", v === "dark")}
        />
        <TweakSelect
          label="Palette"
          value={t.palette}
          options={Object.keys(PALETTES).map((k) => ({ value: k, label: PALETTES[k].label }))}
          onChange={(v) => setTweak("palette", v)}
        />
        <TweakSection label="Content" />
        <TweakRadio
          label="Audience"
          value={t.audience}
          options={[
            { value: "balanced", label: "Both" },
            { value: "edu", label: "Edu lead" },
            { value: "commercial", label: "Comm lead" },
          ]}
          onChange={(v) => setTweak("audience", v)}
        />
        <TweakToggle
          label="Show pricing"
          value={t.showPricing}
          onChange={(v) => setTweak("showPricing", v)}
        />
      </TweaksPanel>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
