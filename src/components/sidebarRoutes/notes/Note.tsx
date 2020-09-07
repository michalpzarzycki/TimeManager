import React from 'react';
import styles from './Note.module.css'


export default function Note({ handlePopup, formattedDate, doc, note}: any) {
    return (
        <div className={styles.note} onClick={() => handlePopup(note)}>
            <div className={styles.date}>ADDED: {doc.date && formattedDate(doc.date)}</div>
            <div className={styles.content}><p>{doc.note}</p></div>
            {doc.reminder && <div><span className={styles.alarm}></span>: {doc.reminder && formattedDate(doc.reminder)}</div>}
        </div>
    )
}