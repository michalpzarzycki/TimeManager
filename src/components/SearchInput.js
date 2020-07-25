import React, { useState, useEffect } from 'react';
import styles from './SearchInput.module.css'
import { db } from '../firebase/firebase';

export default function SearchInput({searchValueSetter}) {
    let [searchResult,setSearchResult] = useState([])

     async function searchFunction(search) {
         let result=""
        console.log("PRZD SNAP", search)
        const snapshot = await db.collection('tasks')
                                .where('keyword', 'array-contains', search.toLowerCase())
                                .get().then(x => {
                                  result = x.forEach(x => setSearchResult([...searchResult, x.data()]))
                                })
                return result            
            
    }
    function handleChange(event) {
        searchValueSetter(event.target.value)
    //     db.collection('tasks').where('keyword', 'array-contains', event.target.value).get().then(snapshot => {
    //         snapshot.docs.forEach(doc => {
    //             console.log("DONE", doc.id, doc.data())
    //         })
          
    // })
}
    return (<>
        <div className={styles.route1TasksNav_searchDiv}>
        <span className={styles.span}>
        <input onChange={handleChange} name="search" type="search" placeholder="Search Task" autoComplete="off" className={styles.route1TasksNav_searchDiv_input}/>
        </span>
    </div>
    </>
    )
}