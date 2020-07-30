import React, { useState, useEffect } from 'react'
import {db} from '../../firebase/firebase'
import styles from './Inspiration.module.css'

export default function Inspiration() {
    let [count, setCount] = useState(true)
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
useEffect(() => {
    let count = true;
       let interval = setInterval(()=>{
            count = !count
            console.log("COUNT", count)
            document.querySelector(`#random1`).style.transform = count ? 'translate(-200%,0)': "translate(100%, 0)"
        }, 10000)
    
 return () => {
    clearInterval(interval)
    
 }
    
}, [])

    return(
        <div className={styles.inspirationContainer}>
         <section className={styles.navigationSection}></section>
         <section className={styles.quoteOfTheDaySection}>
             <div className={styles.quoteContainer}>
             <div className={styles.quoteHeader}>Quote of the day</div>
                 <div className={styles.quote}><p>NEVER GIVE UP</p></div>
                 <div className={styles.author}>"SOKRATES"</div>
             </div>
         </section>
         <section className={styles.randomQuotesSection}>
             <div className={styles.one} id="random1"></div>
             <div className={styles.two} id="random2"></div>
         </section>
        </div>
    )
}