import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/svg-icon-package/',
  publicPath: '/svg-icon-package/',
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
});
