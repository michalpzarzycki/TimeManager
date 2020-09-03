import React from 'react'
import FirstChart from './FirstChart'
import SecondChart from './SecondChart'
import ThirdChart from './ThirdChart'
import styles from './Route1Charts.module.css'

export default function Route1Charts({user} : any) {
    return(
        <section className={styles.route1Charts}>
            <div className={styles.route1ChartFirst}><FirstChart userId={user && user.uid}/></div>
            <div className={styles.route1ChartSecond}><SecondChart  userId={user && user.uid}/></div>
            <div className={styles.route1ChartThird}><ThirdChart userId={user && user.uid}/></div>
        </section>
    )
}