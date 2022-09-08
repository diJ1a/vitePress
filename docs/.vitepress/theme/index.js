import DefaultTheme from 'vitepress/theme'
import './styles/style.css'
import common from '../../src/components/common.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    console.log('Vue版本',app.version)
    app.component('commonCom', common)
  }
}