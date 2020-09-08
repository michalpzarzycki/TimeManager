import React, { useState, useEffect } from 'react';
import styles from './SearchUserPopup.module.css'
import ConversationWindow from './ConversationWindow';
import {storage} from '../../firebase/firebase'
import inboxService from '../../services/inboxService';

export default function SearchUserPopup({isUserSearch,setIsUserSearch, handleClick, conversation, newInbox} : any) {
    let [openConversationPopup, setOpenConversationPopup] = useState(false)
    let [urls, setUrls] = useState<any>('')
    let [allUsers, setAllUsers] = useState<any>('')
useEffect(() => {
 //Download all users info
 newInbox.getAllUsersSnapshot()
 .then((users: any) => {
    let allUsersData = users;
     let urlArr: any[] = []
     for(let i = 0; i < users.length; i++) {
         
        inboxService.getUserPhoto(users[i].email).then((userPhoto) => {
            console.log("USER", users[i], "PHTO", userPhoto )
            urlArr.push(userPhoto)
            allUsersData[i]['url']  = userPhoto
        })
      
     }
     setAllUsers(allUsersData)
  
 })
//     let arr : any[] = []
//     for(let i=0; i<allUsers.length; i++) {
//         let user = allUsers[i]
//         storage.ref().child(`profiles/${user.email}.jpg`).getDownloadURL().then((url) => {
//                     console.log("URL", url)
                    
                 
                 
//                 }).then(() => {
//                    console.log("GIT")
//                 }).catch(err => console.log("ERROR", err))
// setUrls([...arr])

    // }
    // let arr = []
    // allUsers.forEach(user => {
    //     

    // })
   
}, [])
    return(
        <div className={isUserSearch ? styles.mainDiv : styles.none}>
            <div className={styles.exit} onClick={() => setIsUserSearch(false)}></div>
            {/* <form>
                <input type="text" />
                <button type="submit">SEARCH</button>
            </form> */}
            <div>
                {allUsers && allUsers.map((user : any) => {
                    return <div className={styles.userDiv} style={{color:'white'}} onClick={() => {
                        handleClick(user.email)
                        setOpenConversationPopup(true)
                        }} ><div className={styles.userPhotoSection} style={user.url && { backgroundImage:`url(${user.url})`}}></div>
                            <div className={styles.detailsSection}>
                            <div>Name: {user.name || 'unknown'}</div>
                            <div>Surname: {user.surname || 'unknown'}</div>
                            <div>Email {user.email}</div>
                            </div>
                         </div>
                })}
            </div>
            <ConversationWindow conversation={conversation} setOpenConversationPopup={setOpenConversationPopup} openConversationPopup={openConversationPopup}/>
        </div>
    )
}