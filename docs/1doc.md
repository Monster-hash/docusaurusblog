---
id: 1doc
title: 基本操作备忘
sidebar_label: 基本操作备忘
slug: /
---

Docusaurus 是 Facebook 开源的一个静态网站生成器，主要用来给开源项目生成帮助文档或博客。

Docusaurus 可以根据 Markdown 文件生成静态页面，可以直接部署到 Github Pages 之类的纯静态环境。

Docusaurus 使用 React 构建，生成的页面可以实现无刷新跳转，同时 Docusaurus 也会生成独立的 HTML 页面，可以让搜索引擎获取页面内容。

这里就简单写一下 Docusaurus 的配置和使用。

Github https://github.com/facebook/docusaurus


## 环境准备
- Node.js
- Yarn
- npx
- npm


## 安装

先创建 Docusarus 这个项目

使用 npm 安装：

```
npx @docusaurus/init@latest init my-website classic
```

其中 `my-website` 是你项目或文档名称，`classic` 是 Docusaurus 默认模板名称。

安装完成后会生成一个 `my-website` 的目录，这个 `my-website` 目录相当于就是一个前端项目，其中就包含了 `node_modules`、`.gitignore`、`package.json`、`package-lock.json`、`README.md`。

## 运行和编译

进入项目目录后可以输入：

```
yarn start
```
或者用 npm 运行：

```
npm start
```
运行项目。

Docusaurus 运行成功后会启动一个本地服务器，访问 `localhost:3000` 即可访问页面，上面有文档、博客、还有 github 链接，切换暗黑和白天模式

如果更改了内容，页面也会自动刷新。

编译为静态页面：

```bash
npm run build
```

编译完成后会在项目根目录生成一个 `build` 目录，页面文件就在 `build` 目录中，你可以把 `build` 目录中的内容上传到服务器或 Github Pages。

Docusaurus 还能自动生成 sitemap 文件，不过在不配置的情况下生成的 Docusaurus 文件是无法使用的。

## 项目结构

这个项目，大体的结构是：
```
my-website
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── package.json
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock
```
`/blog/` - 里面就是写博客文章的，都是 markdown 文件。
`/docs/` - 里面就是写文档的，也都是 markdown 文件。
`/src/` - 源代码文件夹，里面有一个 css 文件夹，然后它里边有个 custom.css 里面是写自定义的 css 代码的。
`/src/pages` - 里边放一些自定义的页面，使用 react 语法来写。
`/static/` - 放静态资源文件，这些文件会出现在最后打包出来的静态网站里面，在它的根目录下边，它下边的 img 文件夹是放静态图片的。
`/docusaurus.config.js` - 这个是配置这个站点的。
`/package.json` - node.js 的工程配置文件。
`/sidebar.js` - 配置文档页面侧边栏，只有文档页面才有，用它来定义文档的目录结构。
另外呢，也可以自己创建一个 theme 文件夹，里边可以定义一些组件用来替换默认主题里面的一些组件。
## 单博客模式
docusaurus 默认是文档风格的主页，要是把它改成一个博客形式的，需要做一点点的配置。打开它的配置文件，docusaurus.config.js 。把 presets 这个配置改成如下所示：
```
presets: [
  [
    "@docusaurus/preset-classic",
    {
      // docs: {
      //   sidebarPath: require.resolve('./sidebars.js'),
      //   editUrl:
      //     'https://github.com/facebook/docusaurus/edit/master/website/',
      // },
      blog: {
        path: "./blog",
        routeBasePath: "/"
      }
      // 省略其它代码
    }
  ]
];
```
如果不用文档的话，就把 `docs` 这个删除或者注释了，然后加上 blog ，里边添加：

`path` 属性，它的值为”./blog”，也就是指向 blog 的文件夹。
`routeBasePath` 属性，这个是访问这个博客的路径，设置成/斜杠就是默认网站的首页。
然后把` src/pages` 下边` index.js` 的改成别的名字或者是给删除，这样的话他就不会同时匹配这两个文件了。

顶部导航的 docs 如果要去掉的话，可以找到 navBar 这个配置项，把 links 中的有关 docs 的这段删掉：
```
{ to: "docs/doc1", label: "Docs", position: "left" }
```
## 发表第一篇博客
写博客就是在 blog 里边创建一个 markdown 文件。标题开始部分是一个日期格式。Docusaurus 会自动把这个日期解析成咱们这个博客的发表日期，后边跟着这个文件的名字，可以起个有意义的，比如说是博客的标题的英文，例如项目里的 Welcome 博客：

2019-05-30-welcome.md

