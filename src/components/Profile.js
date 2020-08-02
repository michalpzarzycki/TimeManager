
import React, { useState, useEffect } from 'react';
import styles from './Profile.module.css'
import { withRouter } from 'react-router-dom';
import firebase, { db, storage } from '../firebase/firebase'

 function Profile({user}) {
     let [userEmail, setUserEmail] = useState('')
     let [openPopup, setOpenPopup] = useState(false)
     let [isNew, setIsNewPic] = useState(false)
     let [userData, setUserData] = useState({})
     useEffect(() => {
         if(user) {
        db.collection('users').where('email', '==', user.email).get().then((doc) => {
            doc.forEach(doc => {
                console.log("DOC", doc.data())
                setUserData({...doc.data()})})
            console.log("MISSION COMPLETE")
        }).catch(err => console.log("ERR", err))
    }
        
        
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
                <div>Email: <span className={styles.infoSpanDetail}>{userData.email}</span></div>
                <div>Imie: <span className={styles.infoSpanDetail}>{userData.name}</span></div>
                <div>Nazwisko: <span className={styles.infoSpanDetail}>{userData.surname}</span></div>
                <div>Nickname: <span className={styles.infoSpanDetail}>{userData.nickname}</span></div>
                <div>Nr tel: <span className={styles.infoSpanDetail}>{userData.telephone}</span></div>
                <div>Miejscowosc: <span className={styles.infoSpanDetail}>{userData.city}</span></div>
                <div>Kraj: <span className={styles.infoSpanDetail}>{userData.country}</span></div>
                <div>Opis: <span className={styles.infoSpanDetail}>{userData.description}</span></div>
                <div>Ilosc zrobionych taskow: <span className={styles.infoSpanDetail}>NIE WIEM JESZCZE</span></div>
                <div>Znajomi: <span className={styles.infoSpanDetail}>....</span></div>
                </div>
            </section>
            <section className={styles.restSection}></section>
        </div>
    )
}


export default withRouter(Profile)