<template>
  <div>
    <h1 @click="btn">{{ msg }}</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const msg = ref(10)

const btn = () => {
  msg.value++
}

// import axios from 'axios'
// axios
//   .get('http://139.159.245.209:5000/api/WeatherForecast/get')
//   .then(function (response) {
//     // handle success
//     console.log(response)
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error)
//   })
//   .then(function () {
//     // always executed
//   })
</script>
