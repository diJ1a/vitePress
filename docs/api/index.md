# API Reference

VitePress offers several built in API to let you access app data. VitePress also comes with few built-in component that can be used globally.

The helper methods are globally importable from `vitepress` and are typically used in custom theme Vue components. However, they are also usable inside `.md` pages because markdown files are compiled into Vue single-file components.

Methods that start with `use*` indicates that it is a [Vue 3 Composition API](https://vuejs.org/guide/introduction.html#composition-api) function that can only be used inside `setup()` or `<script setup>`.

<!-- ![123](/logo.svg) -->
<!-- <img src="/logo.svg" style="width:100px;height:100px;float:right;" /> -->

## `useData`

<script setup>
import useData from '/.vitepress/theme/components/useData.vue'
</script>

::: tip Custom Title
<useData />
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::

``` ts{1-2,5-6}
interface VitePressData {
  site: Ref<SiteData>
  page: Ref<PageData>
  theme: Ref<any> // themeConfig from .vitepress/config.js
  frontmatter: Ref<PageData['frontmatter']>
  lang: Ref<string>
  title: Ref<string>
  description: Ref<string>
  localePath: Ref<string>
}
```
<!-- Table of Contents/目录 -->
<!-- [[toc]] -->

**Example:**
```vue
<script setup>
import { useData } from 'vitepress'

const { theme } = useData()
</script>

<template>
  <h1>{{ theme.footer.copyright }}</h1>
</template>
```


## common component
<commonCom />