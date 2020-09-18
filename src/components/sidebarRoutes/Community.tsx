import React, { useState, useEffect } from 'react';
import Messege from '../taskslist/Messege'
import ShoutBox from '../sidebarRoutes/community/ShoutBox'
import Forum from '../sidebarRoutes/community/Forum'
import styles from './Community.module.css';
import firebase, {db} from '../../firebase/firebase'
import communityService from '../../services/communityService'
import { connect } from 'react-redux';
import {DARK_COMMUNITY, LIGHT_COMMUNITY} from '../../variables'
const {darkBackground, darkColor} = DARK_COMMUNITY;
const {lightBackground, lightColor} = LIGHT_COMMUNITY
interface IMessage {
    user: any,
    message?: any,
    date?: any
}
function Community({userId, userEmail, darkMode} : any) {
    const [messegesContainer, setMessage] = useState<IMessage>({'user': userId})
    const [messeges, setMesseges] = useState<any>([])
    const [toggleShoutBox, setToggleShoutBox] = useState(false)
    const [loading, setLoading] = useState<boolean>(true)
    let arr: any[]= []
    useEffect(() => {    
        communityService.getShoutBoxSnapshot(setMesseges)
        setLoading(false)

    },[])
    function handleChange(event : any) {
        setMessage({...messegesContainer, [event.target.name]:event.target.value, date: Date.now()})
    }

    function handleSubmit(e: any) {
        e.preventDefault()
        communityService.sendMessageToShoutBox(messegesContainer)
    }
    return(
        <div className={styles.communityContainer} style={{backgroundColor: darkMode ? darkBackground : lightBackground}}>
                <button className={styles.shoutBoxButton} onClick={() => setToggleShoutBox(!toggleShoutBox)}>SHOUTBOX</button>
                <ShoutBox handleChange={handleChange} handleSubmit={handleSubmit} messeges={messeges} toggleShoutBox={toggleShoutBox}/>
            <section className={styles.forumSection}>
                <Forum />
            </section>
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        darkMode: state.darkmode
    }
}
export default connect(mapStateToProps)(Community)