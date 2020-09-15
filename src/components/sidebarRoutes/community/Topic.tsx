import React, { useEffect } from 'react';
import {withRouter, Link} from 'react-router-dom'
import styles from './Topic.module.css'

function Topic({match, history, topic}: any) {
    useEffect(() => {
        console.log("HISTORY", history)
        console.log("MATCH", match.params)
    }, [topic])
    const { path } = match

    return(
        <Link to={`${match.url}/${topic.id}`}  className={styles.mainDiv}>
            
                <div className={styles.topicDiv}>
                    <div className={styles.topicTitle}>{topic.title}</div>
                    <div className={styles.topicInfo}>przez {topic.user}, 27 minut temu</div>
                </div>
                <div className={styles.lastReplyDiv}>
                    <div className={styles.replyImg}><span className={styles.img}>IMG</span></div>
                    <div className={styles.replyInfo}>
                        <div className={styles.replyUser}>{topic.user}</div>
                        <div className={styles.replyTime}>{topic.date}</div>
                    </div>
                </div>
        </Link>

    )
}

export default withRouter(Topic)