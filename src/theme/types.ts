// src/theme/types.ts

export interface ColorTokens {
  background: {
    base: string;
    surface: string;
    surfaceGlass: string;
    surfaceGlassHover: string;
    inverse: string; // 【根据 4. Buttons 提取】反转背景色，用于 Solid White Pill
    input: string; // 【根据 4. Inputs 提取】暗色输入框背景
    nav: string; // 【根据 4. Navigation 提取】深色悬浮导航背景
  };
  text: {
    primary: string;
    secondary: string;
    placeholder: string; // 【根据 4. Inputs 提取】占位符文本颜色
    inverse: string; // 【根据 4. Buttons 提取】反转文本色，用于按钮内的黑字
    muted: string; // 【根据 4. Trust 提取】客户 Logo 和引言的静音灰色
  };
  action: {
    primary: string;
    link: string;
    ghostHover: string; // 【根据 4. Buttons 提取】Ghost 按钮 hover 时的背景
  };
  border: {
    subtle: string;
    input: string; // 【根据 4. Inputs 提取】输入框基础边框
    focus: string; // 【根据 4. Inputs 提取】输入框 focus 状态边框
  };
}

export interface TextStyle {
  fontFamily: string;
  fontSize: string;
  fontWeight: number | string;
  lineHeight: number | string;
  letterSpacing: string;
  fontFeatureSettings?: string; // 应对复杂字体的 OpenType 特性 (如 cv01, ss02)
  textTransform?: "none" | "uppercase" | "lowercase" | "capitalize"; // 应对 Micro Uppercase
}

export interface TypographyTokens {
  // 基础字体族 (Primitive)
  family: {
    display: string;
    body: string;
    accent: string;
    mono: string;
    rounded?: string; // 设为可选，应对某些主题没有圆体的情况
  };

  // 核心！层级与角色 (Composite - 组合样式)
  // 这里列出的角色名必须满足通用业务场景，Framer 的定义非常完整，直接作为我们的基准 Schema
  styles: {
    displayHero: TextStyle;
    sectionDisplay: TextStyle;
    sectionHeading: TextStyle;
    featureHeading: TextStyle;
    accentDisplay: TextStyle;

    cardTitle: TextStyle;
    featureTitle: TextStyle;
    subHeading: TextStyle;

    bodyLarge: TextStyle;
    body: TextStyle;
    navUI: TextStyle;
    bodyReadable: TextStyle;

    caption: TextStyle;
    label: TextStyle;
    smallCaption: TextStyle;
    microCode: TextStyle;
    badge: TextStyle;
    microUppercase: TextStyle;
  };
}

export interface RadiusTokens {
  micro: string; // 【新增】1px: 微小元素、精密边缘
  small: string; // 【新增】5px–7px: 小 UI 元素、图片缩略图
  standard: string; // 【新增】8px: 标准组件圆角 (代码块、交互元素)
  card: string; // 10px–12px: 卡片、产品截图 (替换并融合了之前的 image)
  container: string; // 【新增】15px–20px: 大型容器、特性展示卡片
  pill: string; // 30px–40px: 导航药丸、分页器
  pillFull: string; // 100px: 纯药丸形状 (主 CTA、标签)
}

export interface ShadowTokens {
  // 1. 绝对高度层级 (Elevation Scale)
  // 任何现代 Design System (如 Material, Apple) 都有基础的高度标尺
  elevation: {
    level0: string; // 贴地 (Flat)
    level1: string; // 基础浮层/边界环 (Ring)
    level2: string; // 收缩/内敛容器 (Contained)
    level3: string; // 悬浮 (Floating)
  };

  // 2. 语义化映射 (Semantic Aliases)
  // 保留第 4 节中提取的特殊交互状态阴影
  semantic: {
    cardRingHover: string;
    inputFocus: string;
    imageDepth: string;
  };
}

export interface AnimationTokens {
  transform: {
    activeScale: string; // 【根据 4. Buttons 提取】点击按压时的矩阵缩放比例
  };
  transition: {
    base: string; // 基础缓动
    opacity: string; // 【根据 4. Buttons/Nav 提取】用于揭示效果和导航 Hover
  };
}

export interface SpacingTokens {
  base: string; // 基础单元 (通常是 8px)

  // 绝对比例尺 (Scale): 精确还原文档中的步进表
  scale: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    8: string;
    10: string;
    12: string;
    15: string;
    20: string;
    30: string;
    35: string;
  };

  // 语义化间距 (Semantic): 还原 Whitespace Philosophy (呼吸感哲学)
  semantic: {
    section: string; // 大跨度垂直间距 (80px–120px)，体现 Breathe through darkness
    cardPadding: string; // 卡片内部留白 (15px–30px)
    componentGap: string; // 关联组件间隙 (8px–20px)，体现 Dense within
    buttonPadding: string; // 继承自第 4 节
  };
}

export interface LayoutTokens {
  container: {
    maxWidth: string; // 页面内容最大宽度
  };
  grid: {
    asymmetricTemplate: string; // 不对称网格的比例划分 (如 40% vs 60%)
  };
}

export interface EffectTokens {
  blur: {
    glassmorphism: string; // 毛玻璃背景模糊度 (backdrop-filter)
  };
  glow: {
    radialAura: string; // 环境径向光晕 (用于截图背后或特殊视觉中心)
  };
}

export interface ThemeConfig {
  name: string;
  colors: ColorTokens;
  typography: TypographyTokens;
  radii: RadiusTokens;
  shadows: ShadowTokens; // 已重构
  animations: AnimationTokens;
  spacing: SpacingTokens;
  layout: LayoutTokens;
  effects: EffectTokens; // 【新增】特效配置
}
