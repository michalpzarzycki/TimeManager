import React, { useEffect, useState } from 'react';
import weatherService from '../services/weatherService'
import styles from './Weather.module.css'
import { connect } from 'react-redux';
import weatherlocation from '../redux/reducers/weatherlocation';

interface IWeather  {
    city: string,
    temp: any, 
}
 function Weather({choosenLocation}: any) {
    const [weather, setWeather] = useState<IWeather>({temp:'', city:''})
    useEffect(() => {
        //Get weather data
        weatherService.getWeather()
        .then((data: any) => {
            //Set state and add Icon to HTML element background
            setWeather({city:data.name, temp: data.main.temp})
            weatherService.setIcon('#icon', data.weather[0].icon)
        })
    }, [])
    return(
            <div className={styles.mainDiv}>
                <div id='temp' className={styles.temp}>{weather.temp && (Math.round(weather.temp-273.15))}°C </div>
                {/* <div id='city' className={styles.city}>{weather.city && weather.city}</div> */}
                <div id='city' className={styles.city}>{choosenLocation}</div>
                <div id='icon' className={styles.icon}>{}</div>
            </div>
           )
}
const mapStateToProps = (state: any) => {
    return {
        choosenLocation: state.weatherlocation
    }
}
export default connect(mapStateToProps)(Weather)