// src/theme/claude.ts
import { ThemeConfig } from "./types";

// Extracted font families based on the Anthropic design system rules.
// Anthropic Serif for authority and editorial pacing; Anthropic Sans for utility.
const families = {
  display: '"Anthropic Serif", Georgia, serif',
  body: '"Anthropic Sans", Arial, sans-serif',
  bodyReadable: '"Anthropic Serif", Georgia, serif', // Editorial passages use the serif
  accent: '"Anthropic Serif", Georgia, serif',
  mono: '"Anthropic Mono", Arial, monospace',
  rounded: '"Anthropic Sans", Arial, sans-serif', // Claude relies on generous border-radii rather than rounded typefaces
};

export const claudeTheme: ThemeConfig = {
  name: "claude",
  colors: {
    background: {
      base: "#f5f4ed", // Parchment - Warm cream that feels like premium aged paper
      surface: "#faf9f5", // Ivory - Lightest surface for elevated cards
      surfaceGlass: "rgba(245, 244, 237, 0.98)", // Near-solid Parchment (Claude relies on solid warm tones, no true glassmorphism)
      surfaceGlassHover: "#faf9f5", // Shifts to Ivory on hover
      inverse: "#141413", // Anthropic Near Black - Warm olive-tinted dark surface
      input: "#ffffff", // Pure White - Reserved for specific contrast elements like inputs
      nav: "#f5f4ed", // Parchment sticky top nav
    },
    text: {
      primary: "#141413", // Anthropic Near Black - Warmest black for main text
      secondary: "#5e5d59", // Olive Gray - Distinctly warm medium-dark gray
      placeholder: "#87867f", // Stone Gray - De-emphasized metadata/tertiary text
      inverse: "#faf9f5", // Ivory - Used on Terracotta and dark surfaces
      muted: "#87867f", // Stone Gray
    },
    action: {
      primary: "#c96442", // Terracotta Brand - Earthy, un-tech core brand color
      link: "#3d3d3a", // Dark Warm - Text links and emphasized secondary text
      ghostHover: "#e8e6dc", // Warm Sand - Distinctively warm light gray hover state
    },
    border: {
      subtle: "#f0eee6", // Border Cream - Barely visible warm containment
      input: "#e8e6dc", // Border Warm - Prominent borders/inputs
      focus: "#3898ec", // Focus Blue - The ONLY cool color in the system (accessibility)
    },
  },
  typography: {
    family: families,
    styles: {
      // --- Display Hierarchy (Anthropic Serif, Weight 500 ceiling) ---
      displayHero: {
        fontFamily: families.display,
        fontSize: "64px",
        fontWeight: 500,
        lineHeight: 1.10, // Tight for book-title presence
        letterSpacing: "normal",
      },
      sectionDisplay: {
        fontFamily: families.display,
        fontSize: "52px",
        fontWeight: 500,
        lineHeight: 1.20,
        letterSpacing: "normal",
      },
      sectionHeading: {
        fontFamily: families.display,
        fontSize: "36.8px",
        fontWeight: 500,
        lineHeight: 1.30,
        letterSpacing: "normal",
      },
      featureHeading: {
        fontFamily: families.display,
        fontSize: "32px",
        fontWeight: 500,
        lineHeight: 1.10,
        letterSpacing: "normal",
      },
      accentDisplay: {
        fontFamily: families.accent,
        fontSize: "25.6px",
        fontWeight: 500,
        lineHeight: 1.20,
        letterSpacing: "normal",
      },

      // --- Cards & Features ---
      cardTitle: {
        fontFamily: families.display,
        fontSize: "32px", // Sub-heading Large role
        fontWeight: 500,
        lineHeight: 1.10,
        letterSpacing: "normal",
      },
      featureTitle: {
        fontFamily: families.display,
        fontSize: "20.8px",
        fontWeight: 500,
        lineHeight: 1.20,
        letterSpacing: "normal",
      },
      subHeading: {
        fontFamily: families.display,
        fontSize: "25px",
        fontWeight: 500,
        lineHeight: 1.20,
        letterSpacing: "normal",
      },

      // --- Body & UI (Generous Line Heights) ---
      bodyLarge: {
        fontFamily: families.body,
        fontSize: "20px",
        fontWeight: 400,
        lineHeight: 1.60, // Relaxed magazine pacing
        letterSpacing: "normal",
      },
      body: {
        fontFamily: families.body,
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: 1.60,
        letterSpacing: "normal",
      },
      navUI: {
        fontFamily: families.body,
        fontSize: "17px",
        fontWeight: 500,
        lineHeight: 1.0,
        letterSpacing: "normal",
      },
      bodyReadable: {
        fontFamily: families.bodyReadable, // Body Serif
        fontSize: "17px",
        fontWeight: 400,
        lineHeight: 1.60, // Editorial passages
        letterSpacing: "normal",
      },

      // --- Micro Typography ---
      caption: {
        fontFamily: families.body,
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: 1.43,
        letterSpacing: "normal",
      },
      label: {
        fontFamily: families.body,
        fontSize: "12px",
        fontWeight: 500,
        lineHeight: 1.60,
        letterSpacing: "0.12px", // Micro letter-spacing
      },
      smallCaption: {
        fontFamily: families.body,
        fontSize: "10px",
        fontWeight: 400,
        lineHeight: 1.60,
        letterSpacing: "0.5px", // Overline spacing
      },
      microCode: {
        fontFamily: families.mono,
        fontSize: "15px",
        fontWeight: 400,
        lineHeight: 1.60,
        letterSpacing: "-0.32px", // Code tracking
      },
      badge: {
        fontFamily: families.body,
        fontSize: "12px",
        fontWeight: 500,
        lineHeight: 1.25,
        letterSpacing: "0.12px",
      },
      microUppercase: {
        fontFamily: families.body,
        fontSize: "9.6px",
        fontWeight: 400,
        lineHeight: 1.60,
        letterSpacing: "0.096px",
        textTransform: "uppercase",
      },
    },
  },
  radii: {
    micro: "4px", // Sharp: Minimal inline elements
    small: "6px", // Subtly rounded: Secondary interactive elements
    standard: "8px", // Comfortably rounded: Standard buttons, standard cards
    card: "16px", // Very rounded: Featured containers, video players
    container: "32px", // Maximum rounded: Hero containers, large cards, embedded media
    pill: "24px", // Highly rounded: Tag-like elements
    pillFull: "32px", // Maximum rounded element
  },

  shadows: {
    elevation: {
      level0: "none", // Flat - Parchment background
      level1: "0px 0px 0px 1px #f0eee6", // Contained - Border-like warm shadow
      level2: "0px 0px 0px 1px #e8e6dc", // Ring - Prominent warm ring for interactions
      level3: "rgba(0, 0, 0, 0.05) 0px 4px 24px", // Whisper - Barely visible lift
    },
    semantic: {
      cardRingHover: "0px 0px 0px 1px #d1cfc5", // Ring Warm - Button/Card hover halos
      inputFocus: "0px 0px 0px 1px #3898ec", // Focus Blue ring
      imageDepth: "rgba(0, 0, 0, 0.05) 0px 4px 24px", // Whisper shadow for elevated media
    },
  },
  animations: {
    transform: {
      activeScale: "scale(0.98)", // Subtle press
    },
    transition: {
      base: "all 0.2s cubic-bezier(0.25, 1, 0.5, 1)",
      opacity: "opacity 0.2s ease",
    },
  },
  spacing: {
    base: "8px",
    scale: {
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      8: "32px",
      10: "48px",
      12: "64px",
      15: "80px",
      20: "120px",
      30: "160px",
      35: "200px",
    },
    semantic: {
      section: "120px", // Generous magazine-like top/bottom margins
      cardPadding: "32px", // Generous internal padding for breathing room
      componentGap: "24px",
      buttonPadding: "0px 12px 0px 8px", // Distinctive Claude asymmetric icon-first layout
    },
  },

  layout: {
    container: {
      maxWidth: "1200px", // ~1200px container, centered
    },
    grid: {
      asymmetricTemplate: "1fr 1fr", // Editorial reading flow
    },
  },

  effects: {
    blur: {
      glassmorphism: "none", // Solid warm tones, no cold tech glass
    },
    glow: {
      radialAura: "none", // Gradient-free environment, depth comes from warmth shifts
    },
  },
};