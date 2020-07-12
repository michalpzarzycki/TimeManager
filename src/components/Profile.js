
import React, { useEffect } from 'react';
import styles from './Profile.module.css'
import { withRouter } from 'react-router-dom';
import firebase, { db } from '../firebase/firebase'

 function Profile() {
     useEffect(() => {
         console.log("AUTH", db.collection('users').where('email', '==', firebase.auth().currentUser.email).get())
     } ,[])
    return(
        <div className={styles.mainDiv}>
            <div className={styles.background}></div>
            <section className={styles.photoSection}>
                <div className={styles.picture}></div>
                <div className={styles.name}>Selena Gomez</div>
            </section>
            <section className={styles.infoSection}>
                <div className={styles.infoSectionBox}>
                <div>Email: <span className={styles.infoSpanDetail}>selena.gomez@wp.pl</span></div>
                <div>Imie: <span className={styles.infoSpanDetail}>selena.gomez@wp.pl</span></div>
                <div>Nazwisko: <span className={styles.infoSpanDetail}>selena.gomez@wp.pl</span></div>
                <div>Nickname: <span className={styles.infoSpanDetail}>selena.gomez@wp.pl</span></div>
                <div>Nr tel: <span className={styles.infoSpanDetail}>selena.gomez@wp.pl</span></div>
                <div>Miejscowosc: <span className={styles.infoSpanDetail}>selena.gomez@wp.pl</span></div>
                <div>Kraj: <span className={styles.infoSpanDetail}>selena.gomez@wp.pl</span></div>
                <div>Opis: <span className={styles.infoSpanDetail}>selena.gomez@wp.pl</span></div>
                <div>Ilosc zrobionych taskow: <span className={styles.infoSpanDetail}>selena.gomez@wp.pl</span></div>
                <div>Znajomi: <span className={styles.infoSpanDetail}>selena.gomez@wp.pl</span></div>
                </div>
            </section>
            <section className={styles.restSection}></section>
        </div>
    )
}


export default withRouter(Profile)