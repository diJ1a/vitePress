<script>
fetch('http://139.159.245.209:5000/api/WeatherForecast/get')
  .then((response) => {
    return response.json()
  }).then((json) => {
    console.log('parsed json', json)
    console.log('jsonData', json.data)
  }).catch((ex) => {
    console.log('parsing failed', ex)
  })

</script>