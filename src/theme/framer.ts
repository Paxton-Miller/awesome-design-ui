// src/theme/framer.ts
import { ThemeConfig } from "./types";

// 提取公用字体族，方便复用
const families = {
  display: '"GT Walsheim Framer Medium", "GT Walsheim Medium", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  body: '"Inter Variable", Inter, -apple-system, system-ui, sans-serif',
  bodyReadable: '"Inter Framer Regular", Inter, sans-serif',
  accent: '"Mona Sans", sans-serif',
  mono: '"Azeret Mono", monospace',
  rounded: '"Open Runde", sans-serif',
};

// 预定义常用的 OpenType 特性字符串
const otf = {
  interFull: '"cv01" 1, "cv05" 1, "cv09" 1, "cv11" 1, "ss03" 1, "ss07" 1',
  interNav: '"cv06" 1, "cv11" 1, "dlig" 1, "ss03" 1',
  interMicro: '"cv01" 1, "cv06" 1, "cv09" 1, "cv11" 1, "ss03" 1, "ss07" 1',
};

export const framerTheme: ThemeConfig = {
  name: "framer",
  colors: {
    background: {
      base: "#000000",
      surface: "#090909",
      surfaceGlass: "rgba(255, 255, 255, 0.1)", // Frosted Pill / Nav
      surfaceGlassHover: "rgba(255, 255, 255, 0.15)", // Subtle brightness shift
      inverse: "rgb(255, 255, 255)", // Solid White Pill
      input: "#000000", // Input dark background
      nav: "#000000", // Nav dark floating bar
    },
    text: {
      primary: "#ffffff",
      secondary: "#a6a6a6",
      placeholder: "rgba(255, 255, 255, 0.4)", // 精准匹配 MD
      inverse: "#000000", // Frosted/Solid 按钮里的黑字
      muted: "#a6a6a6", // Trust 客户 Logo 颜色
    },
    action: {
      primary: "#0099ff",
      link: "#ffffff", // Nav link default
      ghostHover: "rgba(255, 255, 255, 0.1)", // Ghost hover subtle frosted
    },
    border: {
      subtle: "#090909",
      input: "rgba(255, 255, 255, 0.15)", // Input subtle border
      focus: "#0099ff", // Focus Framer Blue ring
    },
  },
  typography: {
    family: families,
    styles: {
      // --- Display Hierarchy ---
      displayHero: {
        fontFamily: families.display,
        fontSize: "110px",
        fontWeight: 500,
        lineHeight: 0.85,
        letterSpacing: "-5.5px",
      },
      sectionDisplay: {
        fontFamily: families.display,
        fontSize: "85px",
        fontWeight: 500,
        lineHeight: 0.95,
        letterSpacing: "-4.25px",
        fontFeatureSettings: '"ss02" 1, "tnum" 1',
      },
      sectionHeading: {
        fontFamily: families.display,
        fontSize: "62px",
        fontWeight: 500,
        lineHeight: 1.0,
        letterSpacing: "-3.1px",
        fontFeatureSettings: '"ss02" 1',
      },
      featureHeading: {
        fontFamily: families.display,
        fontSize: "32px",
        fontWeight: 500,
        lineHeight: 1.13,
        letterSpacing: "-1px",
      },
      accentDisplay: {
        fontFamily: families.accent,
        fontSize: "61.5px",
        fontWeight: 100, // Ultra-light
        lineHeight: 1.0,
        letterSpacing: "-3.1px",
      },

      // --- Cards & Features ---
      cardTitle: {
        fontFamily: families.body,
        fontSize: "24px",
        fontWeight: 400,
        lineHeight: 1.3,
        letterSpacing: "-0.01px",
        fontFeatureSettings: otf.interFull,
      },
      featureTitle: {
        fontFamily: families.body,
        fontSize: "22px",
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: "-0.8px",
        fontFeatureSettings: '"cv05" 1',
      },
      subHeading: {
        fontFamily: families.body,
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: "-0.8px",
        fontFeatureSettings: '"cv01" 1, "cv09" 1',
      },

      // --- Body & UI ---
      bodyLarge: {
        fontFamily: families.body,
        fontSize: "18px",
        fontWeight: 400,
        lineHeight: 1.3,
        letterSpacing: "-0.01px",
        fontFeatureSettings: otf.interFull,
      },
      body: {
        fontFamily: families.body,
        fontSize: "15px",
        fontWeight: 400,
        lineHeight: 1.3,
        letterSpacing: "-0.01px",
        fontFeatureSettings: '"cv11" 1',
      },
      navUI: {
        fontFamily: families.body,
        fontSize: "15px",
        fontWeight: 400,
        lineHeight: 1.0,
        letterSpacing: "-0.15px",
        fontFeatureSettings: otf.interNav,
      },
      bodyReadable: {
        fontFamily: families.bodyReadable,
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: 1.6,
        letterSpacing: "normal",
      },

      // --- Micro Typography ---
      caption: {
        fontFamily: families.body,
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: 1.4,
        letterSpacing: "normal",
        fontFeatureSettings: otf.interMicro,
      },
      label: {
        fontFamily: '"Inter", sans-serif',
        fontSize: "13px",
        fontWeight: 500,
        lineHeight: 1.6,
        letterSpacing: "normal",
        fontFeatureSettings: '"cv06" 1, "cv11" 1, "ss03" 1',
      },
      smallCaption: {
        fontFamily: families.body,
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: 1.4,
        letterSpacing: "normal",
        fontFeatureSettings: otf.interMicro,
      },
      microCode: {
        fontFamily: families.mono,
        fontSize: "10.4px",
        fontWeight: 400,
        lineHeight: 1.6,
        letterSpacing: "normal",
        fontFeatureSettings: '"cv06" 1, "cv11" 1, "ss03" 1',
      },
      badge: {
        fontFamily: families.rounded,
        fontSize: "9px",
        fontWeight: 600,
        lineHeight: 1.11,
        letterSpacing: "normal",
        fontFeatureSettings: '"cv01" 1, "cv09" 1',
      },
      microUppercase: {
        fontFamily: families.body,
        fontSize: "7px",
        fontWeight: 400,
        lineHeight: 1.0,
        letterSpacing: "0.21px",
        textTransform: "uppercase", // 完美还原
      },
    },
  },
  radii: {
    micro: "1px", // Micro-elements
    small: "6px", // 取 5px-7px 的中间值 (Small UI elements)
    standard: "8px", // Standard component radius
    card: "12px", // Cards, product screenshots
    container: "20px", // Large containers (取 Generously rounded 的上限)
    pill: "40px", // Navigation pills
    pillFull: "100px", // Full pill shape
  },

  shadows: {
    elevation: {
      level0: "none", // Level 0 (Flat): No shadow, pure black surface
      level1: "rgba(0, 153, 255, 0.15) 0px 0px 0px 1px", // Level 1 (Ring): Framer Blue glow ring
      level2: "rgb(9, 9, 9) 0px 0px 0px 2px", // Level 2 (Contained): Near-black ring
      level3:
        "rgba(255, 255, 255, 0.1) 0px 0.5px 0px 0.5px, rgba(0, 0, 0, 0.25) 0px 10px 30px", // Level 3 (Floating): Subtle highlight + deep ambient
    },
    semantic: {
      cardRingHover: "rgba(0, 153, 255, 0.25) 0px 0px 0px 1px", // 继承自第 4 节
      inputFocus: "0 0 0 1px #0099ff", // 继承自第 4 节
      imageDepth: "rgba(0, 0, 0, 0.3) 0px 10px 30px", // 继承自第 4 节
    },
  },
  animations: {
    transform: {
      activeScale: "scale(0.85)", // Scale-based animation (matrix transform)
    },
    transition: {
      base: "all 0.2s cubic-bezier(0.25, 1, 0.5, 1)",
      opacity: "opacity 0.2s ease", // Opacity transitions for reveal effects
    },
  },
  // 【新增】根据 5. Spacing System 填入
  spacing: {
    base: "8px",
    scale: {
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
      15: "15px",
      20: "20px",
      30: "30px",
      35: "35px",
    },
    semantic: {
      section: "120px", // 取 80-120 范围内的最大值，完美契合 "Breathe through darkness" 的空旷感
      cardPadding: "24px", // 取 15-30 的中间适宜值
      componentGap: "16px", // 取 8-20 的中间值，形成紧凑的内部阅读流
      buttonPadding: "10px 15px", // 继承第 4 节
    },
  },

  // 【新增】根据 5. Grid & Container 填入
  layout: {
    container: {
      maxWidth: "1200px", // ~1200px container, centered
    },
    grid: {
      asymmetricTemplate: "4fr 6fr", // 完美对应: text (40%) with screenshot (60%)
    },
  },

  effects: {
    blur: {
      // 完美对应: "No background blur/glassmorphism... achieved through simple rgba opacity"
      // 这意味着在 Framer 主题下，凡是用毛玻璃的组件，backdrop-filter 都是 none
      glassmorphism: "none",
    },
    glow: {
      // 完美对应: "Blue glow auras: Subtle Framer Blue radial gradients"
      radialAura:
        "radial-gradient(circle, rgba(0,153,255,0.1) 0%, rgba(0,0,0,0) 70%)",
    },
  },
};
