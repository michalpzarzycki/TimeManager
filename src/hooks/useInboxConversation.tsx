import { useState, useEffect } from 'react';


export function useInboxConversation(allUserConversations: any, createNewConversation: any, getCreatedConversation: any, getAllUsersSnapshot: any) {
    const [currentConversation, setCurrentConversation] = useState<any>('')
const [openConversationPopup, setOpenConversationPopup] = useState(false)
const [users, getAllUsers] = useState([])
    

    users.forEach((user: any) => {
        let filtered = allUserConversations.filter((conv: any) => conv.users.includes(user.email))
        //if there is another user email, it means that conversation exists so open it
        if(filtered.length>0) {
            //otworz okno z konwersacja
            //setCurrentConv
            setCurrentConversation({...filtered[0]})
            setOpenConversationPopup(true)
            
        } else {
            //if there is no email, yu have to create conversation first 
            createNewConversation(user.email).then((docRef: any) => {
                getCreatedConversation(docRef).then((doc: any) => {
                    setCurrentConversation({...doc[0]})
                    setOpenConversationPopup(true)
                })

            })
            //stworz konwersacje
            //otworz okno 
        }
    });  
    return {currentConversation, openConversationPopup, users}
  }