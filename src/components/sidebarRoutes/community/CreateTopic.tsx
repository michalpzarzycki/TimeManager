import React, { useState, useEffect } from 'react';
import communityService from '../../../services/communityService'
import styles from './CreateTopic.module.css'
import firebase from '../../../firebase/firebase'
import { withRouter } from 'react-router-dom';
import uuid from 'uniqid'
function CreateTopic({history}: any) {
    const [newPost, setNewPost] = useState<any>({
                    discuss: [
                        {user: firebase.auth().currentUser.email,
                         date: Date.now(),
                         content:""}],
                    id: uuid(), 
                    category: history.location.pathname.split('/').reverse()[1],
                    title:""    })
    const [user, setUser] = useState<any>('')
    useEffect(() => {
  
    }, [])
  
    

    function handleChange(event: any) {
        if(event.target.name === 'title') {
            setNewPost({...newPost, [event.target.name]: event.target.value})
        }
        if(event.target.name === 'content') {
            
            setNewPost({...newPost, discuss: [{user: firebase.auth().currentUser.email,
                date: Date.now(),
                content:event.target.value}] })
        }
    }
    function handleSubmit(event: any) {
        setNewPost({...newPost, id: uuid()})
        event.preventDefault()   
        communityService.createForumPost(newPost)
        
    }
    return(
        <div className={styles.mainDiv}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.cretorBox}>
                    <div className={styles.createTitle}>
                        <label>Title</label>
                        <input type="text" name="title" className={styles.title} onChange={handleChange}/>
                    </div>
                    <div className={styles.createPost}>
                        <label>Post</label>
                        <textarea className={styles.post} name="content" onChange={handleChange}></textarea>
                    </div>
                </div>
                <div className={styles.submitBox}>
                    <button type="submit">Create Topic</button>
                </div>
            </form>
        </div>
    )
}

export default withRouter(CreateTopic)