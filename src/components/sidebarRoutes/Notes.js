import React, { useState } from 'react';
import styles from './Notes.module.css'
import FirstChart from '../charts/FirstChart';
import SecondChart from '../charts/SecondChart';
import ThirdChart from '../charts/ThirdChart';
import {db} from '../../firebase/firebase'

export default function Notes() {
    const [note, setNote] = useState({})
    function handleChange(event) {
        setNote({...note, [event.target.name]:event.target.value, date: Date.now()})
    }
    function handleSubmit(event) {
        event.preventDefault()
        db.collection('notes').add({note}).then(() => {
            console.log("Note added")
        }).catch(err => {
            console.log("note error", err)
        })
    }
    return(
        <div className={styles.notesContainer}>
            <section className={styles.addNoteSection}>
                <form className={styles.addNoteForm} onSubmit={handleSubmit}>
                    <input className={styles.addNoteInput} placeholder="Your note..." type="text" name="note" onChange={handleChange}/>
                    <button className={styles.addNoteReminder}>Add reminder</button>
                    <button className={styles.addNoteSubmit}>Add Note</button>
                </form>
            </section>
            <section className={styles.myNotesSection}>
                <div className={styles.filters}>FILTERS</div>
                <div className={styles.notesList}>
                    <div className={styles.note}>MY NOTE`</div>
                    <div className={styles.note}>MY NOTE`</div>
                    <div className={styles.note}>MY NOTE`</div>
                    <div className={styles.note}>MY NOTE`</div>
                </div>
            </section>
            <section className={styles.chartsSection}>
                <FirstChart />
                <SecondChart />
                <ThirdChart />
            </section>
        </div>
    )
}