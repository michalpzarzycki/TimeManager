
import React, { useState, useEffect } from 'react';
import styles from './Profile.module.css'
import { withRouter } from 'react-router-dom';
import firebase, { db, storage } from '../firebase/firebase'

 function Profile() {
     let [openPopup, setOpenPopup] = useState(false)
     let [isNew, setIsNewPic] = useState(false)
     useEffect(() => {
        storage.ref().child('profiles/michal50166@wp.pl.jpg').getDownloadURL().then((url) => {
            console.log("URL", url)
            document.getElementById('picturePopup').style.backgroundImage=`url(${url})`
        }).catch(err => console.log("ERROR", err))
        //  console.log("AUTH", db.collection('users').where('email', '==', firebase.auth().currentUser.email).get())
     } ,[isNew])
     function handlePictureChange() {
        setOpenPopup(true)
     }
     function handleFile(event) {
        console.log("filr", event.target.files[0])
        let file = event.target.files[0]
        storage.ref().child('profiles/michal50166@wp.pl.jpg').put(file).then(() => {
            console.log("POSZEDL")
            setIsNewPic(!isNew)
        }).catch(
            console.log("NIE POSZEDL")
        )

    }
    return(
        <div className={styles.mainDiv}>
            <div className={openPopup ? styles.popup : styles.none}>
                <section className={styles.pictureSectionPopup}>
                <div className={styles.exit} onClick={() => setOpenPopup(false)}>
                    <span>X</span>
                </div>
                <div id="picturePopup" className={styles.picturePopup}></div>
                </section>
                <section className={styles.inputSectionPopup}>
                    <div className={styles.inputDivInput}>
                        <input type="file" onChange={handleFile}/>
                    </div>
                    <div className={styles.inputDivLoader}>
                        LOADER
                    </div>
                </section>
                <section className={styles.buttonsSectionPopup}>
                    <div className={styles.buttons}>
                        <button className={styles.confirmButton}>CONFIRM</button>
                        <button className={styles.cancelButton}>CANCEL</button>
                    </div>
                </section>
            </div>
            <div className={styles.background}></div>
            <section className={styles.photoSection}>
                <div className={styles.picture}></div>
                <div className={styles.name}>Selena Gomez</div>
                <button onClick={handlePictureChange}>CHANGE PROFILE PICTURE</button>
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