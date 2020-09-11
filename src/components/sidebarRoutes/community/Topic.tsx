import React, { useEffect } from 'react';
import {withRouter, Link} from 'react-router-dom'
import styles from './Topic.module.css'

function Topic({match, history}: any) {
    useEffect(() => {
        console.log("HISTORY", history)
        console.log("MATCH", match.params)
    }, [])
    const { path } = match

    return(
        <Link to={`${match.url}/topicTitle`}  className={styles.mainDiv}>
            
                <div className={styles.topicDiv}>
                    <div className={styles.topicTitle}>Topic Title</div>
                    <div className={styles.topicInfo}>przez Elena, 27 minut temu</div>
                </div>
                <div className={styles.lastReplyDiv}>
                    <div className={styles.replyImg}><span className={styles.img}>IMG</span></div>
                    <div className={styles.replyInfo}>
                        <div className={styles.replyUser}>Elena</div>
                        <div className={styles.replyTime}>7 minut temu</div>
                    </div>
                </div>
        </Link>

    )
}

export default withRouter(Topic)