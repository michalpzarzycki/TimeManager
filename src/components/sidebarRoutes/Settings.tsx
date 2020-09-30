import React from 'react';
import styles from './Settings.module.css'
import DarkMode from './settings/DarkMode';
import MyWeatherLocation from './settings/MyWeatherLocations';
import FontFamily from './settings/FontFamily';
import { connect } from 'react-redux';
import {DARK_SETTINGS, LIGHT_SETTINGS} from '../../variables'
import FontSize from './settings/FontSize';
import Language from './settings/Language';
import TimeZone from './settings/TimeZone';
import TimeDisplay from './settings/TimeDisplay';
import WeatherFormat from './settings/WeatherFormat';

const {darkBackground, darkColor} = DARK_SETTINGS;
const {lightBackground, lightColor} = LIGHT_SETTINGS
const LANGUAGES: any = {
    pol:{
       
        settingsDarkModeHeader: "TRYB CIEMNY",
        settingFontFamilyHeader: "CZCIONKA",
        settingsFontSizeHeader: "ROZMIAR LITER",
        settingsMyWeatherLocationHeader: "MOJE LOKALIZACJE",
        settingsLanguageHeader: "WYBIERZ JEZYK",
        settingsTimeZoneHeader: "STREFA CZASOWA",
        settingsTimeDisplayHeader: "FORMAT CZASU",
        settingsWeatherFormatHeader:"JEDNOSTKA TEMPERATURY"
  
    },
    usa:{
        settingsDarkModeHeader: "DARK MODE",
        settingFontFamilyHeader: "FONT FAMILY",
        settingsFontSizeHeader: "FONT SIZE",
        settingsMyWeatherLocationHeader: "MYT LOCATIONS",
        settingsLanguageHeader: "CHOOSE LANGUAGE",
        settingsTimeZoneHeader: "TIME ZONE",
        settingsTimeDisplayHeader: "TIME FORMAT",
        settingsWeatherFormatHeader:"WEATHER FORMAT"
    }
  }
  
function Settings({darkMode, language}: any) {

    return (
        <div className={styles.mainDiv}
         style={{
             backgroundColor: darkMode ? darkBackground : lightBackground,
             color: darkMode ? darkColor : lightColor,
             borderColor: darkMode ? darkColor : lightColor}}>
           <DarkMode 
                darkColor={darkColor}
                header={language && LANGUAGES[language].settingsDarkModeHeader}/>
           <FontFamily
                header={language && LANGUAGES[language].settingFontFamilyHeader}/>
           <FontSize 
                header={language && LANGUAGES[language].settingsFontSizeHeader}/>
           <MyWeatherLocation 
                header={language && LANGUAGES[language].settingsMyWeatherLocationHeader}/>
           <Language 
                header={language && LANGUAGES[language].settingsLanguageHeader}/>
           <TimeZone 
                header={language && LANGUAGES[language].settingsTimeZoneHeader}/>
           <TimeDisplay 
                header={language && LANGUAGES[language].settingsTimeDisplayHeader}/>
           <WeatherFormat 
                header={language && LANGUAGES[language].settingsWeatherFormatHeader}/>
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        darkMode: state.darkmode,
        language: state.language
    }
}
export default connect(mapStateToProps)(Settings)