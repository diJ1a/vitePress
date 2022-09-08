<script setup>
import { useData, useRoute, useRouter } from 'vitepress'

const { site, page, theme, frontmatter, lang, title, description, localePath } = useData()
// console.log('site', site)
// console.log('page', page)
// console.log('theme', theme)
// console.log('frontmatter', frontmatter)
// console.log('title', title)
// console.log('lang', lang)
// console.log('description', description)
// console.log('localePath', localePath)

const { path, data, component } = useRoute()
console.log('path', path)
console.log('data', data)
console.log('component', component)

const router = useRouter()

console.log('router.route', router.route)
// router.route

const routerGo= () => {
  router.go('/guide/')
}
</script>

<template>
  <div @click="routerGo">{{ theme.footer.copyright }}</div>
</template>