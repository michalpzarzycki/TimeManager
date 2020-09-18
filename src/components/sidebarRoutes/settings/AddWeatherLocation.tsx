import React, {useState} from 'react';
import styles from './AddWeatherLocation.module.css'
import { db } from '../../../firebase/firebase';

export default function AddWeatherLocation({userLocations}: any) {
    const [weatherLocation, setWeatherLocation] = useState<any>('')
    function handleSubmit(event: any) {
        event.preventDefault()
        db.collection('users').doc('PvlOOLKXgcnd5RKElPea').update({
            locations: [...userLocations, weatherLocation]
        })
    }
    function handleChange(event: any) {
        setWeatherLocation(event.target.value)
    }
    return(
        <div className={styles.addLocationBox}>
        <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange}/>
            <button type="submit">ADD</button>
        </form>
    </div>
    )
}