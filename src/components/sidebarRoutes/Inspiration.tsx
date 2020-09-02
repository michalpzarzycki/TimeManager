import React, { useState, useEffect } from 'react'
import {db} from '../../firebase/firebase'
import styles from './Inspiration.module.css'

export default function Inspiration() {
    let [count, setCount] = useState(true)
    let [inspirations, setInspirations] = useState('')

useEffect(() => {
    let count = true;
    let arr: any = []
    db.collection('inspirations').get().then(snapshot => {
      
        snapshot.forEach(doc => arr.push(doc.data()))
        console.log("Quotes", arr)
        let elem1: any = document.getElementById('quoteContent')
        elem1.textContent = arr[0].quote
        setInspirations(arr)
    })
        let num = 0
        let num1 = 1
       let interval = setInterval(()=>{
            count = !count
            console.log("COUNT", count)
            let elemRandom1: any =  document.getElementById('random1')
            elemRandom1.textContent = arr[num%5].quote
            if(num1 !=1)  {
                let elemRandom2: any = document.getElementById('random2')
                elemRandom2.textContent = arr[num1%5].quote
            }
            elemRandom1.style.transform = count ? 'translate(-200%,0)': "translate(100%, 0)"
            num++
            num1++
        }, 3000)
    
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
                 <div className={styles.quote}><p id="quoteContent">NEVER GIVE UP</p></div>
                 <div className={styles.author} id="quoteAuthor">"SOKRATES"</div>
             </div>
         </section>
         <section className={styles.randomQuotesSection}>
             <div className={styles.one} id="random1"></div>
             <div className={styles.two} id="random2"></div>
         </section>
        </div>
    )
}