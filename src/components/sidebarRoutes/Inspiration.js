import React, { useState } from 'react'
import {db} from '../../firebase/firebase'
import styles from './Inspiration.module.css'

export default function Inspiration() {
    const [inspiration, setInspiration] = useState({})

    function handleChange(event) {
        setInspiration({...inspiration, [event.target.name]: event.target.value, date:Date.now()})
    }
    function handleSubmit(event) {
        event.preventDefault()
        db.collection('inspirations').add({inspiration}).then(() => {
            console.log("Inspiration Added")
        }).catch(error => {
            console.log("Error inspirations", error)
        })
    }


    return(
        <div className={styles.inspirationContainer}>
            <div className={styles.addQuote}>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Quote" name="quote" onChange={handleChange}/>
                    <input type="text" placeholder="Author" name="author" onChange={handleChange}/>
                    <button type="submit">Add</button>
                </form>

            </div>
        </div>
    )
}