import React, { useEffect, useState } from 'react';
import styles from './TopicReplyWindow.module.css';
import firebase, { db } from '../../../firebase/firebase'
import { withRouter } from 'react-router-dom';
 function TopicReplyWindow({history, topicDiscuss, id}: any) {
    const [reply, setReply] = useState<any>({
        date:'',
        user:firebase.auth().currentUser.email,
        content:''
    })


    function handleChange(event: any) {
        setReply({...reply, [event.target.name]: event.target.value})
    }
    function handleSubmit(event: any) {
        event.preventDefault()
        setReply({...reply, date: Date.now()})
        let oldReply = topicDiscuss[0].discuss
        oldReply = [...oldReply, reply]
        console.log("OLD", oldReply)
        db.collection('forum').doc(`${id}`).update({
            discuss: oldReply
        })

    }
    return(
        <div className={styles.mainDiv}>
            <form className={styles.formBox} onSubmit={handleSubmit}>
                <div className={styles.replyInputBox}>
                    <textarea className={styles.textarea} name='content' onChange={handleChange}></textarea>
                </div>
                <div className={styles.buttonBox}>
                    <button type='submit' className={styles.button }>SEND REPLY</button>
                </div>
            </form>
        </div>
    )
}
export default withRouter(TopicReplyWindow)