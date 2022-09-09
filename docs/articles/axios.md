```js
import axios from 'axios'
axios.get('http://139.159.245.209:5000/api/WeatherForecast/get')
  .then(function (response) {
    // handle success
    console.log(response)
    ElMessage({
      message: response.data.message,
      type: 'warning'
    })
  })
  .catch(function (error) {
    // handle error
    // console.log(error)
    ElMessage({
      message: 'errorerrorerrorerrorerrorerror',
      type: 'warning'
    })
  })
  .then(function () {
    // always executed
  })
```
