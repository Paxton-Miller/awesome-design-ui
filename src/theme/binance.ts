// src/theme/binance.ts
import { ThemeConfig } from "./types";

// Extracted font families based on the BinancePlex design system rules.
// BinancePlex is primary; system-ui is for fallbacks/third-party UI.
const families = {
  display: '"IBM Plex Sans", Arial, sans-serif',
  body: '"IBM Plex Sans", Arial, sans-serif',
  accent: '"BinancePlex", Arial, sans-serif',
  mono: '"BinancePlex", Arial, sans-serif', // BinancePlex has tabular numerals by default
  rounded: '"BinancePlex", Arial, sans-serif', // Binance does not use a separate rounded font
};

// Pre-defined OpenType features (BinancePlex relies heavily on tabular numerals for financial data)
const otf = {
  tabular: '"tnum" 1',
};

export const binanceTheme: ThemeConfig = {
  name: "binance",
  colors: {
    background: {
      base: "#FFFFFF", // Primary page canvas
      surface: "#F5F5F5", // Snow - Subtle surface differentiation
      surfaceGlass: "rgba(255, 255, 255, 0.98)", // Solid feeling for sticky navs
      surfaceGlassHover: "rgba(255, 255, 255, 1)", 
      inverse: "#222126", // Binance Dark - dark section backgrounds
      input: "#FFFFFF", // Input backgrounds (alternates with Snow)
      nav: "#FFFFFF", // Sticky navigation bar
    },
    text: {
      primary: "#1E2026", // Ink - Main body text, headings on light
      secondary: "#32313A", // Secondary Text - Nav links, descriptive copy
      placeholder: "#848E9C", // Slate - The workhorse grey
      inverse: "#FFFFFF", // Pure White - Text on dark sections/buttons
      muted: "#777E90", // Muted - Secondary nav links, footer text
    },
    action: {
      primary: "#F0B90B", // Binance Yellow - The signature primary CTA
      link: "#F0B90B", // Binance Yellow for primary links
      ghostHover: "#F5F5F5", // Snow background for subtle hovers
    },
    border: {
      subtle: "#E6E8EA", // Border Light - Standard card and section borders
      input: "#E6E8EA", // Border Light for inputs
      focus: "#000000", // Focus border shifts to black
    },
  },
  typography: {
    family: families,
    styles: {
      // --- Display Hierarchy ---
      displayHero: {
        fontFamily: families.display,
        fontSize: "60px",
        fontWeight: 700,
        lineHeight: 1.08,
        letterSpacing: "normal",
      },
      sectionDisplay: {
        fontFamily: families.display,
        fontSize: "34px",
        fontWeight: 700,
        lineHeight: 1.0,
        letterSpacing: "normal",
      },
      sectionHeading: {
        fontFamily: families.display,
        fontSize: "28px",
        fontWeight: 500, // Heading 1
        lineHeight: 1.0,
        letterSpacing: "normal",
      },
      featureHeading: {
        fontFamily: families.display,
        fontSize: "24px",
        fontWeight: 700, // Heading 2
        lineHeight: 1.0,
        letterSpacing: "normal",
      },
      accentDisplay: {
        fontFamily: families.accent,
        fontSize: "24px",
        fontWeight: 600, // Heading 3 (Subsection)
        lineHeight: 1.0,
        letterSpacing: "normal",
      },

      // --- Cards & Features ---
      cardTitle: {
        fontFamily: families.body,
        fontSize: "20px",
        fontWeight: 600, // Heading 4
        lineHeight: 1.25,
        letterSpacing: "normal",
      },
      featureTitle: {
        fontFamily: families.body,
        fontSize: "20px",
        fontWeight: 600, // Heading 4
        lineHeight: 1.25,
        letterSpacing: "normal",
      },
      subHeading: {
        fontFamily: families.body,
        fontSize: "20px",
        fontWeight: 500, // Body Large
        lineHeight: 1.5,
        letterSpacing: "normal",
      },

      // --- Body & UI ---
      bodyLarge: {
        fontFamily: families.body,
        fontSize: "20px",
        fontWeight: 500,
        lineHeight: 1.5,
        letterSpacing: "normal",
      },
      body: {
        fontFamily: families.body,
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: 1.5,
        letterSpacing: "normal",
      },
      navUI: {
        fontFamily: families.body,
        fontSize: "14px",
        fontWeight: 600, // Nav links use SemiBold
        lineHeight: 1.5,
        letterSpacing: "normal",
      },
      bodyReadable: {
        fontFamily: families.body,
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: 1.5,
        letterSpacing: "normal",
      },

      // --- Micro Typography ---
      caption: {
        fontFamily: families.body,
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: 1.43,
        letterSpacing: "normal",
        fontFeatureSettings: otf.tabular, // Critical for prices
      },
      label: {
        fontFamily: families.body,
        fontSize: "14px",
        fontWeight: 600, // Caption SemiBold
        lineHeight: 1.5,
        letterSpacing: "normal",
      },
      smallCaption: {
        fontFamily: families.body,
        fontSize: "12px",
        fontWeight: 600, // Small tags/badges
        lineHeight: 1.0,
        letterSpacing: "normal",
        fontFeatureSettings: otf.tabular,
      },
      microCode: {
        fontFamily: families.mono,
        fontSize: "11px", // Tiny micro-labels
        fontWeight: 500,
        lineHeight: 1.0,
        letterSpacing: "normal",
        fontFeatureSettings: otf.tabular,
      },
      badge: {
        fontFamily: families.body,
        fontSize: "12px",
        fontWeight: 600,
        lineHeight: 1.0,
        letterSpacing: "normal",
      },
      microUppercase: {
        fontFamily: families.body,
        fontSize: "11px",
        fontWeight: 500,
        lineHeight: 1.0,
        letterSpacing: "0.5px", // Slight tracking for tiny uppercase caps
        textTransform: "uppercase",
      },
    },
  },
  radii: {
    micro: "1px", // Subtle edge softening
    small: "6px", // Primary buttons (non-pill), small cards
    standard: "8px", // Form inputs, data cards, image containers
    card: "12px", // Content cards, feature containers
    container: "24px", // Video containers, hero imagery, large cards
    pill: "50px", // Navigation pills, search inputs
    pillFull: "50px", // Main CTA Pill shape
  },

  shadows: {
    elevation: {
      level0: "none", // Flat - default for inline
      level1: "rgba(32, 32, 37, 0.05) 0px 3px 5px 0px", // Subtle - Content cards, resting state (5% opacity)
      level2: "rgba(8, 8, 8, 0.05) 0px 3px 5px 5px", // Medium - Hovered cards, elevated containers
      level3: "rgba(0, 0, 0, 0.15) 0px 32px 37px", // Heavy - Modal overlays, dropdown menus
    },
    semantic: {
      cardRingHover: "rgba(8, 8, 8, 0.05) 0px 3px 5px 5px", // Reusing Medium shadow for hover
      inputFocus: "0 0 0 1px #000000", // Focus border shifts to black outline
      imageDepth: "rgb(153, 153, 153) 0px 2px 10px -3px", // Pill Shadow - used for floating CTA buttons
    },
  },
  animations: {
    transform: {
      activeScale: "scale(0.98)", // Financial platforms need stability, minimal press shrink
    },
    transition: {
      base: "all 0.2s ease", // 200ms ease defined in docs
      opacity: "opacity 0.2s ease",
    },
  },
  spacing: {
    base: "8px", // Base unit
    scale: {
      1: "4px",   // space-1
      2: "8px",   // space-2
      3: "12px",  // space-3
      4: "16px",  // space-4
      5: "20px",  // space-5
      6: "24px",  // space-6
      8: "32px",  // space-7
      10: "48px", // space-8
      12: "64px", // space-9
      15: "80px", // space-10
      20: "120px", // Extended spacing
      30: "160px", // Extended spacing
      35: "200px", // Extended spacing
    },
    semantic: {
      section: "80px", // Large section spacing (space-10) to create "inviting entry"
      cardPadding: "24px", // Matches space-6 for internal card whitespace
      componentGap: "24px", // Grid gap between feature cards
      buttonPadding: "6px 32px", // Standard primary button padding
    },
  },

  layout: {
    container: {
      maxWidth: "1200px", // Max container width, centered
    },
    grid: {
      asymmetricTemplate: "1fr 1fr", // Hero side-by-side layout (text + image / device mockup)
    },
  },

  effects: {
    blur: {
      glassmorphism: "none", // Solid, stable fintech platform; no translucent glass
    },
    glow: {
      // Golden Glow: Radial gradient from #F0B90B center to #F8D12F edge behind product mockups
      radialAura: "radial-gradient(circle, #F0B90B 0%, #F8D12F 100%)",
    },
  },
};