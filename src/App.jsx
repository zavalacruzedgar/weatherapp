import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Loading from './components/Loading'
import WeatherCard from './components/WeatherCard'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()


  useEffect(() => {
    //Esta es la funcion que se ejecuta cuando llega 
    //la informacion de nuestra ubicacion
    const success = (pos) => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(obj);
    }


    //Esto hace el llamado a la api del navegador, para usar la ubicacion
    //actual
    navigator.geolocation.getCurrentPosition(success)
  
  }, [])

  console.log(coords)

  // ------------Peticion del clima ----------------------------

   useEffect(() => {
    if(coords){
    const APIKEY = '5ce7a40129b5fa44054be81892168ab1'
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
    axios.get(URL)
    .then(res => {
      const celsius = (res.data.main.temp - 273.15).toFixed(0)
      const farenheit = (celsius * 9 / 5 + 32).toFixed(0)
      setTemperature({celsius, farenheit})
      setWeather(res.data)
    })
    .catch(err => console.log(err)) 
    }

   }, [coords])
   
     console.log(weather)
  


  return (
    <div className="App">
      {
        weather ? 
      <WeatherCard weather = {weather} temperature={temperature}/>
      :
      <Loading />
}
      </div>
  )
}

export default App
