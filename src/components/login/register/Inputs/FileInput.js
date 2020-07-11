import React from 'react';
import styles from './FileInput.module.css'


export default function FileInput() {
    return(
        <div className={styles.div}>
            <span className={styles.span}>
                <label className={styles.label}>
                    <span>UPLOAD PICTURE</span>
                <input type="file" className={styles.input}/>
                </label>
            </span>
        </div>
    )
}