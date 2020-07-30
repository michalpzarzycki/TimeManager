import React, { useState } from 'react'
import {db} from '../../firebase/firebase'
import styles from './Inspiration.module.css'

export default function Inspiration() {
    // const [inspiration, setInspiration] = useState({})

    // function handleChange(event) {
    //     setInspiration({...inspiration, [event.target.name]: event.target.value, date:Date.now()})
    // }
    // function handleSubmit(event) {
    //     event.preventDefault()
    //     db.collection('inspirations').add({inspiration}).then(() => {
    //         console.log("Inspiration Added")
    //     }).catch(error => {
    //         console.log("Error inspirations", error)
    //     })
    // }


    return(
        <div className={styles.inspirationContainer}>
         <section className={styles.navigationSection}></section>
         <section className={styles.quoteOfTheDaySection}>
             <div className={styles.quoteHeader}>Quote of the day</div>
             <div className={styles.quoteContainer}>
                 <div className={styles.quote}><p>NEVER GIVE UP</p></div>
                 <div className={styles.author}>"SOKRATES"</div>
             </div>
         </section>
         <section className={styles.randomQuotesSection}></section>
        </div>
    )
}