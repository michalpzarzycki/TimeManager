import React, { useState, useEffect } from 'react';
import styles from './Conversation.module.css';
import MessegePopup from './MessegePopup';
import firebase, { db } from '../../firebase/firebase';
import ConversationWindow from './ConversationWindow';
import inboxService from '../../services/inboxService';

export default function Conversation({conversation} : any) {
    let [isPopup, setIsPopup] = useState(false)
    let [openConversationPopup, setOpenConversationPopup] = useState(false)
    let [currentUserEmail, setCurrentUserEmail] = useState<any>(firebase.auth().currentUser.email)
    let [messages, setMessages] = useState('')
  
useEffect(() => {
    
    let email = conversation.users.filter((otherUserEmail : any) => otherUserEmail!==currentUserEmail)[0]
    inboxService.getUserImgWithEmail(email).then(url => {
        let elem1 = document.getElementById('convPhoto') as HTMLElement
        elem1.style.backgroundImage = `url(${url})`
    })
    inboxService.getMessages(conversation.id, setMessages).then((arr: any) => {
            //if there is no messages doc
            if(!arr.length) {
                db.collection('messages').doc(conversation.id).set([{
                    message:'You can start conversation',
                    user: 'Welcome message',
                    date: Date.now()
                }])
            }
        
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
        <ConversationWindow conversationId = {conversation.id} setOpenConversationPopup={setOpenConversationPopup} openConversationPopup={openConversationPopup} />
        </>
    )
}