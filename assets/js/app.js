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

// async function callApi(cityname){
function callApi(cityname){
    input.value.trim()
    let apiUrl = `http://api.weatherapi.com/v1/current.json?key=688de6393621492ab54104807221005&q=${cityname}`

    // let data = await fetch(apiUrl).then(res => res.json())
    var data
    fetch(apiUrl)
        .then(function(response){
                return response.json();
                // JSON -> Javasript type
        })
        .then(function(data){
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
        })
        .catch( error => console.error(error));
}

input.addEventListener('keydown', function(e){
    if(e.code == 'Enter'){
        callApi(input.value.trim())
    }
})
