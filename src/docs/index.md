### CTA

<code src="./cta.tsx"></code>

### Light

<code src="./light.tsx"></code>

### Solid

<code src="./solid.tsx"></code>

### Feature

<code src="./feat.tsx"></code>

### Loading

<code src="./loading.tsx"></code>

### Payment

<code src="./payment.tsx"></code>

### 开发

#### 1. 对于不需要特殊定义颜色并且是正方形的 icon，采用自动生成 React 组件的方式

1.  按照 icon 分类命名 svg 文件名称，名称格式为 xxx-xxx 这种，均已小写字母开头
2.  将修改好名称的 svg 文件夹放到 source 目录
3.  执行 npm run compiler 命令，然后在 src/auto_icons 目录下就会生成相应的 React 组件, [compiler 代码借鉴自 icon-garden](https://github.com/yijinc/icon-garden)
4.  在 docs 编写对应 icon 预览
5.  发布 npm: npm publish, 部署 site: npm deploy

#### 2. 对于需要特殊定义的 icon(如 payment)，采用手动创建 React 组件

1.  在 manual_icons 目录下面根据 icon 类别进行手动创建组件，和老的 @rushable/icons 创建方式一致
2.  将创建好的组件在 src/index.ts 里面导出
3.  在 docs 编写对应网站预览代码
4.  发布 npm: npm publish, 部署 site: npm deploy
