# 部署指南

## 快速部署到 Vercel

### 步骤 1: 准备 GitHub 仓库

1. 在 GitHub 上创建一个新仓库
2. 将本地代码推送到仓库：

```bash
git init
git add .
git commit -m "Initial commit: Competition website"
git branch -M main
git remote add origin <你的仓库URL>
git push -u origin main
```

### 步骤 2: 在 Vercel 部署

1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub 账号登录
3. 点击 "Add New Project"
4. 选择你的仓库
5. Vercel 会自动检测 Next.js 项目
6. 点击 "Deploy"

### 步骤 3: 配置环境变量（如需要）

如果将来需要添加环境变量，可以在 Vercel 项目设置中添加。

## 本地测试

在部署前，建议先在本地测试：

```bash
# 安装依赖
npm install

# 运行开发服务器
npm run dev

# 构建生产版本测试
npm run build
npm start
```

## 常见问题

### 问题：部署后样式不显示

**解决方案**: 确保 `next.config.js` 配置正确，并且所有 CSS 文件都已正确导入。

### 问题：语言/主题切换不工作

**解决方案**: 检查浏览器控制台是否有错误，确保 localStorage 可用。

### 问题：Vercel 构建失败

**解决方案**: 
1. 检查 `package.json` 中的依赖版本
2. 确保 Node.js 版本兼容（Vercel 默认使用 Node.js 18+）
3. 查看 Vercel 构建日志获取详细错误信息

## 自定义域名

1. 在 Vercel 项目设置中
2. 进入 "Domains" 选项
3. 添加你的自定义域名
4. 按照提示配置 DNS 记录
