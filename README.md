# 设计效果百科

一个看得见、玩得懂，也可以直接拆开研究的设计效果知识库。

项目收录 UI、交互、平面、封面、色彩与字体等领域的常用设计语言。每个效果不仅有术语解释，还提供独立视觉示例、实时参数调节和可修改的 HTML/CSS 源码，帮助设计师与开发者理解一个效果是如何构成的。

## 在线访问

**[打开设计效果百科 →](https://xvshiting.github.io/ui-wiki/)**

如果这个项目对你有帮助，欢迎前往 [GitHub 仓库](https://github.com/xvshiting/ui-wiki) 点一个 Star。

## 当前收录

目前共有 **600 个设计效果**，覆盖 UI、交互、平面、封面、色彩与字体等主题：

- UI 布局
- UI 视觉
- 交互与动效（118 个）
- 平面设计
- 封面设计
- 色彩与字体

当前数据分布为：UI 布局 110 个、UI 视觉 18 个、交互/动效 118 个、平面设计 118 个、封面设计 118 个、色彩与字体 118 个；色彩与字体进一步按色彩体系、渐变、无障碍色彩和字体构造细分。

内容涵盖网格布局、玻璃拟态、弹性动效、瑞士国际主义、字体主视觉封面、色彩系统等经典主题，也包括液态玻璃、视差倾斜、孔版印刷、千禧年美学、图像蒙版字体等延伸效果。

## 项目特点

- **独立效果预览**：每个词条拥有与其设计原理对应的 HTML 结构和 CSS 表现。
- **交互式演示**：按钮形变、拖拽吸附、卡片翻转、聚光悬停等效果可以直接操作。
- **参数实验室**：实时调整颜色、间距、圆角、旋转和缩放，观察参数如何改变视觉结果。
- **源码 Playground**：查看、修改并重新运行当前效果的 HTML/CSS。
- **双语术语**：提供中英文名称、使用场景、关键原则与视觉构成说明。
- **分类与搜索**：可按领域浏览，也可通过名称、标签和分类快速检索。
- **离线可用**：生成结果不依赖 CDN，直接打开 `index.html` 即可浏览。

## 快速开始

项目没有第三方运行依赖。克隆仓库后，可以直接打开 `index.html`，也可以启动一个本地静态服务器：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000/`。

## 项目结构

```text
ui-wiki/
├── index.html                  # 首页与分类入口
├── categories/                # 六个分类聚合页
├── terms/                     # 600 个效果详情页
├── data/
│   ├── lexicon.js             # 核心分类与词条数据
│   ├── extra-terms.js         # 扩展词条数据
│   └── controls.js            # 参数定义与效果映射
├── assets/
│   ├── app.js                 # 页面、搜索与交互逻辑
│   ├── extra-demos.js         # 扩展效果的专属预览结构
│   ├── styles.css             # 基础界面与原有效果样式
│   ├── effects-extra.css      # 第一批扩展效果样式
│   ├── fx-library.css         # 60 个专属扩展预览样式
│   ├── motion-click.css       # 点击与按压反馈效果样式
│   └── browser.js             # 构建生成的离线浏览脚本
└── scripts/
    ├── build.mjs              # 生成分类页、详情页和浏览脚本
    ├── check-controls.mjs     # 检查参数是否真正映射到效果
    ├── check-previews.mjs     # 检查预览唯一性与基础表现
    └── check-effect-fidelity.mjs # 防止不同词条退化为通用伪预览
```

## 添加新效果

1. 在 `data/lexicon.js` 或 `data/extra-terms.js` 中添加词条数据。
2. 在 `assets/app.js` 或 `assets/extra-demos.js` 中添加专属预览结构。
3. 在对应样式文件中实现效果，并在 `data/controls.js` 中只暴露真正生效的参数。
4. 重新生成静态页面：

```bash
node scripts/build.mjs
```

5. 运行完整性检查：

```bash
node scripts/check-controls.mjs
node scripts/check-previews.mjs
node scripts/check-effect-fidelity.mjs
```

新增效果会自动进入对应分类、搜索结果、前后浏览导航和独立详情页。

## 内容原则

这个项目不把“换一个名称、颜色或坐标”视为新的设计效果。新增词条应当具备可辨认的视觉机制、专属演示结构、真实生效的参数，以及能够帮助使用者判断何时采用它的设计说明。
