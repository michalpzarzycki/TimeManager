import React, { useState, useEffect } from 'react';
import styles from './Inbox.module.css'
import InboxMesseges from '../inbox/InboxMesseges';
import SearchUserPopup from '../inbox/SearchUserPopup';
import firebase, { db } from '../../firebase/firebase';


export default function Inbox() {
    let [openConversationPopup, setOpenConversationPopup] = useState(false)
    let [allUserConversations, setAllUserConversations] = useState<any>('')
    let [isUserSearch, setIsUserSearch] = useState(false)
    let [allUsers, setAllUsers] = useState<any>([])
    let [conversation, setConversation] = useState<any>('')
    useEffect(() => {
        let dataRef: any = firebase.auth()
        db.collection('conversations').where('users', 'array-contains', dataRef.currentUser.email).onSnapshot(snapshot => {
            let arr: any[] = []
            snapshot.forEach(doc => arr.push(doc.data()))
            setAllUserConversations([...arr])
        })
        db.collection('users').onSnapshot(snapshot => {
            let arr: any[] = []
            snapshot.forEach(doc => {
                let all = { ...doc.data(), id: doc.id }
                arr.push(all)

            })
            setAllUsers([...arr])
        })
    }, [])
    function handleClick(email: any) {
        let filter = allUserConversations.filter((conv: any) => conv.users.includes(email))
        if (filter.length === 0) {
            let dataRef: any = firebase.auth()
            db.collection('conversations').add({
                id: '',
                messages: [
                    {
                        author: 'admin',
                        date: Date.now(),
                        message: 'You can start conversation'
                    }
                ],
                users: [email, dataRef.currentUser.email]
            }).then((docRef) => {
                console.log("SUCCESS", docRef.get().then(snapshot => {
                    let arr = []
                    arr.push({ ...snapshot.data(), id: snapshot.id })
                    setConversation([...arr])

                }))
            }).catch(err => {
                console.log("BLAD", err)
            })

        } else {
            setConversation([...filter])
        }


    }
    return (
        <div className={styles.inboxContainer}>
            <button onClick={() => setIsUserSearch(!isUserSearch)} className={styles.btn}>SEARCH USER</button>
            <SearchUserPopup
                conversation={conversation}
                allUserConversations={allUserConversations}
                isUserSearch={isUserSearch}
                allUsers={allUsers}
                setIsUserSearch={setIsUserSearch}
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