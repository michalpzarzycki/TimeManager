import React from 'react';
import styles from './Route1.module.css'


export default function Route1() {
    return <div className={styles.route1Container}>
        <section className={styles.route1Charts}>
            <div className={styles.route1ChartFirst}>FIRST CHART</div>
            <div className={styles.route1ChartSecond}>SECOND CHART</div>
            <div className={styles.route1ChartThird}>THIRD CHART</div>
        </section>
        <section className={styles.route1TasksNav}>
            <div className={styles.route1TasksNav_searchDiv}>SEARCH</div>
            <div className={styles.route1TasksNav_createDiv}>CREATE</div>
        </section>
        <section className={styles.route1TasksSection}>TASK SECTION</section>
    </div>
} 