import React from 'react'
import styles from './ExcusesList.module.css'

export default function ExcusesList({ sorted, handleCounter, header }: any) {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.headerDiv}>
                <span></span>
                <h1>{header}</h1>
            </div>
            <div className={styles.topExcuses}>
                {sorted.map((elem: any, index: any) => {
                    return (
                        <p>{index + 1}.{elem.excuse}<span onClick={() => handleCounter(elem.docId, elem.excuseCounter)}>+</span>{elem.excuseCounter}</p>
                    )
                })}
            </div></div>
    )
}
