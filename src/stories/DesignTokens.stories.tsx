import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: '系统/设计变量 (Tokens)',
  parameters: {
    layout: 'padded',
  },
};

export default meta;

// ==========================================
// 📚 1. 使用指南 (Usage Guide)
// ==========================================
const UsageGuide = () => (
  <div style={{ 
    backgroundColor: 'var(--ad-colors-background-surface, #090909)', 
    padding: '32px', 
    borderRadius: 'var(--ad-radii-container, 20px)',
    border: '1px solid var(--ad-colors-border-subtle, #333)',
    marginBottom: '40px',
    color: 'var(--ad-colors-text-primary, #fff)',
    fontFamily: 'var(--ad-typography-family-body, sans-serif)'
  }}>
    <h2 style={{ fontSize: '24px', marginBottom: '16px', fontWeight: 600 }}>🛠 如何使用设计变量 (Design Tokens)?</h2>
    <p style={{ color: 'var(--ad-colors-text-secondary, #a6a6a6)', marginBottom: '24px', lineHeight: 1.6 }}>
      我们的系统通过统一的 <code>ThemeConfig</code> 将底层配置转化为全局 CSS 变量。所有的 Token 都已自动挂载在 <code>:root</code> 节点下，前缀统一为 <code>--ad-</code>。使用变量可以确保你的组件样式随主题动态无缝切换！
    </p>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
      <div>
        <h3 style={{ fontSize: '16px', marginBottom: '12px', color: 'var(--ad-colors-action-primary, #0099ff)' }}>🎨 方法 A: 在 CSS / SCSS / CSS Module 中使用</h3>
        <pre style={{ 
          background: '#000', padding: '16px', borderRadius: 'var(--ad-radii-standard, 8px)', 
          color: '#0099ff', fontSize: '13px', overflowX: 'auto', border: '1px solid var(--ad-colors-border-subtle)'
        }}>
{`.my-button {
  background-color: var(--ad-colors-action-primary);
  border-radius: var(--ad-radii-pillFull);
  padding: var(--ad-spacing-semantic-buttonPadding);
  transition: var(--ad-animations-transition-base);
}
.my-button:hover {
  box-shadow: var(--ad-shadows-semantic-cardRingHover);
}`}
        </pre>
      </div>
      <div>
        <h3 style={{ fontSize: '16px', marginBottom: '12px', color: 'var(--ad-colors-action-primary, #0099ff)' }}>⚛️ 方法 B: 在 React Inline Styles 或 CSS-in-JS 中使用</h3>
        <pre style={{ 
          background: '#000', padding: '16px', borderRadius: 'var(--ad-radii-standard, 8px)', 
          color: '#e6cc77', fontSize: '13px', overflowX: 'auto', border: '1px solid var(--ad-colors-border-subtle)'
        }}>
{`const Card = () => (
  <div style={{
    backgroundColor: 'var(--ad-colors-background-surfaceGlass)',
    borderRadius: 'var(--ad-radii-card)',
    padding: 'var(--ad-spacing-semantic-cardPadding)',
    // 排版组合变量
    fontFamily: 'var(--ad-typography-styles-cardTitle-fontFamily)',
    fontSize: 'var(--ad-typography-styles-cardTitle-fontSize)',
  }}>
    Hello Framer Theme!
  </div>
);`}
        </pre>
      </div>
    </div>
    
    <div style={{ marginTop: '24px', padding: '16px', backgroundColor: 'rgba(0, 153, 255, 0.1)', borderRadius: 'var(--ad-radii-standard, 8px)', border: '1px solid rgba(0,153,255,0.2)' }}>
      <strong style={{color: '#0099ff'}}>💡 命名转换规则图谱：(对象层级按 . 分割并转为 -)</strong> <br/>
      <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '14px' }}>
        <div><code>theme.colors.background.base</code> ➔ <code>var(--ad-colors-background-base)</code></div>
        <div><code>theme.spacing.scale[10]</code> ➔ <code>var(--ad-spacing-scale-10)</code></div>
        <div><code>theme.typography.styles.displayHero.fontSize</code> ➔ <code>var(--ad-typography-styles-displayHero-fontSize)</code></div>
      </div>
    </div>
  </div>
);

