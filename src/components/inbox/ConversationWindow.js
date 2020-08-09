import React, { useEffect, useState } from 'react';
import styles from './ConversationWindow.module.css'
import firebase, { db } from '../../firebase/firebase';
import { formatDistanceToNow } from 'date-fns';
import { animateScroll } from "react-scroll";



export default function ConversationWindow({conversation, setOpenConversationPopup, openConversationPopup}) {
    let [newMessege, setNewMessege] = useState({})

    useEffect(() => {
        scrollToBottom()
    })
    useEffect(() => {
        // db.collection('conversations').doc('SoeqbxLBTpo5JEcORI1d').update({
        //     messeges: [{author:"ja", messege:"hej", date: Date.now()}, {author:"ty", messege:"co jest", date: Date.now()}]
        // })

        console.log("NOWA", conversation)
        scrollToBottom()
    }, [openConversationPopup])
   

    function scrollToBottom() {
        animateScroll.scrollToBottom({
          containerId: "container"
        });
    }
    function handleChange(event) {
        setNewMessege({[event.target.name]: event.target.value})
    }
    function handleSubmit(event) {
        event.preventDefault()
        let nuevo = { ...newMessege, author: firebase.auth().currentUser.email, date: Date.now()}

     
                db.collection('conversations').doc(conversation.id).update({
                    messages: [...conversation.messages, nuevo]
                }).then(() => {
                    console.log("UDALO SIE a nie bylo")
                }) 
        
            }
        
        
    
    return(
        <div className={openConversationPopup ? styles.conversationWindow : styles.none}>
        <div className={styles.mainDiv}>
            <div className={styles.exit} onClick={() =>setOpenConversationPopup(false) }></div>
    <div id="container" className={styles.conversationWindow}>{conversation && conversation.messages.map(message => {
        console.log("MESSEGE!!!", conversation)
        return (
            <div className={firebase.auth().currentUser.email === message.author ? styles.isCurrentUser : styles.messege}>
                <div className={styles.messegeContainer}>
               <div className={styles.author}> </div>
               <div className={styles.text}>
                  <div className={styles.textMessege}>{message.message}</div>
                  <div className={styles.date}>{formatDistanceToNow(message.date)}</div>
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