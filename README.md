# 设计效果百科

一个模块化的 UI、平面设计与封面设计效果知识库。

详情页支持同分类前后浏览、中英文术语复制、实时参数调节，以及 HTML/CSS 源码查看、修改和重新运行。

## 内容结构

- `index.html`：项目介绍与分类入口
- `categories/`：每个分类一个聚合页
- `terms/`：每个设计效果一个独立页面
- `data/lexicon.js`：所有分类与术语的结构化内容
- `assets/`：共享样式和交互逻辑
- `scripts/build.mjs`：根据数据生成分类页和术语页

生成时会同时输出 `assets/browser.js`，因此可以直接双击 `index.html` 浏览，不依赖 CDN 或本地服务器。

## 添加新效果

在 `data/lexicon.js` 的 `terms` 数组添加一条记录，然后运行：

```bash
node scripts/build.mjs
```

新页面会自动出现在对应分类和搜索结果中。
