import React, { useEffect, useState } from 'react';
import styles from './ChooseWeatherLocation.module.css'
import { db } from '../../../firebase/firebase';
import { connect } from 'react-redux';
import { setWeatherLocation } from '../../../redux/action';

 function ChooseWeatherLocation({userLocations, setWeatherState}: any) {

    useEffect(()=>{
        console.log("HEH", userLocations)
    }, [userLocations])
return (
    <div className={styles.myLocationBox}>
    <select  onChange={setWeatherState}>
        {userLocations && userLocations.map((location: string) => {
            return <option value={location}>{location}</option>

        })}
    </select>
</div>
)
}
const mapStateToProps = (state: any) => {}
const mapDispatchToProps = (dispatch: any) => {
    return {
        setWeatherState: (event: any) => dispatch(setWeatherLocation(event.target.value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChooseWeatherLocation)