import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/rushable-icon2/',
  publicPath: '/rushable-icon2/',
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  themeConfig: {
    name: '',
    logo: '/rushable-icon2/logo.svg',
    nav: [],
    showLineNum: true,
  },
});
