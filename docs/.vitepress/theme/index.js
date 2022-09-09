// 默认主题
import DefaultTheme from 'vitepress/theme'
// 个人样式主题
import './styles/style.css'
// 公共组件
import common from './components/common.vue'

// 引入 Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入 @element-plus/icons-vue
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // console.log('Vue版本',app.version)
    // 公共组件祖册
    app.component('commonCom', common)

    // 完整引入
    app.use(ElementPlus)

    // 引入icon
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  }
}