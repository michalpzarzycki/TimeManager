import React from 'react';
import ForumFilters from './ForumFilters';
import Categories from './Categories'
import styles from './Forum.module.css';

export default function Forum() {
    return(
        <div className={styles.mainDiv}>
            <ForumFilters />
            <Categories />
        </div>
    )
}