---
title: XHR
---
<script setup>
import { onMounted } from 'vue'
// fetch('http://139.159.245.209:5000/api/WeatherForecast/get')
//   .then((response) => {
//     return response.json()
//   }).then((json) => {
//     console.log('parsed json', json)
//     console.log('jsonData', json.data)
//   }).catch((ex) => {
//     console.log('parsing failed', ex)
//   })

// fetch需要在 onMounted 中调用
onMounted(async () => {
  const temp = await fetch('https://www.powerbeijing-ec.com/bidprocurement/common-user/user/platformConfig/initPlatformConfig')
  const res = await temp.json()
  console.log('res.data.title', res.data.title)
})
</script>

```html
构建过程是在节点环境而不是浏览器中完成的，这就是为什么没有定义fetch。

vitepress调用created钩子来生成静态html文件。
如果只想在客户端调用fetch，那么应该在mountedhook上调用它，而在构建过程中不会调用它。
```