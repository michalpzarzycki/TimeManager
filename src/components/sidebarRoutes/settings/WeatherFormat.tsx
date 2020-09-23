import React from 'react';
import styles from './WeatherFormat.module.css';
import { defaults } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { setWeatherFormat } from '../../../redux/action';

function WeatherFormat({weatherFormat ,handleWeatherFormat}: any) {
    return(
        <div className={styles.mainDiv}>
        <h1 className={styles.header}>WEATHER FORMAT</h1>
        <div className={styles.selectBox}>
          <select onChange={handleWeatherFormat}>
              <option>KELVIN [K]</option>
              <option>CELSIUS [°C]</option>
              <option>FAHRENHEIT [°F]</option>
          </select>
        </div>
    </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        weatherFormat: state.weatherformat
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
handleWeatherFormat: (event: any) => dispatch(setWeatherFormat(event.target.value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WeatherFormat)