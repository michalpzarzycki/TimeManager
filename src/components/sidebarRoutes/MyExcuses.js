import React, { useState, useEffect } from 'react';
import MyExcusesChart from '../charts/MyExcusesChart'
import styles from './MyExcuses.module.css'
import {db} from '../../firebase/firebase'
import uniqId from 'uniqid'

export default function MyExcuses({user}) {
    const [excuse, setExcuse] = useState([]);
    const [excuses, setExcuses] = useState([]);
    const [excuseId, setExcuseId] = useState(uniqId())

    useEffect(() => {
        db.collection('excuses').where('userId', '==', user.uid).onSnapshot(snapshot => {
            let arr =[]
            snapshot.forEach(doc => arr.push({...doc.data(), docId: doc.id}))
            setExcuses([...arr])
        })
    }, [])

    function handleChange(event) {
        setExcuse({...excuse, [event.target.name]:event.target.value, date: Date.now()})
    }
function handleSubmit(event) {
    event.preventDefault()
    setExcuseId(uniqId)
    let finalExcuse = {
        ...excuse, 
        userId: user.uid,
        excuseId: excuseId, 
        excuseCounter: 1
    }
    db.collection('excuses').add(finalExcuse).then(() => {
        console.log('excuse added')
    }).catch(err => {
        console.log("error excuses", err)
    })

}
 function handleCounter(docId, counter) {

    db.collection('excuses').doc(docId).update({
        excuseCounter: counter+1 
    })
 }

    return(
        <div className={styles.myExcusesContainer}>
            <section className={styles.chartsSection}>
                <div><MyExcusesChart /></div>
                <form onSubmit={handleSubmit}>
                    <input type="search" placeholder="search" name="excuse" onChange={handleChange}/>
                    <button type="submit">ADD</button>
                </form>
            </section>
            <section className={styles.excusesLists}>
                <div className={styles.newest}>NEWEST</div>
                <div className={styles.top10}>TOP 10</div>
                <div className={styles.all}>ALL</div>
                {excuses.map(elem => {
                  
                    return <div>
                        <div>{elem.excuse}</div>
                        <div onClick={() => handleCounter(elem.docId, elem.excuseCounter)}>UP {elem.excuseCounter}</div>
                    </div>
                })}
            </section>
        </div>
    )
}