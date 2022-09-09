<template>
  <div>
    <h1 @click="btn">{{ msg }}</h1>
  </div>
</template>

<script setup>
// import { ElMessage } from 'element-plus'
import { ref } from 'vue'
const msg = ref(10)
const btn = () => {
  msg.value++
}

</script>
