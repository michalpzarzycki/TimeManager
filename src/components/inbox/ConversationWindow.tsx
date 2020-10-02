import React, { useEffect, useState } from 'react';
import styles from './ConversationWindow.module.css'
import firebase, { db } from '../../firebase/firebase';
import { formatDistanceToNow } from 'date-fns';
import { animateScroll } from "react-scroll";
import inboxService from '../../services/inboxService';



export default function ConversationWindow({allUserConversation, currentConversation, setOpenConversationPopup, openConversationPopup} : any) {
    let [newMessege, setNewMessege] = useState<any>({author:'', date:'', message:''})
    
    const [, forceUpdate] = React.useState<any>(0);


    useEffect(() => {

        scrollToBottom()
    }, [openConversationPopup, currentConversation,allUserConversation])


    function scrollToBottom() {
        animateScroll.scrollToBottom({
          containerId: "container"
        });
    }
    function handleChange(event : any) {
        setNewMessege({[event.target.name]: event.target.value})
    }
    function handleSubmit(event : any) {
        event.preventDefault()
        let dataRef : any = firebase.auth()
        let nuevo = { ...newMessege, author: dataRef.currentUser.email, date: Date.now()}
               db.collection('conversations').doc(currentConversation.id).update({
                   ...currentConversation, 
                    messages: [...currentConversation.messages, nuevo]
                })
                db.collection('reminders').doc('4QqnM140RmRMHTburBcu').update({
                    reminders: [{section:'inbox',where: currentConversation.id, who: dataRef.currentUser.email, when: Date.now()}]
                }) 
            }
    return(
        <div className={openConversationPopup ? styles.conversationWindow : styles.none}>
        <div className={styles.mainDiv}>
            <div className={styles.exit} onClick={() =>setOpenConversationPopup(false) }></div>
    <div id="container" className={styles.conversationDiv}>{currentConversation && currentConversation.messages.map((message: any, index: any) => {
        let dataRef : any = firebase.auth();
        return (
            <div key={index} className={dataRef.currentUser.email === message.author ? styles.isCurrentUser : styles.messege}>
                <div className={styles.messegeContainer}>
               <div className={styles.author}> </div>
               <div className={styles.text}>
                  <div className={styles.textMessege}>{message.message}</div>
                  <div className={styles.date}>{}</div>
               </div>               
               </div>
            </div> 
        )
    })}
    </div>
        <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" placeholder="Messege..." onChange={handleChange} name="message" autoComplete="off"/>
        <button type="submit">SEND</button>
    </form>
    </div>
    </div>
    )
}