import React from 'react';
import styles from './Category.module.css';

export default function Category({categoryName, handleClick}: any) {
    return(
        <section className={styles.mainSection} onClick={() => handleClick(categoryName)}>
            <div className={styles.contentDiv}>
                <p className={styles.categoryName}>{categoryName}</p>
            </div>
        </section>
    )
}