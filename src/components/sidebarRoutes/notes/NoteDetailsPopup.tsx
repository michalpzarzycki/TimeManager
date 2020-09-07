import React from 'react';
import styles from './NoteDetailsPopup.module.css'

export default function NoteDetailsPopup({isPopup, setIsPopup, popupNote}: any) {
    return(
        <div className={isPopup ? styles.noteDetails : styles.none}>
                <div className={styles.exit} onClick={() => setIsPopup(false)}>X</div>
                    <div>
                            <div>NOTE: {popupNote && popupNote.note}</div>
                            <div>NOTE: {}</div>
                            <div>NOTE: {}</div>
                    </div>
            </div>
    )
}