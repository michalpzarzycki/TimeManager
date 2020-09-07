import React from 'react';
import styles from './AddNote.module.css'

export default function AddNote({handleSubmit, handleChange}: any) {
    return(
        <section className={styles.addNoteSection}>
            <form className={styles.addNoteForm} onSubmit={handleSubmit}>
                <input className={styles.addNoteInput} placeholder="Your note..." type="text" name="note" onChange={handleChange}/>
                <button className={styles.addNoteReminder}>Add reminder</button>
                <button type="submit" className={styles.addNoteSubmit}>Add Note</button>
            </form>
        </section>
    )
}