import React, { useState, useEffect } from 'react';
import MyExcusesChart from '../charts/MyExcusesChart'
import styles from './MyExcuses.module.css'
import {db} from '../../firebase/firebase'
import uniqId from 'uniqid'
import TopExcuses from './excuses/TopExcuses';
import NewestExcuses from './excuses/NewestExcuses';
import AllExcuses from './excuses/AllExcuses';
interface IExcuse {
    date: any,

}
export default function MyExcuses({user} : any) {
    const [excuse, setExcuse] = useState<any>([]);
    const [excuses, setExcuses] = useState<any>([]);
    const [excuseId, setExcuseId] = useState(uniqId())

    useEffect(() => {
        db.collection('excuses').where('userId', '==', user.uid).onSnapshot(snapshot => {
            let arr: any[] =[]
            snapshot.forEach(doc => arr.push({...doc.data(), docId: doc.id}))
            setExcuses([...arr])
        })
    }, [])

    function handleChange(event: any) {
        setExcuse({...excuse, [event.target.name]:event.target.value, date: Date.now()})
    }
function handleSubmit(event: any) {
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
 function handleCounter(docId: any, counter: any) {

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
                <TopExcuses excuses={excuses} handleCounter={handleCounter}/>
                <NewestExcuses excuses={excuses} handleCounter={handleCounter}/>
                <AllExcuses  excuses={excuses} handleCounter={handleCounter}/>
                {excuses.map((elem: any) => {
                  
                    return <div>
                        <div>{elem.excuse}</div>
                        <div onClick={() => handleCounter(elem.docId, elem.excuseCounter)}>UP {elem.excuseCounter}</div>
                    </div>
                })}
            </section>
        </div>
    )
}