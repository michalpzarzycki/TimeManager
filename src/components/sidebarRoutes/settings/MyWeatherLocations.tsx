import React, { useState, useEffect } from 'react';
import styles from './MyWeatherLocation.module.css';
import { connect } from 'react-redux';
import { setWeatherLocation } from '../../../redux/action';
import AddWeatherLocation from './AddWeatherLocation';
import ChooseWeatherLocation from './ChooseWeatherLocation'
import { db } from '../../../firebase/firebase';

 function MyWeatherLocation({ location, handleChange }: any) {
    const [userLocations, setUserLocations] = useState<any>()
    useEffect(() => {
        db.collection('users').where('email','==', 'michal50166@wp.pl').get().then((snapshot: any) => {
            let arr: any[] = []
            snapshot.forEach((element: any) => {
               arr.push(element.data())
          });
          if(arr[0]) {
            setUserLocations(arr[0].locations)

          }
        })
    }, [])
    return(
        <div className={styles.mainDiv}>
            <h1 className={styles.header}>Weather Locations</h1>
            <ChooseWeatherLocation userLocations={userLocations}/>
            {/* <div className={styles.myLocationBox}>
                <select  onChange={handleChange}>
                    <option value="newyork">Nowy York</option>
                    <option value="sanfrancisco">San Francisco</option>
                    <option value="tokyo">Tokyo</option>
                    <option value="berlin">Berlin</option>
                </select>
            </div> */}
            <AddWeatherLocation userLocations={userLocations}/>
            {/* <div className={styles.addLocationBox}>
                <form className={styles.form}>
                    <input type="text"/>
                    <button>ADD</button>
                </form>
            </div> */}
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