import React from 'react';
import styles from './AddExcuse.module.css';

export default function AddExcuse({handleSubmit, handleChange}: any) {
    return(
        <div className={styles.mainDiv}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h1>ADD NEW EXCUSE</h1>
                <input type="text" placeholder="Another one..." name="excuse" onChange={handleChange} />
                <button type="submit">ADD</button>
            </form>
        </div>
    )
}