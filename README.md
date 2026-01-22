# AI Prompt Engineering Competition Website

赛博朋克风格的AI提示工程竞赛说明网站，支持中英文切换和白天/黑夜主题切换。

## 功能特性

- 🎨 **赛博朋克风格设计** - 霓虹灯效果、渐变色彩、动态光效
- 🌐 **多语言支持** - 中文/英文切换
- 🌓 **主题切换** - 白天/黑夜模式
- 📱 **响应式设计** - 适配各种设备
- ⚡ **Next.js 14** - 基于最新的Next.js框架

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: CSS-in-JS (styled-jsx)
- **部署**: Vercel

## 本地开发

### 安装依赖

```bash
npm install
```

### 运行开发服务器

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建生产版本

```bash
npm run build
npm start
```

## 部署到 Vercel

### 方法一：通过 Vercel CLI

1. 安装 Vercel CLI：
```bash
npm i -g vercel
```

2. 在项目根目录运行：
```bash
vercel
```

3. 按照提示完成部署

### 方法二：通过 GitHub

1. 将代码推送到 GitHub 仓库

2. 在 [Vercel](https://vercel.com) 中：
   - 点击 "New Project"
   - 导入你的 GitHub 仓库
   - Vercel 会自动检测 Next.js 项目并完成配置
   - 点击 "Deploy"

3. 部署完成后，Vercel 会提供一个 URL

## 项目结构

```
Competition/
├── app/
│   ├── layout.tsx      # 根布局
│   ├── page.tsx        # 主页面
│   └── globals.css     # 全局样式
├── components/
│   └── ControlPanel.tsx # 控制面板组件
├── contexts/
│   ├── LanguageContext.tsx # 语言上下文
│   └── ThemeContext.tsx    # 主题上下文
├── package.json
├── tsconfig.json
├── next.config.js
└── vercel.json
```

## 自定义配置

### 修改颜色主题

编辑 `app/globals.css` 中的 CSS 变量：

```css
:root {
  --accent-cyan: #00ffff;
  --accent-pink: #ff00ff;
  --accent-purple: #9d00ff;
  /* ... */
}
```

### 修改文本内容

编辑 `contexts/LanguageContext.tsx` 中的 `translations` 对象。

## 许可证

MIT License
# Competition
