<div align="center">

![UI Wiki — 设计效果百科](assets/readme-hero.svg)

# UI WIKI · 设计效果百科

### 设计效果，从原理到实现。

[English](README.md) · [简体中文](README.zh-CN.md)

[![在线体验](https://img.shields.io/badge/在线体验-打开_UI_WIKI-53d7d0?style=for-the-badge&labelColor=07111f)](https://xvshiting.github.io/ui-wiki/)
[![GitHub Stars](https://img.shields.io/github/stars/xvshiting/ui-wiki?style=for-the-badge&logo=github&label=STAR&labelColor=07111f&color=ff8066)](https://github.com/xvshiting/ui-wiki)

**660 个设计效果 · 660 个独立详情页 · 无后端 · 可本地运行**

</div>

## UI Wiki 是什么？

UI Wiki 是一个开放、可交互的设计效果知识库，覆盖 UI 布局、界面视觉、交互动效、平面设计、封面设计、色彩与字体。

它不只是术语表。每个词条都包含专属预览、使用场景、设计原则、可调参数和可编辑的 HTML/CSS，可用于寻找灵感、理解机制、比较方案或研究实现。

> 换一种颜色或名称不等于新效果。每个词条都应具有可辨认的机制、专属预览和有意义的设计说明。

## 主要能力

| 能力 | 提供的内容 |
|---|---|
| **浏览** | 按领域、标签和分类专属的二级分组探索 |
| **试玩** | 操作指针、点击、拖拽、滚动、手势和状态反馈 |
| **调参** | 修改效果真正支持的颜色、间距、圆角、缩放和速度 |
| **拆解** | 编辑并重新运行效果的 HTML/CSS |
| **整理** | 收藏、最近浏览和效果对比 |
| **复用** | 复制当前 CSS 作为实现起点 |

## 660 个效果，六个领域

| 分类 | 数量 | 包含内容 |
|---|---:|---|
| **UI 布局** | 107 | 导航、阅读、工作台、表单、地图、响应式与实验构图 |
| **UI 视觉** | 78 | 玻璃、光影、材质、数字纹理与层叠表面 |
| **交互与动效** | 121 | 点击、转场、滚动、拖拽、手势、表单、指针与状态反馈 |
| **平面设计** | 118 | 现代主义、复古、印刷、摄影、拼贴、插画与信息设计 |
| **封面设计** | 118 | 字体、摄影、插画、几何、材质、氛围与系列系统 |
| **色彩与字体** | 38 | 配色系统、无障碍、字形、排版与动态字体 |

## 项目特点

- 用专属预览解释每种效果的真实原理。
- 支持指针排斥、景深焦点和拖拽吸附等真实交互。
- 提供参数实验室和可编辑源码 Playground。
- 收藏、历史与对比数据只保存在本地。
- 支持语义控件、键盘焦点与减少动态效果。
- 纯静态架构，不依赖后端或数据库。

## 本地运行

```bash
git clone git@github.com:xvshiting/ui-wiki.git
cd ui-wiki
python3 -m http.server 8000
```

访问 `http://localhost:8000/`，或打开 **[在线版本](https://xvshiting.github.io/ui-wiki/)**。

## 项目结构

```text
ui-wiki/
├── index.html       # 首页与领域入口
├── categories/     # 构建生成的分类页
├── terms/          # 660 个效果详情页
├── data/           # 词条数据与参数映射
├── assets/         # 界面、预览和效果实现
└── scripts/        # 构建与回归检查
```

## 添加效果

1. 在 `data/lexicon.js` 或 `data/extra-terms.js` 中添加数据。
2. 在 `assets/app.js` 或 `assets/extra-demos.js` 中创建专属预览。
3. 在对应样式文件中实现真实机制。
4. 在 `data/controls.js` 中只暴露真正有效的参数。
5. 重新构建并运行所有检查。

```bash
node scripts/build.mjs
for file in scripts/check-*.mjs; do node "$file"; done
```

## 参与贡献

欢迎添加效果、优化预览、完善文字或改进无障碍体验。效果应具有独立机制，预览能够解释原理，控件真实有效，并且在窄屏和减少动态效果的环境下仍然可用。

完整流程见 **[CONTRIBUTING.md](CONTRIBUTING.md)**，也可以通过[效果征集模板](https://github.com/xvshiting/ui-wiki/issues/new?template=effect-request.md)推荐新内容。

<div align="center">

**[在线体验](https://xvshiting.github.io/ui-wiki/)** · **[查看源码](https://github.com/xvshiting/ui-wiki)** · **[提交 Issue](https://github.com/xvshiting/ui-wiki/issues)**

为希望理解设计效果如何工作的设计师与开发者制作。

</div>
