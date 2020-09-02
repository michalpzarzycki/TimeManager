import React, { useEffect, useState } from 'react';
import styles from './AllExcuses.module.css'

export default function AllExcuses({excuses, handleCounter} : any) {
    let [sorted, setSorted] = useState(excuses)

    return (
        <div className={styles.mainDiv}>
            <div className={styles.headerDiv}>
                <span></span>
                <h1>All</h1>
            </div>
            <div className={styles.topExcuses}>
                {excuses.map((elem: any, index: any) =>  {
                    return(
                    <p>{index+1}.{elem.excuse}<span onClick={() => handleCounter(elem.docId, elem.excuseCounter)}>+</span>{elem.excuseCounter}</p>
                    )
                })}
            </div>
        </div>
    )
}