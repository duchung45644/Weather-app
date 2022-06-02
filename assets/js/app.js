var input = document.querySelector('input')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var time = document.querySelector('.time')
var temperature = document.querySelector('.temperature')
var itStatus = document.querySelector('.status')
var eyesight = document.querySelector('.eyesight span')
var wind = document.querySelector('.wind-speed span')
var humidity = document.querySelector('.humidity span')

var content = document.querySelector('.content')
var body = document.querySelector('body')


var hot = "linear-gradient(to top,rgba(0,0,0,0.8),rgba(0,0,0,0.5)), url('(/Day_9/assets/img/Hot/1.png') no-repeat center / cover"
var hot2 = "url('/Day_9/assets/img/Cold/3.png') no-repeat center / cover;"
async function callApi(cityname){
    input.value.trim()
    // let apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=3&appid=09272c46834a3c38eecc6b22eaa5b141`
    let apiUrl = `http://api.weatherapi.com/v1/current.json?key=688de6393621492ab54104807221005&q=${cityname}`

    let data = await fetch(apiUrl).then(res => res.json())

    console.log(data.current.condition['code'])
    console.log(data)

    city.innerText = data.location['name']
    country.innerText = data.location['country']
    time.innerText = data.location['localtime']
    temperature.innerHTML = data.current['temp_c']+' <sup>o</sup>C'
    itStatus.innerText = data.current.condition['text']
    eyesight.innerText = data.current['vis_km']
    wind.innerText = data.current['wind_kph']
    humidity.innerText = data.current['humidity']

    if(data.current['temp_c']> 20){
        content.classList.add('hotbgcard')
        body.classList.add('hotbg')
    }
    else{
        content.classList ='content'
        body.classList =''
    }
}


input.addEventListener('keydown', function(e){
    if(e.code == 'Enter'){
        callApi(input.value.trim())
    }
})
