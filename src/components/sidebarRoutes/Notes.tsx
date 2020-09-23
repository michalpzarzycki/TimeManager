import React, { useState, useEffect } from 'react';
import styles from './Notes.module.css'
import { format } from 'date-fns';
import notesService from '../../services/notesService';
import DatePicker from "react-datepicker";
import uniqid from 'uniqid'
import Note from './notes/Note';
import AddNote from './notes/AddNote';
import NoteDetailsPopup from './notes/NoteDetailsPopup';
import { connect } from 'react-redux';
import {DARK_NOTES, LIGHT_NOTES} from '../../variables'

const {darkBackground, darkColor} = DARK_NOTES;
const {lightBackground, lightColor} = LIGHT_NOTES
function Notes({ user, darkMode }: any) {
    const [notes, setNotes] = useState<any>([])
    const [note, setNote] = useState({})
    const [uniqueId, setUniqueId] = useState(uniqid())
    let [time, setTime] = useState('')
    let [isPopup, setIsPopup] = useState(false)
    let [popupNote, setPopupNote] = useState<any>({})

    useEffect(() => {
        notesService.getUserNotes(user.uid).then((notes: any) => setNotes([...notes]))
    }, [notes])

    function handleChange(event: any, name = '') {
        if (name === 'deadline') {
            let date = new Date(event)
            setNote({ ...note, 'reminder': date.getTime() })
        } else {
            setNote({ ...note, [event.target.name]: event.target.value, date: Date.now() })
        }
    }

    function handleSubmit(event: any) {
        event.preventDefault()
        setUniqueId(uniqid())
        let fullNote = {
            ...note,
            noteId: uniqueId,
            userId: user.uid
        }
        notesService.addNewNote(fullNote)
    }
    function formattedDate(miliseconds: any) {
        let num = Number(miliseconds)
        let date = new Date(num)
        let day = date.getDay()
        let month = date.getMonth()
        let year = date.getFullYear()
        return format(new Date(miliseconds), 'do MMMM yyyy HH:mm')
    }
    function handlePopup(doc: any): void {
        setPopupNote({ ...doc })
        setIsPopup(true)
    }
    return (
        <div className={styles.notesContainer} style={{backgroundColor: darkMode ? darkBackground : lightBackground}}>
            <AddNote
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <section className={styles.myNotesSection}>
                <NoteDetailsPopup
                    isPopup={isPopup}
                    setIsPopup={setIsPopup}
                    popupNote={popupNote}
                />
                <div className={styles.notesList}>
                    {notes.map((doc: any) => (
                        <Note
                            handlePopup={handlePopup}
                            doc={doc}
                            formattedDate={formattedDate}
                            note={note}
                        />))}
                </div>
            </section>
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        darkMode: state.darkmode,
        notesReminder: state.notesreminder
    }
}
export default connect(mapStateToProps)(Notes)

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