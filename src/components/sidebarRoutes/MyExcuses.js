import React, { useState } from 'react';
import MyExcusesChart from '../charts/MyExcusesChart'
import styles from './MyExcuses.module.css'
import {db} from '../../firebase/firebase'

export default function MyExcuses() {
    const [excuse, setExcuse] = useState({});

    function handleChange(event) {
        setExcuse({...excuse, [event.target.name]:event.target.value, date: Date.now()})
    }
function handleSubmit(event) {
    event.preventDefault()
    db.collection('excuses').add({excuse}).then(() => {
        console.log('excuse added')
    }).catch(err => {
        console.log("error excuses", err)
    })

}
 

    return(
        <div className={styles.myExcusesContainer}>
            <section className={styles.chartsSection}>
                <div><MyExcusesChart /></div>
                <form onSubmit={handleSubmit}>
                    <input type="search" placeholder="search" name="excuse" onChange={handleChange}/>
                    <button type="submit">ADD</button>
                </form>
            </section>
            <section className={styles.excusesLists}>
                <div className={styles.newest}>NEWEST</div>
                <div className={styles.top10}>TOP 10</div>
                <div className={styles.all}>ALL</div>
            </section>
        </div>
    )
}