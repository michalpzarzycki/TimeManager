import React from 'react';
import SearchInput from '../SearchInput'
import styles from './SearchOrCreateTask.module.css'

export default function SearchOrCreateTask({handlePopup}: any) {
    return(
        <section className={styles.route1TasksNav}>
        <SearchInput />
        <div className={styles.route1TasksNav_createDiv}>
            <button onClick={handlePopup} className={styles.route1TasksNav_createDiv_button}>Create Task</button>
        </div>
    </section>
    )
}