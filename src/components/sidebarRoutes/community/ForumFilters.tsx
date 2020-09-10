import React from 'react';
import styles from './ForumFilters.module.css'

export default function ForumFilters() {
    return(
        <div className={styles.mainDiv}>
           <div className={styles.paginationDiv}>
               <div className={styles.paginationButtons}>
                    <div className={styles.longButton}>{`<<`}</div>
                    <div className={styles.smallButton}>1</div>
                    <div className={styles.smallButton}>2</div>
                    <div className={styles.smallButton}>3</div>
                    <div className={styles.longButton}>{`>>`}</div>
               </div>
           </div>
           <div className={styles.sortDiv}>
               <div className={styles.sortInput}>
                   <select className={styles.selectFilter}> 
                       <option>ONE</option>
                       <option>TWO</option>
                       <option>THREe</option>
                   </select>
               </div>
           </div>
        </div>
    )
}