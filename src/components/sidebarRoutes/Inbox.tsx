import React, { useState, useEffect } from 'react';
import styles from './Inbox.module.css'
import InboxMesseges from '../inbox/InboxMesseges';
import SearchUserPopup from '../inbox/SearchUserPopup';
import inboxService from '../../services/inboxService'
import ConversationWindow from '../inbox/ConversationWindow';
import {db} from '../../firebase/firebase'
import { connect } from 'react-redux';
import {DARK_INBOX, LIGHT_INBOX} from '../../variables'
const {darkBackground, darkColor} = DARK_INBOX;
const {lightBackground, lightColor} = LIGHT_INBOX

function Inbox({darkMode}: any) {
    let [openConversationPopup, setOpenConversationPopup] = useState(false)
    let [allUserConversations, setAllUserConversations] = useState<any>('')
    let [isUserSearch, setIsUserSearch] = useState(false)
    let [allUsers, setAllUsers] = useState<any>([])
    let [conversation, setConversation] = useState<any>('')
    let [convId, setConvId] = useState<any>('')
    //Create a user Inbox 
    let newInbox = new inboxService()
    useEffect(() => {
        //Download all user Conversation
        newInbox.getUserConversationsSnapshot(setAllUserConversations)
        //Download all users info
        newInbox.getAllUsersSnapshot()
            .then((users: any) => setAllUsers([...users]))
    }, [])
    useEffect(() => {

    }, [allUserConversations])
   function handleClick(conv: any) {
      setConversation(conv)
      
   }
    return (
        <div className={styles.inboxContainer} style={{background: darkMode ? darkBackground : lightBackground}}>
            <button onClick={() => setIsUserSearch(!isUserSearch)} className={styles.btn}>SEARCH USER</button>
            <SearchUserPopup
                conversation={conversation}
                allUserConversations={allUserConversations}
                isUserSearch={isUserSearch}
                allUsers={allUsers}
                setIsUserSearch={setIsUserSearch}
                handleClick={() => {}}
                newInbox={newInbox}
                setOpenConversationPopup={setOpenConversationPopup}
                openConversationPopup={openConversationPopup}
            />
            <InboxMesseges
                conversation={conversation}
                allUsers={allUsers}
                openConversationPopup={openConversationPopup}
                setOpenConversationPopup={setOpenConversationPopup}
                allUserConversations={allUserConversations}
                convId={convId}
                handleClick={handleClick}
            />
            {/* Optional ConversationWindowP
            {openConversationPopup && <ConversationWindow setOpenConversationPopup={setOpenConversationPopup} openConversationPopup={openConversationPopup} 
            convId={convId} conversation={conversation}/>} */}
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        darkMode: state.darkmode
    }
}

export default connect(mapStateToProps)(Inbox)



// function handleClick(email: any) {
//     return new Promise((resolve, reject) => {
//         //Search if that conv already exists
//         let filter = allUserConversations.filter((conv: any) => conv.users.includes(email))
//         console.log("FILTER", filter)
//         //If that conv doesnt exist, create a new one
//         if (filter.length === 0) {
//             //Create new Conversation and return its docRef
//             newInbox.createNewConversation(email).then((docRef: any) => {
//                 setAllUserConversations([...allUserConversations])
        
//                 let filter = allUserConversations.filter((conv: any) => conv.users.includes(email))
//                 console.log("FILTER2", filter)
//                 db.collection('messages').doc(`${docRef.id}`).set({
//                   messages: [{
//                         user:'admin',
//                         message: 'You can start conversation now.',
//                         date: Date.now()
//                    }]
//                 })
//                 setConversation([...filter])
//                 setConvId(docRef.id)
//                 resolve()
//             })
           
//         } else {
//             //if conv exists, just set it up to state
//             setConvId(filter[0].id)
//             setConversation([...filter])
//             resolve()
//         }
//         db.collection('messages').doc(convId).onSnapshot((snapshot: any) => {
//             let arr: any[]= []
//             snapshot.forEach((doc: any) => {
//                 arr.push(doc.data)
//             });
//             setConversation([arr])
//         })
//     })



// }