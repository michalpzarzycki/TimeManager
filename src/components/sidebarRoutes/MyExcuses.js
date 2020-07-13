import React from 'react';
import MyExcusesChart from '../charts/MyExcusesChart'
import styles from './MyExcuses.module.css'

export default function MyExcuses() {
    return(
        <div className={styles.myExcusesContainer}>
            <section className={styles.chartsSection}>
                <div><MyExcusesChart /></div>
                <div>
                   <button>ADD</button>
                    <input type="search" placeholder="search"/>
                </div>
            </section>
            <section className={styles.excusesLists}>
                <div className={styles.newest}>NEWEST</div>
                <div className={styles.top10}>TOP 10</div>
                <div className={styles.all}>ALL</div>
            </section>
        </div>
    )
}