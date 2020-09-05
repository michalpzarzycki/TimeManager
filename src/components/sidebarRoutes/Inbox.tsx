import React, { useState, useEffect } from 'react';
import styles from './Inbox.module.css'
import InboxMesseges from '../inbox/InboxMesseges';
import SearchUserPopup from '../inbox/SearchUserPopup';
import inboxService from '../../services/inboxService'


export default function Inbox() {
    let [openConversationPopup, setOpenConversationPopup] = useState(false)
    let [allUserConversations, setAllUserConversations] = useState<any>('')
    let [isUserSearch, setIsUserSearch] = useState(false)
    let [allUsers, setAllUsers] = useState<any>([])
    let [conversation, setConversation] = useState<any>('')
     //Create a user Inbox 
    let newInbox = new inboxService()
    useEffect(() => {
        //Download all user Conversation
        newInbox.getAllUserConversationsSnapshot()
                .then((conversations: any) => setAllUserConversations([...conversations]))
        //Download all users info
        newInbox.getAllUsersSnapshot()
                .then((users: any) =>  setAllUsers([...users]))
    }, [])
    async function handleClick(email: any) {
        //Search if that conv already exists
        let filter = allUserConversations.filter((conv: any) => conv.users.includes(email))
        //If that conv doesnt exist, create a new one
        if (filter.length === 0) {
            //Create new Conversation and return its docRef
            let newConDocRef = await newInbox.createNewConversation(email)
            setAllUserConversations([...allUserConversations])
            let filter = allUserConversations.filter((conv: any) => conv.users.includes(email))
            setConversation([...filter])
        } else {
            //if conv exists, just set it up to state
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