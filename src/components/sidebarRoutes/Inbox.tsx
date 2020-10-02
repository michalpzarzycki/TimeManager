import React, { useState, useEffect } from 'react';
import styles from './Inbox.module.css'
import InboxMesseges from '../inbox/InboxMesseges';
import SearchUserPopup from '../inbox/SearchUserPopup';
import inboxService from '../../services/inboxService'
import ConversationWindow from '../inbox/ConversationWindow';
import {db} from '../../firebase/firebase'
import { connect } from 'react-redux';
import {DARK_INBOX, LIGHT_INBOX} from '../../variables'
import { useInboxConversation } from '../../hooks/useInboxConversation';

const {darkBackground, darkColor} = DARK_INBOX;
const {lightBackground, lightColor} = LIGHT_INBOX

function Inbox({darkMode}: any) {
    let [allUserConversations, setAllUserConversations] = useState<any>('')
    let [isUserSearch, setIsUserSearch] = useState(false)
    let [conversation, setConversation] = useState<any>('')
    let [convId, setConvId] = useState<any>('')
    const [users, setUsers] = useState<any>([])
    
    //Create a user Inbox 
    let newInbox = new inboxService()
 
        //Download all user Conversation
        useEffect(() => {
            newInbox.getUserConversationsSnapshot(setAllUserConversations)
             newInbox.getAllUsersSnapshot()
            .then((users: any) => setUsers(users))
            .catch((err: any) => console.log('NIE MA ZDJECIA'))
        }, [])
        //Download all users info
        // newInbox.getAllUsersSnapshot()
        //     .then((users: any) => {
     
        //     })
 
    const { currentConversation, openConversationPopup } = useInboxConversation(allUserConversations, newInbox.createNewConversation, newInbox.getCreatedConversation, newInbox.getAllUsersSnapshot)

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
                allUsers={users}
                setIsUserSearch={setIsUserSearch}
                handleClick={() => {}}
                newInbox={newInbox}
                openConversationPopup={openConversationPopup}
                currentConversation={currentConversation}
            />
            <InboxMesseges
                conversation={conversation}
                allUsers={users}
                openConversationPopup={openConversationPopup}
                setOpenConversationPopup={{}}
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