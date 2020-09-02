import React, { useEffect, useState } from 'react';
import styles from './Weather.module.css'

const KEY = '073634a91c2b50b2af6e10147e4f385e';
interface IWeather  {
    city: any,
    temp: any, 
    icon: any
}
export default function Weather() {
    const [coords, setCoords] = useState<any>(['',''])
    const [weather, setWeather] = useState<IWeather>({city:'', temp:'', icon:''})
    useEffect(() => {
      if(navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
             setCoords([position.coords.latitude, position.coords.longitude])
             let lat = position.coords.latitude;
             let lon = position.coords.longitude
             console.log("LAT",position.coords.latitude,'LON', position.coords.longitude) 
             fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}`)
             .then(data => data.json())
             .then(data => {
                 let elem1: any = document.getElementById('icon')
                 elem1.style.backgroundImage = `url(http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png)`
                    let { main, name, weather } = data
                setWeather({
                    temp: main.temp,
                    city: name,
                    icon: weather[0].icon
                })
             })
             .catch(err => {
                 console.log("ERR", err)
             })
          })
      }
    }, [])
    return(
        
            <div className={styles.mainDiv}>
                <div id='temp' className={styles.temp}>{weather.temp && (weather.temp-273.15)}°C </div>
                <div id='city' className={styles.city}>{weather.city && weather.city}</div>
                <div id='icon' className={styles.icon}></div>
            </div>
    )
}