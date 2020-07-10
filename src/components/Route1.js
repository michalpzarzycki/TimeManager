import React from 'react';
import styles from './Route1.module.css'
import SecondChart from './charts/SecondChart';
import ThirdChart from './charts/ThirdChart';
import FirstChart from './charts/FirstChart';


export default function Route1() {
    return <div className={styles.route1Container}>
        <section className={styles.route1Charts}>
            <div className={styles.route1ChartFirst}><FirstChart /></div>
            <div className={styles.route1ChartSecond}><SecondChart /></div>
            <div className={styles.route1ChartThird}><ThirdChart /></div>
        </section>
        <section className={styles.route1TasksNav}>
            <div className={styles.route1TasksNav_searchDiv}>
                <span>
                <input name="search" type="search" placeholder="Search Task" autoComplete="off" className={styles.route1TasksNav_searchDiv_input}/>
                </span>
            </div>
            <div className={styles.route1TasksNav_createDiv}>
                <button className={styles.route1TasksNav_createDiv_button}>Create Task</button>
            </div>
        </section>
        <section className={styles.route1TasksSection}>TASK SECTION</section>
    </div>
} 