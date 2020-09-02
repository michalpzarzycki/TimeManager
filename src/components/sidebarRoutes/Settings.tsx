import React from 'react';
import styles from './Settings.module.css'

export default function Settings() {
    return (
        <div className={styles.mainDiv}>
            <form className={styles.form}>
                <div className={styles.inputDiv}>
                    <label className={styles.label}>Font Family: </label>
                    <input className={styles.input}/>
                </div>
                <div className={styles.inputDiv}>
                    <label className={styles.label}>Dark mode: </label>
                    <input className={styles.input}/>
                </div>
                <div className={styles.inputDiv}>
                    <label className={styles.label}>Confirm Changes</label>
                    <button className={styles.input} type="submit">SUBMIT</button>
                </div>
            </form>
        </div>
    )
}