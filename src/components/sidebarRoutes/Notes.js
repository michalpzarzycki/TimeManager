import React, { useState, useEffect } from 'react';
import styles from './Notes.module.css'
import FirstChart from '../charts/FirstChart';
import SecondChart from '../charts/SecondChart';
import ThirdChart from '../charts/ThirdChart';
import {db} from '../../firebase/firebase'
import { format } from 'date-fns';
import DatePicker from "react-datepicker";
import uniqid from 'uniqid'


export default function Notes({user}) {
    const [notes, setNotes] = useState([])
    const [note, setNote] = useState({})
    const [uniqueId, setUniqueId] = useState(uniqid())
    let [time, setTime] = useState('')

    useEffect(() => {
      
        db.collection('notes').where('userId', '==', user.uid).onSnapshot(snapshot => {
            let arr = []
            snapshot.forEach(doc => arr.push(doc.data()))
            setNotes([...arr])
        
        })
        console.log("SUCCES", notes)
    }, [])





    
function handleChange(event, name='') {
            if(name==='deadline') {
                let x = new Date(event)
    
                setNote({...note, 'reminder':x.getTime()})
            } else {
                setNote({...note, [event.target.name]:event.target.value, date: Date.now()})
            }
      
            
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
    function formattedDate(miliseconds) {
        let num = Number(miliseconds)
        let x = new Date(num)
        let d = x.getDay()
        let m = x.getMonth()
        let y = x.getFullYear()
        return format(new Date(miliseconds), 'do MMMM yyyy HH:mm')
    }
    return(
        <div className={styles.notesContainer}>
            <section className={styles.addNoteSection}>
                <form className={styles.addNoteForm} onSubmit={handleSubmit}>
                    <input className={styles.addNoteInput} placeholder="Your note..." type="text" name="note" onChange={handleChange}/>
                    <button className={styles.addNoteReminder}>Add reminder</button>
                    <button type="submit" className={styles.addNoteSubmit}>Add Note</button>
                </form>
            </section>
            <section className={styles.myNotesSection}>
                <div className={styles.addReminderPopup}>
                    <form>
                        <DatePicker 
                                autoComplete="off"
                                   selected={time}
                                   minDate={Date.now()}
                                //    customInput={<TextInput value={time} onChange={() => handleChange} />}
                                   name='deadline'
                                   onChange={(e) => {
                                       handleChange(e, 'deadline')
                                       let x = new Date(e)
                                       setTime(x)
                                   }}
                        />
                    </form>
                </div>
                <div className={styles.notesList}>
             {notes.map(doc => {
                 console.log("NOTES", notes, user)
                 return <div className={styles.note}>
                     <div className={styles.date}>ADDED: {formattedDate(doc.date)}</div>
                     <div className={styles.content}><p>{doc.note}</p></div>
                     {doc.reminder && <div><span className={styles.alarm}></span>: {formattedDate(doc.reminder)}</div>}
                 </div>
             })}
                </div>
            </section>
            <section className={styles.chartsSection}>
       
            </section>
        </div>
    )
}