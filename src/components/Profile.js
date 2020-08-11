
import React, { useState, useEffect } from 'react';
import styles from './Profile.module.css'
import { withRouter } from 'react-router-dom';
import firebase, { db, storage } from '../firebase/firebase'
import Loader from './Loader';

 function Profile({user}) {
     let [userEmail, setUserEmail] = useState('')
     let [openPopup, setOpenPopup] = useState(false)
     let [isNew, setIsNewPic] = useState(false)
     let [userData, setUserData] = useState({})
     let [allowToChange, setAllowToChange] = useState(false)
     let [isChanged, setIsChanged] = useState(false)
     let [isPictureLoaded, setIsPictureLoaded] = useState(false)
     useEffect(() => {
         if(user) {
        db.collection('users').where('email', '==', user.email).get().then((doc) => {
            doc.forEach(doc => {
                
                setUserData({...doc.data(), docId: doc.id})})
        }).catch(err => console.log("ERR", err))
  
    }
        

        //  console.log("AUTH", db.collection('users').where('email', '==', firebase.auth().currentUser.email).get())
     } ,[isNew])
     useEffect(() =>{

        if(user) {
            setIsPictureLoaded(true)
            storage.ref().child(`profiles/${user.email}.jpg`).getDownloadURL().then((url) => {
                
                document.getElementById('picturePopup').style.backgroundImage=`url(${url})`
                document.getElementById('mainPicture').style.backgroundImage=`url(${url})`

            }).catch(err => console.log("ERROR", err))
        }
     }, [])
     function handlePictureChange() {
        setOpenPopup(true)
     }
     function handleFile(event) {
        console.log("filr", event.target.files[0])
        let file = event.target.files[0]
        storage.ref().child(`profiles/${user.email}.jpg`).put(file)
        .on('state_changed',
            function progress(snapshot) {
                let percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100
                console.log("%%%", percentage)
                document.getElementById('uploader').value = percentage
            },
            function error() {

            },
            function complete() {
                setIsNewPic(!isNew)

            }
        )
       
   
    }

    function handelDoubleClick(e) {
        e.target.readOnly=false
        document.getElementById(e.target.name).style.display = 'block'
    }

    function handleEdit() {
        db.collection('users').doc(userData.docId).update({
            ...userData
        }).then(() => {
            console.log("UPDATED")
        }).catch(err => console.log(err))
    }

    function handleChange(e) {
        setIsChanged(true)
        setUserData({...userData, [e.target.name]: e.target.value })
    }
    return(
        <div className={styles.mainDiv}>
            <div className={openPopup ? styles.popup : styles.none}>
                <section className={styles.pictureSectionPopup}>
                <div className={styles.exit} onClick={() => setOpenPopup(false)}>
                  
                </div>
               {isPictureLoaded ?  <div id="picturePopup" className={styles.picturePopup}></div> : <div className={styles.loader}><Loader /></div>}
                </section>
                <section className={styles.inputSectionPopup}>
                    <div className={styles.inputDivInput}>
                        <input type="file" onChange={handleFile}/>
                    </div>
                    <div className={styles.inputDivLoader}>
                        <progress className={styles.progress} value="0" max="100" id="uploader">0%</progress>
                    </div>
                </section>
            </div>
            <div className={styles.background}></div>
            <section className={styles.photoSection}>
                <div className={styles.picture} id="mainPicture"></div>
                <div className={styles.name}>Selena Gomez</div>
                <button onClick={handlePictureChange} style={{cursor:"pointer"}}>CHANGE PROFILE PICTURE</button>
            </section>
            <section className={styles.infoSection}>
                <div className={styles.infoSectionBox}>
                <div>Email: <span className={styles.infoSpanDetail}>{userData.email}</span></div>
                <div>Imie: <span className={styles.infoSpanDetail}>{userData.name}</span></div>
                <div>Nazwisko: <span className={styles.infoSpanDetail}>{userData.surname}</span></div>
                <div>Nickname: 
                     <input name='nickname'
                            className={styles.infoSpanDetail} 
                            value={userData.nickname} 
                            readOnly 
                            onDoubleClick={event => handelDoubleClick(event)}
                            onChange = {(event) => handleChange(event)}
                            style={{background:'transparent', outline:"none", border:"0px", display:"inline-block", width:"auto"}}
                            />
                    <span id='nickname' 
                            onClick={e => handleEdit(e)} 
                            className={styles.noneEdit}
                    ></span></div>
                <div>Nr tel: 
                    <input name='telephone' 
                            className={styles.infoSpanDetail} 
                            value={userData.telephone} 
                            readOnly 
                            onDoubleClick={event => handelDoubleClick(event)}
                            onChange = {(event) => handleChange(event)}
                            style={{background:'transparent', outline:"none", border:"0px", display:"inline-block", width:"auto"}}
                            />
                    <span id='telephone' 
                            onClick={e => handleEdit(e)}  
                            className={styles.noneEdit}
                            ></span></div>
                <div>Miejscowosc:
                    <input name='city' 
                            className={styles.infoSpanDetail} 
                            value={userData.city} 
                            readOnly 
                            onDoubleClick={event => handelDoubleClick(event)}
                            onChange = {(event) => handleChange(event)}
                            style={{background:'transparent', outline:"none", border:"0px", display:"inline-block", width:"auto"}}
                            />
                    <span id='city' 
                            onClick={e => handleEdit(e)} 
                            className={styles.noneEdit}
                            ></span></div>
                <div>Kraj: 
                    <input name='city' 
                            className={styles.infoSpanDetail} 
                            value={userData.country} 
                            readOnly 
                            onDoubleClick={event => handelDoubleClick(event)}
                            onChange = {(event) => handleChange(event)}
                            style={{background:'transparent', outline:"none", border:"0px", display:"inline-block", width:"auto"}}
                            />
                    <span id='city'
                            onClick={e => handleEdit(e)}
                            className={styles.noneEdit}
                            ></span></div>
                <div>Opis: 
                    <input name='description' 
                            className={styles.infoSpanDetail} 
                            value={userData.description} 
                            readOnly 
                            onDoubleClick={event => handelDoubleClick(event)}
                            onChange = {(event) => handleChange(event)}
                            style={{background:'transparent', outline:"none", border:"0px", display:"inline-block", width:"auto"}}
                            />
                    <span id='description' 
                            onClick={e => handleEdit(e)} 
                            className={styles.noneEdit}
                            ></span>
                    </div>
                {isChanged && <button onClick={handleEdit}>SUBMIT CHANGES</button>}
                </div>
            </section>
            <section className={styles.restSection}></section>
        </div>
    )
}


export default withRouter(Profile)