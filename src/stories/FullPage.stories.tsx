import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
// 引入你刚才写的那些组件
import { Container, Grid } from "../components/Layout";
import { Card } from "../components/Card";
import { Text } from "../components/Text";
import { Button } from "../components/Button";
import { ThemeProvider } from "../provider/ThemeProvider";
import { framerTheme } from "../theme/framer";
import { appleTheme } from "../theme/apple";
import { airtableTheme } from "../theme/airtable";
const meta: Meta = {
  title: "Pages/LandingPage", // 放在一个新的分类下
  parameters: {
    layout: "fullscreen", // 让 Storybook 铺满，去掉默认的边距
  },
};

export default meta;

export const Demo = () => {
  return (
    // 1. 注入主题引擎
    <ThemeProvider theme={framerTheme}>
      {/* 2. Hero 首屏区域 */}
      <Container as="header" sectionPadding style={{ marginBottom: '8rem' }}>
        {/* 单列居中排版 */}
        <Grid
          columns={1}
          gap="componentGap"
          justifyItems="center"
          style={{ textAlign: "center", marginTop: "60px" }}
        >
          <Text variant="displayHero" as="h1">
            Design in the void.
          </Text>

          <Text
            variant="bodyLarge"
            color="secondary"
            style={{ maxWidth: "600px" }}
          >
            A cinematic, tool-obsessed dark canvas that radiates the confidence
            of a design tool built by designers who worship craft.
          </Text>

          <Grid columns={2} gap={15} style={{ marginTop: "20px" }}>
            <Button variant="solid" size="large">
              Start for free
            </Button>
            <Button variant="frosted" size="large">
              Watch demo
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* 3. 特征介绍区域：完美应用 40% vs 60% 不对称网格 */}
      <Container as="section" sectionPadding style={{ marginBottom: '8rem' }}>
        <Grid columns="asymmetric" gap={30} alignItems="center">
          {/* 左侧 40% 文本流 */}
          <Grid columns={1} gap="componentGap">
            <Text variant="featureHeading" as="h2">
              Ship products faster.
            </Text>
            <Text variant="body" color="secondary">
              The transition to Inter for body text is seamless, with extensive
              OpenType feature usage that gives even small text a refined,
              custom feel.
            </Text>
            <div>
              <Button variant="ghost" size="medium">
                Learn more &rarr;
              </Button>
            </div>
          </Grid>

          {/* 右侧 60% 物理悬浮卡片（用来放产品截图） */}
          <Card
            variant="elevated"
            padding="none"
            radius="card"
            style={{ height: "400px" }}
          >
            {/* 这里模拟一张嵌在黑色背景里的 UI 截图 */}
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg, #090909 0%, #1a1a1a 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text variant="microCode" color="placeholder">
                UI Screenshot Area
              </Text>
            </div>
          </Card>
        </Grid>
      </Container>

      {/* 4. 并排卡片展示区域 */}
      <Container as="section" sectionPadding style={{ marginBottom: '8rem' }}>
        <Text
          variant="sectionHeading"
          as="h2"
          style={{ marginBottom: "40px", textAlign: "center" }}
        >
          Everything you need.
        </Text>

        {/* 3 列等分网格，展示带有蓝色光晕的交互卡片 */}
        <Grid columns={3} gap="cardPadding">
          {[1, 2, 3].map((item) => (
            <Card
              key={item}
              variant="surface"
              hoverable
              padding="cardPadding"
              radius="card"
            >
              <Grid columns={1} gap={8}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    backgroundColor: "var(--ad-colors-action-primary)",
                    marginBottom: "12px",
                  }}
                />
                <Text variant="subHeading" as="h3">
                  Component {item}
                </Text>
                <Text variant="caption" color="secondary">
                  Framer uses blue-tinted ring shadows at very low opacity for
                  containment.
                </Text>
              </Grid>
            </Card>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
