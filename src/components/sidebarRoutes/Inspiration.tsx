import React, { useState, useEffect } from 'react'
import {db} from '../../firebase/firebase'
import styles from './Inspiration.module.css'
import inspirationService from '../../services/inspirationService'

export default function Inspiration() {
    let [count, setCount] = useState(true)
    let [inspirations, setInspirations] = useState('')

useEffect(() => {
    let count = true;
    inspirationService.getInspirationFromDatabase().then((inspirations: any) => {
    setInspirations(inspirations)
    inspirationService.setInspirationQuote('quoteContent', inspirations[0].quote)
    })
    
}, [])

    return(
        <div className={styles.inspirationContainer}>
         <section className={styles.navigationSection}></section>
         <section className={styles.quoteOfTheDaySection}>
             <div className={styles.quoteContainer}>
             <div className={styles.quoteHeader}>Quote of the day</div>
                 <div className={styles.quote}><p id="quoteContent">NEVER GIVE UP</p></div>
                 <div className={styles.author} id="quoteAuthor">"SOKRATES"</div>
             </div>
         </section>
        </div>
    )
}