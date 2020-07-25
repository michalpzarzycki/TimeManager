import React, { useEffect, useState } from 'react';
import styles from './ConversationWindow.module.css'
import firebase, { db } from '../../firebase/firebase';
import { formatDistanceToNow } from 'date-fns';
import { animateScroll } from "react-scroll";



export default function ConversationWindow({conversation, setOpenConversationPopup, openConversationPopup}) {
    let [newMessege, setNewMessege] = useState({})
    // useEffect(() => {
    //     console.log("KOC", conversation)
    // },[conversation])
    useEffect(() => {
        scrollToBottom()
        console.log("OPEN WW", openConversationPopup)
    })
    useEffect(() => {
        // db.collection('conversations').doc('SoeqbxLBTpo5JEcORI1d').update({
        //     messeges: [{author:"ja", messege:"hej", date: Date.now()}, {author:"ty", messege:"co jest", date: Date.now()}]
        // })

        console.log('idid', conversation)
        scrollToBottom()
    }, [conversation])
    useEffect(() => {

        console.log("KLUCZ DO SZCZESCIA",[ newMessege])
    }, [newMessege])

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
      
            // setNewMessege([...conversation.messeges, nuevo])
            db.collection('conversations').doc('SoeqbxLBTpo5JEcORI1d').update({
                messeges: [...conversation.messeges, nuevo]
            }).then(() => {
                console.log("UDALO SIE")
            })
        
    }
    return(
        <div className={openConversationPopup ? styles.conversationWindow : styles.none}>
        <div className={styles.mainDiv}>
            <div className={styles.exit} onClick={() =>setOpenConversationPopup(false) }></div>
    <div id="container" className={styles.conversationWindow}>{conversation && conversation.messeges.map(messege => {
        return (
            <div className={firebase.auth().currentUser.email === messege.author ? styles.isCurrentUser : styles.messege}>
                <div className={styles.messegeContainer}>
               <div className={styles.author}> </div>
               <div className={styles.text}>
                  <div className={styles.textMessege}>{messege.messege}</div>
                  <div className={styles.date}>{formatDistanceToNow(messege.date)}</div>
               </div>
               
               </div>
            </div>
        )
    })}
    </div>
        <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" placeholder="Messege..." onChange={handleChange} name="messege" autoComplete="off"/>
        <button type="submit">SEND</button>
    </form>
    </div>
    </div>
    
    )
}