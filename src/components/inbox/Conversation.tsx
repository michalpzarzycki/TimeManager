import React, { useState, useEffect } from 'react';
import styles from './Conversation.module.css'
import MessegePopup from './MessegePopup';
import firebase from '../../firebase/firebase'
import ConversationWindow from './ConversationWindow';
import inboxService from '../../services/inboxService'

export default function Conversation({conversation} : any) {
    let [isPopup, setIsPopup] = useState(false)
    let [openConversationPopup, setOpenConversationPopup] = useState(false)
    let [currentUserEmail, setCurrentUserEmail] = useState<any>(firebase.auth().currentUser.email)
  
useEffect(() => {
    
    let email = conversation.users.filter((otherUserEmail : any) => otherUserEmail!==currentUserEmail)[0]
    inboxService.getUserImgWithEmail(email).then(url => {
        let elem1 = document.getElementById('convPhoto') as HTMLElement
        elem1.style.backgroundImage = `url(${url})`
    })
   
}, [conversation])
    function handlePopup() {
        setIsPopup(!isPopup)
    }
    return(<>
        <div className={styles.mainContainer} onClick={() => setOpenConversationPopup(true)}>
            <div className={styles.photo} id="convPhoto"></div>
    <div className={styles.lastMessege}>{conversation.messages[conversation.messages.length-1].message}</div>
        </div>
        <ConversationWindow conversation={conversation} setOpenConversationPopup={setOpenConversationPopup} openConversationPopup={openConversationPopup}/>
        </>
    )
}