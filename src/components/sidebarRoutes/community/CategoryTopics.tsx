import React from 'react';
import Topic from './Topic'
import styles from './CategoryTopics.module.css'
import ForumFilters from './ForumFilters';


export default function CategoryTopics() {
    return(
        <div className={styles.mainDiv}>
            <ForumFilters />
            <Topic />
        </div>
    )
}