// ==========================================
// 🎨 2. 辅助展示组件 (UI Helpers)
// ==========================================

const SectionTitle = ({ children, desc }: { children: React.ReactNode, desc?: string }) => (
  <div style={{ marginBottom: '32px', marginTop: '64px', borderBottom: '1px solid var(--ad-colors-border-subtle, #333)', paddingBottom: '16px' }}>
    <h1 style={{ fontSize: '32px', color: 'var(--ad-colors-text-primary, #fff)', margin: 0, fontWeight: 600 }}>{children}</h1>
    {desc && <p style={{ fontSize: '16px', color: 'var(--ad-colors-text-secondary, #a6a6a6)', margin: '8px 0 0 0' }}>{desc}</p>}
  </div>
);

const Grid = ({ children, columns = 'repeat(auto-fill, minmax(280px, 1fr))' }: { children: React.ReactNode, columns?: string }) => (
  <div style={{ display: 'grid', gridTemplateColumns: columns, gap: '24px' }}>{children}</div>
);

// 万能的 Token 展示卡片
const TokenItem = ({ name, varName, rawValue, preview, notes }: { name: string, varName: string, rawValue: string, preview?: React.ReactNode, notes?: string }) => (
  <div style={{ 
    display: 'flex', flexDirection: 'column', padding: '16px', 
    backgroundColor: 'var(--ad-colors-background-surface, #111)', 
    borderRadius: 'var(--ad-radii-standard, 8px)', border: '1px solid var(--ad-colors-border-subtle, #222)' 
  }}>
    {preview && (
      <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--ad-colors-background-base, #000)', borderRadius: '4px', marginBottom: '16px', position: 'relative', overflow: 'hidden', border: '1px solid var(--ad-colors-border-subtle)' }}>
        {preview}
      </div>
    )}
    <div style={{ flex: 1 }}>
      <div style={{ fontWeight: 600, fontSize: '15px', color: 'var(--ad-colors-text-primary, #fff)', marginBottom: '8px' }}>{name}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <code style={{ fontSize: '12px', color: 'var(--ad-colors-action-primary, #0099ff)', wordBreak: 'break-all', padding: '4px', background: 'rgba(0,153,255,0.1)', borderRadius: '4px' }}>{varName}</code>
        <code style={{ fontSize: '12px', color: '#e6cc77', wordBreak: 'break-all', padding: '4px', background: 'rgba(230, 204, 119, 0.1)', borderRadius: '4px' }}>值: {rawValue}</code>
      </div>
      {notes && <div style={{ marginTop: '12px', fontSize: '12px', color: 'var(--ad-colors-text-secondary, #888)', lineHeight: 1.4 }}>{notes}</div>}
    </div>
  </div>
);

// 特定效果的预览组件
const ColorPreview = ({ varName }: { varName: string }) => (
  <div style={{ width: '100%', height: '100%', backgroundColor: `var(${varName})` }} />
);

const RadiusPreview = ({ varName }: { varName: string }) => (
  <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--ad-colors-action-primary, #0099ff)', borderRadius: `var(${varName})` }} />
);

const ShadowPreview = ({ varName, isDark }: { varName: string, isDark?: boolean }) => (
  <div style={{ width: '60px', height: '60px', backgroundColor: isDark ? 'var(--ad-colors-background-surface, #090909)' : 'var(--ad-colors-background-inverse, #fff)', borderRadius: '8px', boxShadow: `var(${varName})` }} />
);

