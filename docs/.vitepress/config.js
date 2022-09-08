export default {
  // Default: /
  base: '/',
  // https://vitepress.vuejs.org/
  // 首页title
  title: 'Vite',
  // 其他页title
  titleTemplate: 'Vite & Vue powered static site generator',
  // <meta name="description" content="Just playing around.">
  description: 'Just playing around.',
  // 最后更新时间
  lastUpdated: true,
  markdown: {
    // 显示第几行代码
    // lineNumbers: true
  },
  themeConfig: {
    siteTitle: 'Vite 官方中文文档',
    logo: '/logo.svg',
    // 导航
    nav: [
      { text: '首页', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: '博客', link: '/articles/' },
      { text: 'Element Plus', link: '/guide/element' },
      { text: 'gitee', link: 'https://github.com/diJ1a' }
    ],
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/diJ1a' },
      { icon: 'twitter', link: '...' },
      { icon: 'facebook', link: '...' },
      { icon: 'instagram', link: '...' }
    ],
    // 侧边栏
    sidebar: {
      '/articles/': [
        {
          text: '组件库源码实现',
          collapsible: true,
          items: [
            {
              text: '配置 Vite',
              link: '/articles/'
            },
            {
              text: '组件库环境搭建',
              link: '/articles/组件库环境搭建'
            },
            { text: 'gulp的使用', link: '/articles/gulp的使用' }
          ]
        },
        {
          text: 'vue教程',
          collapsible: true,
          items: [
            {
              text: 'pina和vuex',
              link: '/articles/pina和vuex'
            }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          collapsible: true,
          items: [
            {
              text: 'useData',
              link: '/api/'
            }
          ]
        }
      ]
    },
    // footer
    footer: {
      copyright: 'Copyright © 2019-present Evan You'
    },
    // 修改文档链接
    editLink: {
      pattern: 'https://github.com/diJ1a',
      text: 'Edit this page on GitHub'
    }
  }
}
