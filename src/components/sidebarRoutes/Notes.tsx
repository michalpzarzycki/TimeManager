import React, { useState, useEffect } from 'react';
import styles from './Notes.module.css'
import FirstChart from '../charts/FirstChart';
import SecondChart from '../charts/SecondChart';
import ThirdChart from '../charts/ThirdChart';
import {db} from '../../firebase/firebase'
import { format } from 'date-fns';
import DatePicker from "react-datepicker";
import uniqid from 'uniqid'


export default function Notes({user}: any) {
    const [notes, setNotes] = useState<any>([])
    const [note, setNote] = useState({})
    const [uniqueId, setUniqueId] = useState(uniqid())
    let [time, setTime] = useState('')
    let [isPopup, setIsPopup] = useState(false)
    let [popupNote, setPopupNote] = useState<any>({})

    useEffect(() => {
      
        db.collection('notes').where('userId', '==', user.uid).onSnapshot(snapshot => {
            let arr: any[] = []
            snapshot.forEach(doc => arr.push(doc.data()))
            setNotes([...arr])
        
        })
    }, [])





    
function handleChange(event: any, name='') {
            if(name==='deadline') {
                let x = new Date(event)
    
                setNote({...note, 'reminder':x.getTime()})
            } else {
                setNote({...note, [event.target.name]:event.target.value, date: Date.now()})
            }
      
            
}
    
    function handleSubmit(event: any) {
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
    function formattedDate(miliseconds: any) {
        let num = Number(miliseconds)
        let x = new Date(num)
        let d = x.getDay()
        let m = x.getMonth()
        let y = x.getFullYear()
        return format(new Date(miliseconds), 'do MMMM yyyy HH:mm')
    }
    function handlePopup(doc: any): void {
        setPopupNote(doc)
        setIsPopup(true)
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
                <div className={isPopup ? styles.noteDetails : styles.none}>
                    <div className={styles.exit} onClick={() => setIsPopup(false)}>X</div>
                        <div>
                             <div>NOTE: {popupNote && popupNote.note}</div>
                             <div>NOTE: {}</div>
                             <div>NOTE: {}</div>
                        </div>
                    {/* <form>
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
                    </form> */}
                </div>
                <div className={styles.notesList}>
             {notes.map((doc: any) => {
                 console.log("NOTES", notes, user)
                 return <div className={styles.note} onClick={() => handlePopup(note)}>
                     <div className={styles.date}>ADDED: {doc.date && formattedDate(doc.date)}</div>
                     <div className={styles.content}><p>{doc.note}</p></div>
                     {doc.reminder && <div><span className={styles.alarm}></span>: {doc.reminder && formattedDate(doc.reminder)}</div>}
                 </div>
             })}
                </div>
            </section>
            <section className={styles.chartsSection}>
       
            </section>
        </div>
    )
}