// 排版组合组件
const TypographyRow = ({ name, title, rawValues }: { name: string, title: string, rawValues: Record<string, string> }) => (
  <div style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid var(--ad-colors-border-subtle, #333)' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', alignItems: 'flex-end' }}>
      <div style={{ fontWeight: 600, color: 'var(--ad-colors-text-primary, #fff)', fontSize: '18px' }}>{title}</div>
      <code style={{ fontSize: '13px', color: 'var(--ad-colors-action-primary, #0099ff)' }}>styles.{name}</code>
    </div>
    
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '24px' }}>
      {/* 视觉预览区 */}
      <div style={{
        fontFamily: `var(--ad-typography-styles-${name}-fontFamily)`,
        fontSize: `var(--ad-typography-styles-${name}-fontSize)`,
        fontWeight: `var(--ad-typography-styles-${name}-fontWeight)`,
        lineHeight: `var(--ad-typography-styles-${name}-lineHeight)`,
        letterSpacing: `var(--ad-typography-styles-${name}-letterSpacing)`,
        textTransform: `var(--ad-typography-styles-${name}-textTransform, none)` as any,
        fontFeatureSettings: `var(--ad-typography-styles-${name}-fontFeatureSettings, normal)`,
        color: 'var(--ad-colors-text-primary, #fff)',
        backgroundColor: 'var(--ad-colors-background-base, #000)',
        padding: '24px',
        borderRadius: '8px',
        border: '1px solid var(--ad-colors-border-subtle)',
        display: 'flex',
        alignItems: 'center'
      }}>
        The quick brown fox.
      </div>
      
      {/* 变量与真实值对照表 */}
      <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '8px', fontSize: '12px' }}>
        <div style={{ fontWeight: 600, marginBottom: '8px', color: '#fff' }}>变量对应真实值:</div>
        {Object.entries(rawValues).map(([key, val]) => (
          <div key={key} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', borderBottom: '1px dashed #333', paddingBottom: '4px' }}>
            <span style={{ color: '#aaa' }}>{key}</span>
            <span style={{ color: '#e6cc77', textAlign: 'right', wordBreak: 'break-all', maxWidth: '160px' }}>{val}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ==========================================
// 🚀 3. Stories 导出 (全量 Token 展示)
// ==========================================

export const AllTokens: StoryObj = {
  name: '设计系统变量全景',
  render: () => (
    <div style={{ fontFamily: 'var(--ad-typography-family-body, sans-serif)', maxWidth: '1200px', margin: '0 auto', color: '#fff', paddingBottom: '100px' }}>
      
      <UsageGuide />

      {/* -------------------- 1. 颜色 (Colors) -------------------- */}
      <SectionTitle desc="背景、文本、动作和边框的语义化颜色。100% 覆盖 framer.ts">🎨 1. 颜色体系 (Colors)</SectionTitle>
      
      <h3 style={{ color: '#fff', marginTop: '24px', marginBottom: '16px' }}>Background (背景色)</h3>
      <Grid>
        <TokenItem name="Base" varName="--ad-colors-background-base" rawValue="#000000" preview={<ColorPreview varName="--ad-colors-background-base" />} />
        <TokenItem name="Surface" varName="--ad-colors-background-surface" rawValue="#090909" preview={<ColorPreview varName="--ad-colors-background-surface" />} />
        <TokenItem name="Surface Glass" varName="--ad-colors-background-surfaceGlass" rawValue="rgba(255, 255, 255, 0.1)" preview={<ColorPreview varName="--ad-colors-background-surfaceGlass" />} notes="Frosted Pill / Nav 磨砂背景" />
        <TokenItem name="Surface Glass Hover" varName="--ad-colors-background-surfaceGlassHover" rawValue="rgba(255, 255, 255, 0.15)" preview={<ColorPreview varName="--ad-colors-background-surfaceGlassHover" />} />
        <TokenItem name="Inverse" varName="--ad-colors-background-inverse" rawValue="rgb(255, 255, 255)" preview={<ColorPreview varName="--ad-colors-background-inverse" />} notes="白色实心按钮背景" />
        <TokenItem name="Input" varName="--ad-colors-background-input" rawValue="#000000" preview={<ColorPreview varName="--ad-colors-background-input" />} />
        <TokenItem name="Nav" varName="--ad-colors-background-nav" rawValue="#000000" preview={<ColorPreview varName="--ad-colors-background-nav" />} />
      </Grid>

      <h3 style={{ color: '#fff', marginTop: '32px', marginBottom: '16px' }}>Text (文本色)</h3>
      <Grid>
        <TokenItem name="Primary" varName="--ad-colors-text-primary" rawValue="#ffffff" preview={<ColorPreview varName="--ad-colors-text-primary" />} />
        <TokenItem name="Secondary" varName="--ad-colors-text-secondary" rawValue="#a6a6a6" preview={<ColorPreview varName="--ad-colors-text-secondary" />} />
        <TokenItem name="Placeholder" varName="--ad-colors-text-placeholder" rawValue="rgba(255, 255, 255, 0.4)" preview={<ColorPreview varName="--ad-colors-text-placeholder" />} />
        <TokenItem name="Inverse" varName="--ad-colors-text-inverse" rawValue="#000000" preview={<ColorPreview varName="--ad-colors-text-inverse" />} notes="反转底色上的文字" />
        <TokenItem name="Muted" varName="--ad-colors-text-muted" rawValue="#a6a6a6" preview={<ColorPreview varName="--ad-colors-text-muted" />} notes="静音色/客户Logo" />
      </Grid>

      <h3 style={{ color: '#fff', marginTop: '32px', marginBottom: '16px' }}>Action & Border (交互与边框)</h3>
      <Grid>
        <TokenItem name="Action Primary" varName="--ad-colors-action-primary" rawValue="#0099ff" preview={<ColorPreview varName="--ad-colors-action-primary" />} />
        <TokenItem name="Action Link" varName="--ad-colors-action-link" rawValue="#ffffff" preview={<ColorPreview varName="--ad-colors-action-link" />} />
        <TokenItem name="Action Ghost Hover" varName="--ad-colors-action-ghostHover" rawValue="rgba(255, 255, 255, 0.1)" preview={<ColorPreview varName="--ad-colors-action-ghostHover" />} />
        <TokenItem name="Border Subtle" varName="--ad-colors-border-subtle" rawValue="#090909" preview={<ColorPreview varName="--ad-colors-border-subtle" />} />
        <TokenItem name="Border Input" varName="--ad-colors-border-input" rawValue="rgba(255, 255, 255, 0.15)" preview={<ColorPreview varName="--ad-colors-border-input" />} />
        <TokenItem name="Border Focus" varName="--ad-colors-border-focus" rawValue="#0099ff" preview={<ColorPreview varName="--ad-colors-border-focus" />} />
      </Grid>


      {/* -------------------- 2. 排版 (Typography) -------------------- */}
      <SectionTitle desc="字体族、18 种不同层级的组合样式及其 OTF 字体特性。">🔠 2. 排版系统 (Typography)</SectionTitle>
      
      <h3 style={{ color: '#fff', marginTop: '24px', marginBottom: '16px' }}>Font Families (基础字体族)</h3>
      <Grid columns="repeat(auto-fill, minmax(350px, 1fr))">
        <TokenItem name="Display" varName="--ad-typography-family-display" rawValue='"GT Walsheim Framer Medium", ...' />
        <TokenItem name="Body" varName="--ad-typography-family-body" rawValue='"Inter Variable", Inter, ...' />
        <TokenItem name="Body Readable" varName="--ad-typography-family-bodyReadable" rawValue='"Inter Framer Regular", Inter...' />
        <TokenItem name="Accent" varName="--ad-typography-family-accent" rawValue='"Mona Sans", sans-serif' />
        <TokenItem name="Mono" varName="--ad-typography-family-mono" rawValue='"Azeret Mono", monospace' />
        <TokenItem name="Rounded" varName="--ad-typography-family-rounded" rawValue='"Open Runde", sans-serif' />
      </Grid>

      <h3 style={{ color: '#fff', marginTop: '32px', marginBottom: '16px' }}>Text Styles (复合排版样式)</h3>
      <div style={{ backgroundColor: 'var(--ad-colors-background-surface, #111)', padding: '32px', borderRadius: '16px', border: '1px solid var(--ad-colors-border-subtle)' }}>
        <TypographyRow name="displayHero" title="Display Hero (超级大标题)" rawValues={{ size: '110px', weight: '500', height: '0.85', letterSpacing: '-5.5px' }} />
        <TypographyRow name="sectionDisplay" title="Section Display (区块大展示)" rawValues={{ size: '85px', weight: '500', height: '0.95', letterSpacing: '-4.25px', otf: '"ss02" 1, "tnum" 1' }} />
        <TypographyRow name="sectionHeading" title="Section Heading (区块标题)" rawValues={{ size: '62px', weight: '500', height: '1.0', letterSpacing: '-3.1px', otf: '"ss02" 1' }} />
        <TypographyRow name="featureHeading" title="Feature Heading (特性展示标题)" rawValues={{ size: '32px', weight: '500', height: '1.13', letterSpacing: '-1px' }} />
        <TypographyRow name="accentDisplay" title="Accent Display (超细强调标题)" rawValues={{ size: '61.5px', weight: '100', height: '1.0', letterSpacing: '-3.1px', family: 'Mona Sans' }} />
        <TypographyRow name="cardTitle" title="Card Title (常规卡片标题)" rawValues={{ size: '24px', weight: '400', height: '1.3', letterSpacing: '-0.01px', otf: 'interFull' }} />
        <TypographyRow name="featureTitle" title="Feature Title (粗体特性标题)" rawValues={{ size: '22px', weight: '700', height: '1.2', letterSpacing: '-0.8px', otf: '"cv05" 1' }} />
        <TypographyRow name="subHeading" title="Sub Heading (副标题)" rawValues={{ size: '20px', weight: '600', height: '1.2', letterSpacing: '-0.8px', otf: '"cv01" 1, "cv09" 1' }} />
        <TypographyRow name="bodyLarge" title="Body Large (放大正文)" rawValues={{ size: '18px', weight: '400', height: '1.3', letterSpacing: '-0.01px', otf: 'interFull' }} />
        <TypographyRow name="body" title="Body (标准正文)" rawValues={{ size: '15px', weight: '400', height: '1.3', letterSpacing: '-0.01px', otf: '"cv11" 1' }} />
        <TypographyRow name="navUI" title="Nav UI (导航栏文本)" rawValues={{ size: '15px', weight: '400', height: '1.0', letterSpacing: '-0.15px', otf: 'interNav' }} />
        <TypographyRow name="bodyReadable" title="Body Readable (长文易读正文)" rawValues={{ size: '14px', weight: '400', height: '1.6', letterSpacing: 'normal' }} />
        <TypographyRow name="caption" title="Caption (说明文字)" rawValues={{ size: '14px', weight: '400', height: '1.4', letterSpacing: 'normal', otf: 'interMicro' }} />
        <TypographyRow name="label" title="Label (控件标签)" rawValues={{ size: '13px', weight: '500', height: '1.6', letterSpacing: 'normal', otf: '"cv06" 1...' }} />
        <TypographyRow name="smallCaption" title="Small Caption (小号说明)" rawValues={{ size: '12px', weight: '400', height: '1.4', letterSpacing: 'normal', otf: 'interMicro' }} />
        <TypographyRow name="microCode" title="Micro Code (等宽代码)" rawValues={{ size: '10.4px', weight: '400', height: '1.6', family: 'Azeret Mono' }} />
        <TypographyRow name="badge" title="Badge (微型徽章)" rawValues={{ size: '9px', weight: '600', height: '1.11', family: 'Open Runde' }} />
        <TypographyRow name="microUppercase" title="Micro Uppercase (全大写微标注)" rawValues={{ size: '7px', weight: '400', height: '1.0', letterSpacing: '0.21px', textTransform: 'uppercase' }} />
      </div>


      {/* -------------------- 3. 圆角 (Radii) -------------------- */}
      <SectionTitle desc="从1px精密微边缘到100px纯圆药丸形状。">🔲 3. 圆角系统 (Radii)</SectionTitle>
      <Grid>
        <TokenItem name="Micro" varName="--ad-radii-micro" rawValue="1px" preview={<RadiusPreview varName="--ad-radii-micro" />} />
        <TokenItem name="Small" varName="--ad-radii-small" rawValue="6px" preview={<RadiusPreview varName="--ad-radii-small" />} />
        <TokenItem name="Standard" varName="--ad-radii-standard" rawValue="8px" preview={<RadiusPreview varName="--ad-radii-standard" />} />
        <TokenItem name="Card" varName="--ad-radii-card" rawValue="12px" preview={<RadiusPreview varName="--ad-radii-card" />} />
        <TokenItem name="Container" varName="--ad-radii-container" rawValue="20px" preview={<RadiusPreview varName="--ad-radii-container" />} />
        <TokenItem name="Pill" varName="--ad-radii-pill" rawValue="40px" preview={<RadiusPreview varName="--ad-radii-pill" />} />
        <TokenItem name="Pill Full" varName="--ad-radii-pillFull" rawValue="100px" preview={<RadiusPreview varName="--ad-radii-pillFull" />} />
      </Grid>


      {/* -------------------- 4. 阴影 (Shadows) -------------------- */}
      <SectionTitle desc="包含高度层级体系 (Elevation) 和特定交互语义阴影 (Semantic)。">☁️ 4. 阴影体系 (Shadows)</SectionTitle>
      <Grid columns="repeat(auto-fill, minmax(320px, 1fr))">
        <TokenItem name="Elevation Level 0" varName="--ad-shadows-elevation-level0" rawValue="none" preview={<ShadowPreview varName="--ad-shadows-elevation-level0" isDark />} />
        <TokenItem name="Elevation Level 1 (Ring)" varName="--ad-shadows-elevation-level1" rawValue="rgba(0,153,255,0.15) 0 0 0 1px" preview={<ShadowPreview varName="--ad-shadows-elevation-level1" isDark />} />
        <TokenItem name="Elevation Level 2 (Contained)" varName="--ad-shadows-elevation-level2" rawValue="rgb(9, 9, 9) 0px 0px 0px 2px" preview={<ShadowPreview varName="--ad-shadows-elevation-level2" isDark />} />
        <TokenItem name="Elevation Level 3 (Floating)" varName="--ad-shadows-elevation-level3" rawValue="...0px 0.5px..., rgba(0,0,0,0.25) 0px 10px 30px" preview={<ShadowPreview varName="--ad-shadows-elevation-level3" />} />
        <TokenItem name="Semantic Card Hover" varName="--ad-shadows-semantic-cardRingHover" rawValue="rgba(0,153,255,0.25) 0 0 0 1px" preview={<ShadowPreview varName="--ad-shadows-semantic-cardRingHover" isDark />} />
        <TokenItem name="Semantic Input Focus" varName="--ad-shadows-semantic-inputFocus" rawValue="0 0 0 1px #0099ff" preview={<ShadowPreview varName="--ad-shadows-semantic-inputFocus" isDark />} />
        <TokenItem name="Semantic Image Depth" varName="--ad-shadows-semantic-imageDepth" rawValue="rgba(0, 0, 0, 0.3) 0px 10px 30px" preview={<ShadowPreview varName="--ad-shadows-semantic-imageDepth" />} />
      </Grid>


      {/* -------------------- 5. 动画 (Animations) -------------------- */}
      <SectionTitle desc="物理形变与基础缓动曲线。">⚡ 5. 动画 (Animations)</SectionTitle>
      <Grid>
        <TokenItem name="Transform Active Scale" varName="--ad-animations-transform-activeScale" rawValue="scale(0.85)" notes="按压回弹比例" />
        <TokenItem name="Transition Base" varName="--ad-animations-transition-base" rawValue="all 0.2s cubic-bezier(0.25, 1, 0.5, 1)" notes="基础贝塞尔曲线" />
        <TokenItem name="Transition Opacity" varName="--ad-animations-transition-opacity" rawValue="opacity 0.2s ease" notes="纯透明度过渡" />
      </Grid>


      {/* -------------------- 6. 间距 (Spacing) -------------------- */}
      <SectionTitle desc="包含绝对比例尺 (Scale) 与 语义哲学间距 (Semantic)。">📏 6. 间距体系 (Spacing)</SectionTitle>
      
      <h3 style={{ color: '#fff', marginTop: '24px', marginBottom: '16px' }}>Base & Semantic (语义间距)</h3>
      <Grid>
        <TokenItem name="Base Unit" varName="--ad-spacing-base" rawValue="8px" />
        <TokenItem name="Section (Breathe)" varName="--ad-spacing-semantic-section" rawValue="120px" notes="跨区块极宽呼吸留白" />
        <TokenItem name="Card Padding" varName="--ad-spacing-semantic-cardPadding" rawValue="24px" notes="卡片内部四周留白" />
        <TokenItem name="Component Gap" varName="--ad-spacing-semantic-componentGap" rawValue="16px" notes="组件内部相邻元素间隙" />
        <TokenItem name="Button Padding" varName="--ad-spacing-semantic-buttonPadding" rawValue="10px 15px" notes="按钮内边距" />
      </Grid>

      <h3 style={{ color: '#fff', marginTop: '32px', marginBottom: '16px' }}>Scale Values (比例尺绝对值)</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '16px' }}>
        {[1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 30, 35].map(num => (
          <div key={num} style={{ background: '#111', padding: '12px', borderRadius: '8px', border: '1px solid #222' }}>
            <div style={{ color: '#0099ff', fontSize: '12px', marginBottom: '4px' }}>scale.{num}</div>
            <div style={{ color: '#e6cc77', fontWeight: 600 }}>{num}px</div>
            <code style={{ fontSize: '10px', color: '#666' }}>var(--ad-spacing-scale-{num})</code>
          </div>
        ))}
      </div>


      {/* -------------------- 7. 布局与特效 (Layout & Effects) -------------------- */}
      <SectionTitle desc="整体宽容度控制与视觉发光/模糊特效。">✨ 7. 布局与特效 (Layout & Effects)</SectionTitle>
      <Grid>
        <TokenItem name="Container Max Width" varName="--ad-layout-container-maxWidth" rawValue="1200px" notes="居中容器最大宽度" />
        <TokenItem name="Asymmetric Grid" varName="--ad-layout-grid-asymmetricTemplate" rawValue="4fr 6fr" notes="非对称图文网格比例" />
        <TokenItem name="Blur Glassmorphism" varName="--ad-effects-blur-glassmorphism" rawValue="none" notes="Framer 主题刻意舍弃模糊器，纯靠 rgba" />
        <TokenItem name="Glow Radial Aura" varName="--ad-effects-glow-radialAura" rawValue="radial-gradient(circle, rgba(0,153,255,0.1)...)" notes="环境背光" preview={<div style={{width:'100%', height:'100%', background: 'radial-gradient(circle, rgba(0,153,255,0.4) 0%, rgba(0,0,0,0) 70%)'}} />} />
      </Grid>

    </div>
  )
};