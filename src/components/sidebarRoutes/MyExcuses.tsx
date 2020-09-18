import React, { useState, useEffect } from 'react';
import MyExcusesChart from '../charts/MyExcusesChart'
import styles from './MyExcuses.module.css'
import { db } from '../../firebase/firebase'
import uniqId from 'uniqid'
import ExcusesList from './excuses/ExcusesList'
import myExcusesService from '../../services/myExcusesService'
import AddExcuse from './excuses/AddExcuse';
import { connect } from 'react-redux';
import {DARK_MYEXCUSES, LIGHT_MYEXCUSES} from '../../variables'
const {darkBackground, darkColor} = DARK_MYEXCUSES;
const {lightBackground, lightColor} = LIGHT_MYEXCUSES
interface IExcuse {
    date: any,

}
 function MyExcuses({ user, darkMode }: any) {
    const [excuse, setExcuse] = useState<any>([]);
    const [excuses, setExcuses] = useState<any>([]);
    const [excuseId, setExcuseId] = useState(uniqId())

    useEffect(() => {
        myExcusesService.getUsersExcuses(user.uid).then((data: any) => {
            setExcuses([...data])
        })
    }, [])

    const handleChange = (event: any) => setExcuse({ ...excuse, [event.target.name]: event.target.value, date: Date.now() })

    function handleSubmit(event: any) {
        event.preventDefault()
        setExcuseId(uniqId)
        let finalExcuse = {
            ...excuse,
            userId: user.uid,
            excuseId: excuseId,
            excuseCounter: 1
        }
        myExcusesService.addExcuseToDatabase(finalExcuse)
    }
    const handleCounter = (docId: any, counter: any) => myExcusesService.updateExcuse(docId, counter)

    return (
        <div className={styles.myExcusesContainer} style={{backgroundColor: darkMode ? darkBackground : lightBackground}}>
                <MyExcusesChart />
                <AddExcuse handleSubmit={handleSubmit} handleChange={handleChange}/>
                <ExcusesList
                    sorted={excuses}
                    handleCounter={handleCounter}
                    header='TOP' />
                <ExcusesList
                    sorted={excuses}
                    handleCounter={handleCounter}
                    header='NEWEST' />
                <ExcusesList
                    sorted={excuses}
                    handleCounter={handleCounter}
                    header='ALL' />
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        darkMode: state.darkmode
    }
}
export default connect(mapStateToProps)(MyExcuses)