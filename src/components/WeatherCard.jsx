import React, { useState } from 'react'

function WeatherCard({weather, temperature}) {

    const [isCelsius, setisCelsius] = useState(true)

    const changeTemperature = () => setisCelsius(!isCelsius)
 
  return (
    <article className='card'>
        <h1 className='card_title'>Weather App</h1>
        <h2 className='card_subtitle'>{`${weather?.name},${weather?.sys.country}`}</h2>
        <section className='card_first_section'>
            <img className='card_icon' src={weather ? `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` : ""} alt=""/>
        </section>
        <section className='card_second_section'>
            <h3 className='second_title'>"{weather?.weather[0].description}"</h3>
            <ul className='second_list'>
                <li className='second_item'><span className='second_span'>Wind Speed</span> {weather?.wind.speed} m/s</li>
                <li className='second_item'><span className='second_span'>Clouds</span> {weather?.clouds.all}%</li>
                <li className='second_item'><span className='second_span'>Pressure</span> {weather?.main.pressure} hPa</li>
            </ul>
 </section>
 <h2 className='card_temperature'>{isCelsius ?  `${temperature?.celsius} °C` : `${temperature?.farenheit} °F`}</h2>
 <button className='card_btn' onClick={changeTemperature}>{isCelsius ? 'Change to °F' : 'Change to °C' }</button>

    </article>
  )
}

export default WeatherCard