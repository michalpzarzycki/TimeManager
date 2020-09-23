import React, { useState, useEffect } from 'react'
import {db} from '../../firebase/firebase'
import styles from './Inspiration.module.css'
import inspirationService from '../../services/inspirationService'
import { connect } from 'react-redux'
import {DARK_INSPIRATIONS, LIGHT_INSPIRATIONS} from '../../variables'
const {darkBackground, darkColor} = DARK_INSPIRATIONS;
const {lightBackground, lightColor} = LIGHT_INSPIRATIONS;

function Inspiration({darkMode}: any) {
    let [count, setCount] = useState(true)
    let [inspirations, setInspirations] = useState('')

useEffect(() => {
    inspirationService.getInspirationFromDatabase()
                      .then((inspirations: any) => {
                            setInspirations(inspirations)
                            if(inspirations[0]) {
                                inspirationService.setInspirationQuote('quoteContent', inspirations[0].quote)
                            }
                            
                        })
}, [])

    return(
        <div className={styles.inspirationContainer} style={{backgroundColor: darkMode ? darkBackground : lightBackground}}>
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
const mapStateToProps = (state: any) => {
    return {
        darkMode: state.darkmode
    }
}
export default connect(mapStateToProps)(Inspiration)