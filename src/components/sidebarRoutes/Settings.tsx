import React from 'react';
import styles from './Settings.module.css'
import DarkMode from './settings/DarkMode';
import MyWeatherLocation from './settings/MyWeatherLocations';
import FontFamily from './settings/FontFamily';

export default function Settings() {
    return (
        <div className={styles.mainDiv}>
           <DarkMode />
           <FontFamily />
           <MyWeatherLocation />
        </div>
    )
}