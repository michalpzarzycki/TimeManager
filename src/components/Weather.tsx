import React, { useEffect, useState } from 'react';
import weatherService from '../services/weatherService'
import styles from './Weather.module.css'

interface IWeather  {
    city: string,
    temp: any, 
    icon: string
}
export default function Weather() {
    const [weather, setWeather] = useState<IWeather>({temp:'', city:'', icon:''})
    useEffect(() => {
            weatherService.getWeather().then((data: any) => {
                setWeather({city:data.name, icon:data.weather[0].icon, temp: data.main.temp})
            })
    }, [])
    useEffect(()=>{
        let iconElem = document.querySelector('#icon') as HTMLElement
        iconElem.style.backgroundImage = `url(http://openweathermap.org/img/w/${weather.icon}.png)`
    }, [weather])

    return(
        
            <div className={styles.mainDiv}>
                <div id='temp' className={styles.temp}>{weather.temp && (Math.round(weather.temp-273.15))}°C </div>
                 <div id='city' className={styles.city}>{weather.city && weather.city}</div>
                <div id='icon' className={styles.icon}>{}</div>
            </div>
    )
}