import React, { useEffect, useState } from 'react';
import styles from './TopExcuses.module.css'

export default function TopExcuses({excuses, handleCounter} : any) {
    let [sorted, setSorted] = useState<any>([])
    function filterTop(excuses: any) {
        let sorted = {}
        excuses.sort((a: any,b: any) =>  b.excuseCounter-a.excuseCounter);
       setSorted([...excuses])
    }

    useEffect(()=>{
        filterTop(excuses)
    }, [excuses])
    return (
        <div className={styles.mainDiv}>
            <div className={styles.headerDiv}>
                <span></span>
                <h1>TOP 3</h1>
            </div>
            <div className={styles.topExcuses}>
                {sorted.map((elem: any, index: any) =>  {
                    return(
                    <p>{index+1}.{elem.excuse}<span onClick={() => handleCounter(elem.docId, elem.excuseCounter)}>+</span>{elem.excuseCounter}</p>
                    )
                })}
            </div>
        </div>
    )
}