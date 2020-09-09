import React, { useState, useEffect } from 'react';
import styles from './Conversation.module.css';
import MessegePopup from './MessegePopup';
import firebase, { db } from '../../firebase/firebase';
import ConversationWindow from './ConversationWindow';
import inboxService from '../../services/inboxService';

export default function Conversation({ conversation, setOpenConversationPopup, convId, handleClick }: any) {
    let [currentUserEmail, setCurrentUserEmail] = useState<any>(firebase.auth().currentUser.email)

    useEffect(() => {
        let email = conversation.users.filter((otherUserEmail: any) => otherUserEmail !== currentUserEmail)[0]
        inboxService.getUserImgWithEmail(email).then(url => {
            let elem1 = document.getElementById('convPhoto') as HTMLElement
            elem1.style.backgroundImage = `url(${url})`
        })
    }, [])

    return (<>
        <div className={styles.mainContainer} onClick={() => {
            handleClick(conversation)
            
            setOpenConversationPopup(true)
            console.log(conversation)
            }}>
            <div className={styles.photo} id="convPhoto"></div>
            <div className={styles.lastMessege}>{conversation.messages[conversation.messages.length - 1].message}</div>
        </div>
    </>

    )
}