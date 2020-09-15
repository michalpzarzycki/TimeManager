/* eslint-disable */

import React, { useEffect, useState } from 'react';
import styles from './TopicDiscuss.module.css';
import TopicReplyWindow from './TopicReplyWindow';
import communityService from '../../../services/communityService';
import { db } from '../../../firebase/firebase';
import { withRouter } from 'react-router-dom';

function TopicDiscuss({match, history}: any) {
    const [topicDiscuss, setTopicDiscuss] = useState<any>([])
    const [Id, setId] = useState<any>('')
    useEffect(() => {
        let cat = history.location.pathname.split('/').reverse()[0]
        db.collection('forum').where('id','==', cat).get().then((data: any) => {
            let arr: any[] = []
            data.forEach((element: any) => {
              arr.push(element.data()) 
              setId(element.id)
               setTopicDiscuss([...arr])
            })

        })

    }, [])
    useEffect(() => {
        console.log("DISS", topicDiscuss)
    }, [topicDiscuss])
    return(
    <div style={{width: '100%'}}>
            {topicDiscuss.length>0 && topicDiscuss[0].discuss.map((post: any) => {
                return<div className={styles.mainDiv}> 
                <div className={styles.userBox}>
                    <div className={styles.userNameBox}>Michal</div>
                    <div className={styles.pictureBox}>
                        <div className={styles.picture}>M</div>
                    </div>
                    <div className={styles.infoBox}>happy day everyone!</div>
                </div>
                <div className={styles.postBox}>
                    <div className={styles.messageBox}>
                        <div className={styles.messageDate}>Posted 5 days ago</div>
                        <div className={styles.messageContent}>{post.content}!</div>
                    </div>
                    <div className={styles.signatureBox}>
                        <div className={styles.signatureContent}>The World Is Yours</div>
                    </div>
                </div>
            </div>
        
            })}
            <TopicReplyWindow topicDiscuss={topicDiscuss} id={Id}/>
        </div>
    
    )
}

export default withRouter(TopicDiscuss)