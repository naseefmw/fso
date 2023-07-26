import { useEffect, useState } from 'react'
import weatherService from '../services/weather.js'
const Weather = ({ city }) => {
    const weatherModel = {
        temp: '',
        icon: '03d',
        wind: ''
    }
    const [weatherData, setWeatherData] = useState(weatherModel)
    useEffect(() => {
        weatherService.getWeather(city).then(weather => {
            const w = {
                temp: weather.main.temp,
                icon: weather.weather[0].icon,
                wind: weather.wind.speed
            }
            setWeatherData(w)
            console.log(w)
        })
    }, [])
    return (
        <div>
            <h3>Weather in {city}</h3>
            temperature {weatherData.temp} Celcius <br />
            <img src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt='weather icon' /> <br />
            wind {weatherData.wind} m/s
        </div>
    )

}

export default Weather