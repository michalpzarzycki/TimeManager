import React from 'react';
import styles from './TaskLoader.module.css'


export default function TaskLoader({isLoading}: any) {
    return (
        <div className={isLoading ? styles.loader : ''}>
            <span className={isLoading ? styles.loadIcon : ''}></span>
        </div>
    )
}