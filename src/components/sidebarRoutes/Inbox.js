import React, {useState, useEffect} from 'react';
import styles from './Inbox.module.css'
import InboxMesseges from '../inbox/InboxMesseges';
import SearchUserPopup from '../inbox/SearchUserPopup';

import firebase, { db } from '../../firebase/firebase';


export default function Inbox() {
    let [openConversationPopup, setOpenConversationPopup] = useState(false)
    let [allUserConversations, setAllUserConversations] = useState('')
    let [isUserSearch, setIsUserSearch] = useState(false)
    let [allUsers, setAllUsers] = useState('')
    let [conversation, setConversation] = useState('')
    useEffect(() => {

        db.collection('conversations').where('users', 'array-contains', firebase.auth().currentUser.email).onSnapshot(snapshot => {
            let arr = []
            snapshot.forEach(doc => arr.push(doc.data()))
            setAllUserConversations([...arr])
        })
        db.collection('users').onSnapshot(snapshot => {
            let arr = []
            snapshot.forEach(doc => {
                let all = {...doc.data(), id:doc.id}
                arr.push(all)

            })
            setAllUsers([...arr])
        })
        }, [])
function handleClick(email) {

    console.log(email)
    let filter = allUserConversations.filter(conv => conv.users.includes(email))
    console.log("FILTER", filter)
    if(filter.length===0) {
        db.collection('conversations').add({
            id:'',
            messages:[
                {
                    author: 'admin',
                    date: Date.now(),
                    message: 'You can start conversation'
                }
            ],
            users:[email, firebase.auth().currentUser.email]  
        }).then((docRef) => {
            console.log("SUCCESS", docRef.get().then(snapshot=>{
                let arr = []
                arr.push({...snapshot.data(), id: snapshot.id})
                setConversation(...arr)

            }))
        }).catch(err => {
            console.log("BLAD", err)
        })
        
    } else {
        setConversation(...filter)
    }
    

}
    return( 
        <div className={styles.inboxContainer}>
            <button onClick={() => setIsUserSearch(!isUserSearch)}>SEARCH USER</button>
            <SearchUserPopup 
                    conversation={conversation}
                    allUserConversations={allUserConversations}
                    isUserSearch={isUserSearch}
                    allUsers={allUsers}
                    handleClick={handleClick}
                    />
            <InboxMesseges 
                    allUsers={allUsers} 
                    openConversationPopup={openConversationPopup}
                    setOpenConversationPopup={setOpenConversationPopup}
                    allUserConversations={allUserConversations}
                    />
        </div>
    )
}