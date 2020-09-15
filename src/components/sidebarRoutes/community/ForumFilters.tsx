import React, { useEffect, useState } from 'react';
import Pagination from './Pagination'
import styles from './ForumFilters.module.css'

export default function ForumFilters({topics, paginateTopics}: any) {
    const [numberOfElems, setNumberOfElems] = useState<any>(0)
    useEffect(() => {
        console.log("TOPICSLENGTH", topics)
        if(topics) {
            setNumberOfElems(topics.length)
        }
    }, [topics])
    return(
        <div className={styles.mainDiv}>
        <Pagination numberOfElems={numberOfElems} elemsOnPage={5} topics={topics} paginateTopics={paginateTopics}/>
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