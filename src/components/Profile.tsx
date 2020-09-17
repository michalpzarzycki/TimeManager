
import React, { useState, useEffect } from 'react';
import styles from './Profile.module.css'
import { withRouter } from 'react-router-dom';
import  { db, storage } from '../firebase/firebase'
import ChangePicturePopup from './sidebarRoutes/profile/ChangePicturePopup';
import PhotoSection from './sidebarRoutes/profile/PhotoSection';
import ChangeUserDataField from './sidebarRoutes/profile/ChangeUserDataField';
import profileService from '../services/profileService';
import UserDataField from './sidebarRoutes/profile/UserDataField';

 function Profile({user} : any) {
     const [openPopup, setOpenPopup] = useState(false)
     const [isNew, setIsNewPic] = useState(false)
     const [userData, setUserData] = useState<any>({})
     const [isChanged, setIsChanged] = useState(false)
     const [isPictureLoaded, setIsPictureLoaded] = useState(false)
     const [allChangebleFields] = useState<any>([
        {label: 'Nickname', inputName: 'nickname', inputValue: userData.nickname, spanId: 'nickname'},
        {label: 'Telephone', inputName: 'telephone', inputValue: userData.telephone, spanId: 'telephone'},
        {label: 'Miejscowosc', inputName: 'city', inputValue: userData.city, spanId: 'city'},
        {label: 'Country', inputName: 'country', inputValue: userData.country, spanId: 'country'},
        {label: 'Description', inputName: 'description', inputValue: userData.description, spanId: 'description'}
     ])
     useEffect(() => {
         if(user) {
             profileService.getUserData(user.email).then((data: any) => setUserData({...data}))
    }
     } ,[isNew])
     useEffect(() =>{

        if(user) {
            setIsPictureLoaded(true)
            storage.ref().child(`profiles/${user.email}.jpg`).getDownloadURL().then((url : any) => {
                let elem1 : any = document.getElementById('picturePopup');
                elem1.style.backgroundImage=`url(${url})`
                let elem2 : any = document.getElementById('mainPicture')
                elem2.style.backgroundImage=`url(${url})`

            }).catch(err => console.log("ERROR", err))
        }
     }, [])
     const handlePictureChange = () => setOpenPopup(true)
     
     const handleFile = (event : any) => profileService.uploadPictureSnapshot(user.email, event.target.files[0], () => {}, (error: any) => console.log(error), () => setIsNewPic(!isNew))
      
            // function progress(snapshot) {
            //     let percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100
            //     let elem1 : any=  document.getElementById('uploader')
            //     elem1.value = percentage
            // },
    

    function handelDoubleClick(e : any) {
        e.target.readOnly=false
        let elem1 : any= document.getElementById(e.target.name)
        elem1.style.display = 'block'
    }

    const handleEdit = () => profileService.updateUserData(userData)
    

    function handleChange(e : any) {
        setIsChanged(true)
        setUserData({...userData, [e.target.name]: e.target.value })
    }
    return(
        <div className={styles.mainDiv}>
            <ChangePicturePopup
                 openPopup={openPopup} 
                 isPictureLoaded={isPictureLoaded} 
                 setOpenPopup={setOpenPopup} 
                 handleFile={handleFile}
            />
            <PhotoSection handlePictureChange={handlePictureChange} />
            <section className={styles.infoSection}>
                <div className={styles.infoSectionBox}>
                    <UserDataField userData={userData} />
                    {allChangebleFields.map(({label, inputName, inputValue, spanId}: any) => (
                    <ChangeUserDataField 
                        label={label} 
                        inputName={inputName} 
                        inputValue={inputValue} 
                        handelDoubleClick={handelDoubleClick} 
                        handleChange={handleChange} 
                        handleEdit={handleEdit} 
                        spanId={spanId}/>
                    ))}
                {isChanged && <button onClick={handleEdit}>SUBMIT CHANGES</button>}
                </div>
            </section>
        </div>
    )
}
export default withRouter(Profile)