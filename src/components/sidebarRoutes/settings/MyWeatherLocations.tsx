import React from 'react';
import styles from './MyWeatherLocation.module.css';
import { connect } from 'react-redux';
import { setWeatherLocation } from '../../../redux/action';

 function MyWeatherLocation({ location, handleChange }: any) {
    return(
        <div className={styles.mainDiv}>
            <h1 className={styles.header}>Weather Locations</h1>
            <div className={styles.myLocationBox}>
                <select  onChange={handleChange}>
                    <option value="newyork">Nowy York</option>
                    <option value="sanfrancisco">San Francisco</option>
                    <option value="tokyo">Tokyo</option>
                    <option value="berlin">Berlin</option>

                </select>
            </div>
            <div className={styles.addLocationBox}>
                <form className={styles.form}>
                    <input type="text"/>
                    <button>ADD</button>
                </form>
            </div>
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        location: state.location
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        handleChange: (event: any) => dispatch(setWeatherLocation(event.target.value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyWeatherLocation)