// src/theme/airtable.ts
import { ThemeConfig } from "./types";

const families = {
  display: '"Haas Groot Disp", "Haas", -apple-system, system-ui, sans-serif',
  body: '"Haas", -apple-system, system-ui, sans-serif',
  accent: '"Haas", sans-serif',
  mono: 'monospace',
};

export const airtableTheme: ThemeConfig = {
  name: "airtable",
  colors: {
    background: {
      base: "#ffffff", // 企业级白板
      surface: "#f8fafc", // Light Surface
      surfaceGlass: "#ffffff", // Airtable 风格的次级按钮底色通常是纯白
      surfaceGlassHover: "rgba(249, 252, 255, 0.97)", // Spotlight
      // 【修复关键点】Airtable 的主 CTA 按钮是 Airtable Blue
      inverse: "#1b61c9", 
      input: "#ffffff", 
      nav: "#ffffff", 
    },
    text: {
      primary: "#181d26", // Deep Navy
      secondary: "#333333", // Dark Gray
      placeholder: "rgba(4, 14, 32, 0.69)", // Weak Text
      inverse: "#ffffff", // 主 CTA 按钮上的白字
      muted: "rgba(4, 14, 32, 0.4)", 
    },
    action: {
      primary: "#1b61c9", // Airtable Blue
      link: "#1b61c9", 
      ghostHover: "rgba(249, 252, 255, 0.97)", 
    },
    border: {
      subtle: "#e0e2e6", // Airtable 标志性的卡片边框
      input: "#e0e2e6",
      focus: "#1b61c9", 
    },
  },
  typography: {
    family: families,
    styles: {
      displayHero: {
        fontFamily: families.display,
        fontSize: "48px",
        fontWeight: 400,
        lineHeight: 1.15,
        letterSpacing: "normal",
      },
      sectionDisplay: {
        fontFamily: families.display,
        fontSize: "48px",
        fontWeight: 900, // Display Bold
        lineHeight: 1.50,
        letterSpacing: "normal",
      },
      sectionHeading: {
        fontFamily: families.body,
        fontSize: "40px",
        fontWeight: 400,
        lineHeight: 1.25,
        letterSpacing: "normal",
      },
      featureHeading: {
        fontFamily: families.body,
        fontSize: "32px",
        fontWeight: 500,
        lineHeight: 1.15,
        letterSpacing: "normal",
      },
      accentDisplay: {
        fontFamily: families.body,
        fontSize: "24px",
        fontWeight: 400,
        lineHeight: 1.30,
        letterSpacing: "0.12px",
      },
      cardTitle: {
        fontFamily: families.body,
        fontSize: "24px",
        fontWeight: 400,
        lineHeight: 1.30,
        letterSpacing: "0.12px", // Airtable 开始出现正字距
      },
      featureTitle: {
        fontFamily: families.body,
        fontSize: "20px",
        fontWeight: 400,
        lineHeight: 1.35,
        letterSpacing: "0.1px",
      },
      subHeading: {
        fontFamily: families.body,
        fontSize: "20px",
        fontWeight: 400,
        lineHeight: 1.25,
        letterSpacing: "0.1px",
      },
      bodyLarge: {
        fontFamily: families.body,
        fontSize: "18px",
        fontWeight: 400,
        lineHeight: 1.35,
        letterSpacing: "0.18px", // 正文字距进一步拉开
      },
      body: {
        fontFamily: families.body,
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: 1.30,
        letterSpacing: "0.16px",
      },
      navUI: {
        fontFamily: families.body,
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: 1.30,
        letterSpacing: "0.08px",
      },
      bodyReadable: {
        fontFamily: families.body,
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: 1.35,
        letterSpacing: "0.18px",
      },
      caption: {
        fontFamily: families.body,
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: 1.35,
        letterSpacing: "0.28px",
      },
      label: {
        fontFamily: families.body,
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: 1.25,
        letterSpacing: "0.07px",
      },
      smallCaption: {
        fontFamily: families.body,
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: 1.35,
        letterSpacing: "0.2px",
      },
      microCode: { fontFamily: families.mono, fontSize: "12px", fontWeight: 400, lineHeight: 1.5, letterSpacing: "normal" },
      badge: { fontFamily: families.body, fontSize: "12px", fontWeight: 500, lineHeight: 1.2, letterSpacing: "normal" },
      microUppercase: { fontFamily: families.body, fontSize: "11px", fontWeight: 600, lineHeight: 1.2, letterSpacing: "0.5px", textTransform: "uppercase" },
    },
  },
  radii: {
    micro: "2px", //
    small: "4px",
    standard: "12px", // Airtable 的按钮圆角
    card: "16px", // 卡片基础圆角
    container: "24px",
    pill: "32px",
    pillFull: "50%",
  },
  shadows: {
    elevation: {
      level0: "none",
      level1: "rgba(0,0,0,0.32) 0px 0px 1px, rgba(0,0,0,0.08) 0px 0px 2px, rgba(45,127,249,0.28) 0px 1px 3px, rgba(0,0,0,0.06) 0px 0px 0px 0.5px inset", // Blue-tinted 灵魂
      level2: "rgba(15,48,106,0.05) 0px 0px 20px", // Soft ambient
      level3: "rgba(15,48,106,0.08) 0px 10px 30px", 
    },
    semantic: {
      cardRingHover: "rgba(15,48,106,0.08) 0px 4px 20px",
      inputFocus: "0 0 0 3px rgba(27,97,201,0.2)",
      imageDepth: "rgba(15,48,106,0.05) 0px 0px 20px",
    },
  },
  animations: {
    transform: { activeScale: "scale(0.98)" },
    transition: { base: "all 0.2s ease", opacity: "opacity 0.2s ease" },
  },
  spacing: {
    base: "8px",
    scale: { 1: "1px", 2: "2px", 3: "4px", 4: "8px", 5: "12px", 6: "16px", 8: "24px", 10: "32px", 12: "40px", 15: "48px", 20: "64px", 30: "80px", 35: "120px" },
    semantic: {
      section: "80px", 
      cardPadding: "24px", 
      componentGap: "16px", 
      buttonPadding: "16px 24px", // Airtable 标志性的长 Padding
    },
  },
  layout: {
    container: { maxWidth: "1200px" },
    grid: { asymmetricTemplate: "1fr 1fr" },
  },
  effects: {
    blur: { glassmorphism: "none" },
    glow: { radialAura: "none" },
  },
};