文件，里面第一段就是配置这个博客的一些基本信息：
```
---
id: welcome
title: Welcome
author: Yangshun Tay
author_title: Front End Engineer @ Facebook
author_url: https://github.com/yangshun
author_image_url: https://avatars0.githubusercontent.com/u/1315101?s=400&v=4
tags: [facebook, hello, docusaurus]
---
```
- `id` - 访问这个博客的 URL。
- `title` - 标题。
- `author` - 作者。
- `author_title` - 就是作者简短的自我介绍，职位之类的。
- `author_image_url` - 头像。
- `tags` - 博客标签, 是个数组形式。
如果文章太长只想展示一部分的话，可以加上：
```
<!--truncate-->
```
这个注释就可以了，它会把它后边的内容隐藏，然后显示一个阅读更多链接。

`id` 是用来配置侧边栏的。`title` 就是文章标题，会显示在侧边栏。

## 侧边栏配置

编写完文档后是不会出现在页面中的，需要先配置侧边栏。

在项目根目录有一个 `sidebars.js`，这就是侧边栏的配置文件。

配置文件的格式如下：

```
module.exports = {
  someSidebar: ['doc1', 'doc2', 'doc3'],
};
```

其中 `someSidebar` 数组中的内容就是 Markdown 文件开头的 ID。

下面是 3 个 Markdown 文件的 ID 和标题：

```
---
id: doc1
title: Style Guide
---
---
id: doc2
title: Document Number 2
---
---
id: doc3
title: This is Document Number 3
---
```


侧边栏的标题就是 Markdown 文件开头 `title` 后面的内容。

也可以配置多级侧边栏，如下：

```
module.exports = {
  someSidebar: [
    'install',
    {
      组件: ['button', 'table'],
    },
  ],
};
```
其中的 `install`、`button`、`table` 都是文件 ID。

下面是 3 个文件的 ID 和标题：

`install.md`：

```markdown
---
id: install
title: 安装
---
```

`button.md`：

```markdown
---
id: button
title: 按钮
---
```

`table.md`：

```markdown
---
id: table
title: 表格
---
```


## 配置站点信息

在项目根目录有一个 `docusaurus.config.js`，这就是站点配置文件，可以配置站点信息、页头、页脚。

### 站点信息

站点信息的部分：

```
module.exports = {
  title: 'My Site',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook',
  projectName: 'docusaurus',
};
```

下面是配置项说明：

- `title`：站点标题，显示在浏览器标签页。
- `tagline`：网站简介，显示在 `meta` 标签，可以给搜索结果提供摘要。
- `url`：网站域名，用于生成 sitemap 文件。
- `baseUrl`：资源文件的路劲。
- `favicon`：站点图标的位置，站点图标会显示在标签页标题的前面。
- `organizationName`：公司或组织名称。
- `projectName`：项目名称。

### 页头配置

还是在 `docusaurus.config.js` 中的 `module.exports` 对象中配置：

```javascript
module.exports = {
  themeConfig: {
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/install/',
          activeBasePath: 'docs/',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  },
};
```

`navbar` 中的内容就是页头配置，下面是一些配置项说明：

- `title`：页头的标题。
- `logo.alt`：页头 Logo 的描述，相当于 `img` 的 `alt`。
- `logo.src`：页头 Logo 的图片地址。

`links`中的内容是页头导航链接配置，下面是配置项说明：

- `to`：路由链接的跳转地址，地址就是 `docs` 目录中的文件名，不需要加 `md`。
- `activeBasePath`：设置要处于选中状态的路劲，如果设置为 `docs`，只要访问 `docs` 目录中的页面，设置了 `docs` 的链接样式就是选中状态。
- `label`：链接标签中的文字内容。
- `position`：链接定位，`left` 居左，`right` 居右。
- `href`：链接跳转地址，相当于 `a` 的 `href`，一般用于外部链接跳转。

`href` 设置的地址是不能无刷新跳转的，只有 `to` 才能无刷新跳转，但是 `to` 只能设置内容链接，而且需要使用相对路劲。

### 页脚配置

页脚配置也是在 `docusaurus.config.js` 的 `module.exports`对象中。

下面是页脚配置：

```javascript
module.exports = {
  themeConfig: {
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/install/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
};
```

`footer` 和 上面的 `navbar` 一样都是写在 `themeConfig` 中。

`links` 中的数组是链接组，一个链接组中可以包含多个链接。链接的属性还是和页头的链接属性是一样的，只是没有 `position`。

`copyright` 是页脚的版权信息。

### 首页配置

在项目目录中有一个 `src` 目录，`src` 目录中又有一个 `pages` 目录，`pages` 目录中的 `index.js` 就是首页文件。

在 `index.js`中有一个 `features` 数组，数组中的内容就是首页的项目描述。

`features`数组内容：

```javascript
const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: <>Powered by React</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];
```

可以根据上面的内容修改 图片 URL、标题、描述文本，也可以增加或删除一组描述内容。

要更改元素结构或属性可以在 `index.js` 中的 `Feature` 函数中更改。