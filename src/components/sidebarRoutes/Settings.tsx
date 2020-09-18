import React from 'react';
import styles from './Settings.module.css'
import DarkMode from './settings/DarkMode';
import MyWeatherLocation from './settings/MyWeatherLocations';
import FontFamily from './settings/FontFamily';
import { connect } from 'react-redux';
import {DARK_SETTINGS, LIGHT_SETTINGS} from '../../variables'

const {darkBackground, darkColor} = DARK_SETTINGS;
const {lightBackground, lightColor} = LIGHT_SETTINGS

function Settings({darkMode}: any) {
    return (
        <div className={styles.mainDiv}
         style={{
             backgroundColor: darkMode ? darkBackground : lightBackground,
             color: darkMode ? darkColor : lightColor,
             borderColor: darkMode ? darkColor : lightColor}}>
           <DarkMode darkColor={darkColor}/>
           <FontFamily />
           <MyWeatherLocation />
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        darkMode: state.darkmode
    }
}
export default connect(mapStateToProps)(Settings)