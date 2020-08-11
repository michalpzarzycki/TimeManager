import React, { useState, useEffect } from 'react';
import styles from './SearchUserPopup.module.css'
import ConversationWindow from './ConversationWindow';
import {storage} from '../../firebase/firebase'


export default function SearchUserPopup({isUserSearch,setIsUserSearch, allUsers, handleClick, conversation}) {
    let [openConversationPopup, setOpenConversationPopup] = useState(false)
    let [urls, setUrls] = useState('')
useEffect(() => {

    console.log("ALLPP", allUsers)
    let arr = []
    for(let i=0; i<allUsers.length; i++) {
        console.log("for", allUsers[i])
        let user = allUsers[i]
        storage.ref().child(`profiles/${user.email}.jpg`).getDownloadURL().then((url) => {
                    console.log("URL", url)
                    
                 
                   allUsers[i]['url']  = url
                 
                }).then(() => {
                   console.log("GIT")
                }).catch(err => console.log("ERROR", err))
setUrls(...arr)

    }
    // let arr = []
    // allUsers.forEach(user => {
    //     

    // })
   
})
    return(
        <div className={isUserSearch ? styles.mainDiv : styles.none}>
            <div className={styles.exit} onClick={() => setIsUserSearch(false)}></div>
            {/* <form>
                <input type="text" />
                <button type="submit">SEARCH</button>
            </form> */}
            <div>
                {allUsers && allUsers.map(user => {
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