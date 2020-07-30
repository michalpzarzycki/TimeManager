import React, { useState, useEffect } from 'react';
import styles from './Notes.module.css'
import FirstChart from '../charts/FirstChart';
import SecondChart from '../charts/SecondChart';
import ThirdChart from '../charts/ThirdChart';
import {db} from '../../firebase/firebase'
import uniqid from 'uniqid'


export default function Notes({user}) {
    const [notes, setNotes] = useState([])
    const [note, setNote] = useState({})
    const [uniqueId, setUniqueId] = useState(uniqid())
    useEffect(() => {
      
        db.collection('notes').where('userId', '==', user.uid).onSnapshot(snapshot => {
            let arr = []
            snapshot.forEach(doc => arr.push(doc.data()))
            setNotes([...arr])
        
        })
        console.log("SUCCES", notes)
    }, [])
    function handleChange(event) {
        setNote({...note, [event.target.name]:event.target.value, date: Date.now()})
    }
    function handleSubmit(event) {
        event.preventDefault()
        setUniqueId(uniqid())
        let fullNote = {
            ...note, noteId: uniqueId, userId: user.uid 
        }
        console.log("FULL NOTE", fullNote)
        db.collection('notes').add({...fullNote}).then(() => {
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
             {notes.map(doc => {
                 console.log("NOTES", notes, user)
                 return <div>{doc.note}</div>
             })}
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