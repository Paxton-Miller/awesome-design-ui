// src/theme/apple.ts
import { ThemeConfig } from "./types";

// 提取 Apple 核心字体族
const families = {
  display: '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif',
  body: '"SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif',
  accent: '"SF Pro Display", sans-serif',
  mono: '"SF Mono", "ui-monospace", Menlo, Monaco, Consolas, monospace',
  rounded: '"SF Pro Rounded", sans-serif',
};

export const appleTheme: ThemeConfig = {
  name: "apple",
  colors: {
    background: {
      base: "#f5f5f7", // Apple 标志性的亮灰色底色
      surface: "#ffffff", // 产品卡片通常使用纯白
      surfaceGlass: "rgba(210, 210, 215, 0.64)", // Apple 媒体控制面板的半透明层
      surfaceGlassHover: "rgba(210, 210, 215, 0.8)", 
      inverse: "#000000", // Apple 极具电影感的黑色翻转区块
      input: "#fafafc", // 搜索/过滤按钮底色
      nav: "rgba(0, 0, 0, 0.8)", // 标志性的 Apple 黑色半透明导航条
    },
    text: {
      primary: "#1d1d1f", // Near Black，比纯黑更护眼
      secondary: "rgba(0, 0, 0, 0.8)", // Black 80%
      placeholder: "rgba(0, 0, 0, 0.48)", // Black 48%
      inverse: "#ffffff", // 深色区块或蓝色 CTA 按钮中的文字
      muted: "rgba(0, 0, 0, 0.48)", 
    },
    action: {
      primary: "#0071e3", // 唯一的色彩：Apple Blue CTA
      link: "#0066cc", // 行内文字链接蓝
      ghostHover: "#ededf2", // 亮色按钮 active/hover 态
    },
    border: {
      subtle: "transparent", // Apple 极少使用线条边框
      input: "rgba(0, 0, 0, 0.04)", // 输入框/过滤器的 3px 微弱描边
      focus: "#0071e3", // Focus 状态的蓝色光环
    },
  },
  typography: {
    family: families,
    styles: {
      // --- Display Hierarchy ---
      displayHero: {
        fontFamily: families.display,
        fontSize: "56px",
        fontWeight: 600,
        lineHeight: 1.07, // 极其紧凑的行高
        letterSpacing: "-0.28px", // Apple 的负字距哲学
      },
      sectionDisplay: {
        fontFamily: families.display,
        fontSize: "40px",
        fontWeight: 600,
        lineHeight: 1.10,
        letterSpacing: "normal",
      },
      sectionHeading: {
        fontFamily: families.display,
        fontSize: "40px",
        fontWeight: 600,
        lineHeight: 1.10,
        letterSpacing: "normal",
      },
      featureHeading: {
        fontFamily: families.display,
        fontSize: "28px",
        fontWeight: 400,
        lineHeight: 1.14,
        letterSpacing: "0.196px", // Tile Heading
      },
      accentDisplay: {
        fontFamily: families.display,
        fontSize: "34px",
        fontWeight: 600,
        lineHeight: 1.47,
        letterSpacing: "-0.374px", // Nav Heading
      },

      // --- Cards & Features ---
      cardTitle: {
        fontFamily: families.display,
        fontSize: "21px",
        fontWeight: 700,
        lineHeight: 1.19,
        letterSpacing: "0.231px",
      },
      featureTitle: {
        fontFamily: families.display,
        fontSize: "21px",
        fontWeight: 700,
        lineHeight: 1.19,
        letterSpacing: "0.231px",
      },
      subHeading: {
        fontFamily: families.display,
        fontSize: "21px",
        fontWeight: 400,
        lineHeight: 1.19,
        letterSpacing: "0.231px",
      },

      // --- Body & UI ---
      bodyLarge: {
        fontFamily: families.body,
        fontSize: "18px",
        fontWeight: 300,
        lineHeight: 1.0,
        letterSpacing: "normal",
      },
      body: {
        fontFamily: families.body,
        fontSize: "17px",
        fontWeight: 400,
        lineHeight: 1.47, // 极度舒适的正文阅读行高
        letterSpacing: "-0.374px", // 甚至在正文中也使用负字距
      },
      navUI: {
        fontFamily: families.body,
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: 1.33,
        letterSpacing: "-0.12px",
      },
      bodyReadable: {
        fontFamily: families.body,
        fontSize: "17px",
        fontWeight: 400,
        lineHeight: 1.47,
        letterSpacing: "-0.374px",
      },

      // --- Micro Typography ---
      caption: {
        fontFamily: families.body,
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: 1.29,
        letterSpacing: "-0.224px",
      },
      label: {
        fontFamily: families.body,
        fontSize: "17px",
        fontWeight: 600, // Body Emphasis
        lineHeight: 1.24,
        letterSpacing: "-0.374px",
      },
      smallCaption: {
        fontFamily: families.body,
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: 1.33,
        letterSpacing: "-0.12px",
      },
      microCode: {
        fontFamily: families.mono,
        fontSize: "10px",
        fontWeight: 400,
        lineHeight: 1.47,
        letterSpacing: "-0.08px",
      },
      badge: {
        fontFamily: families.rounded,
        fontSize: "10px",
        fontWeight: 600,
        lineHeight: 1.47,
        letterSpacing: "-0.08px",
      },
      microUppercase: {
        fontFamily: families.body,
        fontSize: "10px",
        fontWeight: 600,
        lineHeight: 1.47,
        letterSpacing: "-0.08px",
        textTransform: "uppercase",
      },
    },
  },
  radii: {
    micro: "5px", // Apple 的 Micro 级圆角
    small: "6px", 
    standard: "8px", // 标准按钮、卡片
    card: "12px", // 大尺寸产品卡片、Lifestyle 图像容器
    container: "20px", 
    pill: "11px", // 搜索/过滤胶囊
    pillFull: "980px", // Apple 的终极秘技：980px 的全圆角 Pill (CTA, Learn more)
  },
  shadows: {
    elevation: {
      level0: "none", // Flat
      level1: "rgba(0, 0, 0, 0.22) 3px 5px 30px 0px", // Apple 核心弥散阴影：用于悬浮卡片
      level2: "rgba(0, 0, 0, 0.28) 4px 8px 40px 0px", // 推演进阶阴影
      level3: "rgba(0, 0, 0, 0.32) 5px 12px 50px 0px", // 弹窗级别的悬浮阴影
    },
    semantic: {
      cardRingHover: "rgba(0, 0, 0, 0.22) 3px 5px 30px 0px", // Apple 卡片静止且无 Hover 位移，保持一致
      inputFocus: "0 0 0 2px #0071e3", // 2px 实线聚焦环
      imageDepth: "rgba(0, 0, 0, 0.22) 3px 5px 30px 0px",
    },
  },
  animations: {
    transform: {
      activeScale: "scale(0.9)", // Apple 媒体控制按钮的按压缩放
    },
    transition: {
      base: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)", // 经典的 Apple 柔和缓动
      opacity: "opacity 0.3s ease",
    },
  },
  spacing: {
    base: "8px",
    // 映射最接近的 Apple 极细颗粒度比例尺 (2,4,5,6,7,8,9,10,11,14,15,17,20,24)
    scale: {
      1: "1px",
      2: "2px",
      3: "4px",
      4: "4px",
      5: "5px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "11px",
      15: "15px",
      20: "20px",
      30: "24px",
      35: "32px",
    },
    semantic: {
      section: "120px", // 保持电影级的呼吸感
      cardPadding: "30px", // Apple 偏爱慷慨的卡片内边距
      componentGap: "14px", 
      buttonPadding: "8px 15px", // Apple CTA 的精准 padding
    },
  },
  layout: {
    container: {
      maxWidth: "980px", // Apple 的标志性 980px 居中容器宽度
    },
    grid: {
      asymmetricTemplate: "1fr 1fr", // Apple 更倾向于对等分割或单列中心排版
    },
  },
  effects: {
    blur: {
      glassmorphism: "saturate(180%) blur(20px)", // Apple UI 身份的灵魂：超强饱和度毛玻璃
    },
    glow: {
      radialAura: "none", // Apple 拒绝花哨的发光，强调实体和柔和阴影
    },
  },
};