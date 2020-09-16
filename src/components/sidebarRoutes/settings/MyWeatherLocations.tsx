import React from 'react';
import styles from './MyWeatherLocation.module.css';

export default function MyWeatherLocation() {
    return(
        <div className={styles.mainDiv}>
            <h1 className={styles.header}>Weather Locations</h1>
            <div className={styles.myLocationBox}>
                <select>
                    <option>---YOUR LOCATIONS---</option>
                </select>
            </div>
            <div className={styles.addLocationBox}>
                <form className={styles.form}>
                    <input type="text" />
                    <button>ADD</button>
                </form>
            </div>
        </div>
    )
}