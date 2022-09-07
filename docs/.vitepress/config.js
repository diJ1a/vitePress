export default {
  title: 'DJ',
  titleTemplate: 'Vite & Vue powered static site generator',
  description: 'Just playing around.',
  lastUpdated: true,
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  },
  themeConfig: {
    siteTitle: 'Vite 官方中文文档',
    logo: '/logo.svg',
    // 导航
    nav: [
      { text: '首页', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: '博客', link: '/articles/' },
      { text: 'GuideTest', link: '/guide/test' },
      { text: 'gitee', link: 'https://gitee.com/geeksdidi' }
    ],
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/geeksdidi' },
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
      ]
    },
    // footer
    footer: {
      copyright: 'Copyright © 2019-present Evan You'
    },
    // 修改文档链接
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
}
