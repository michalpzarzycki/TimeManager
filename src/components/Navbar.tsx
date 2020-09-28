import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import SidebarButton from './SidebarButton'
import { fromUnixTime } from 'date-fns'
import { Link, BrowserRouter, withRouter } from 'react-router-dom'
import firebase from '../firebase/firebase'
import { storage, db } from '../firebase/firebase'
import Weather from './Weather'
import { connect } from 'react-redux'
import { setInboxReminder, setNavbarReminder, setNotesReminder } from '../redux/action'

function Navbar({ toggleSidebar, user, toggle, inboxReminderSetter, navbarReminder, navbarReminderSetter, notesRemiderSetter }: any) {
    const [date, setDate] = useState('')

    useEffect(() => {
        db.collection('reminders').where('user', '==', 'michal50166@wp.pl').onSnapshot((snapshot: any) => {
            let arr: any[] = []
            snapshot.forEach((element: any) => {
                arr.push(element.data())
            })
            if(arr[0]) {
                navbarReminderSetter(arr[0].reminders.length)

                let inboxRem = arr[0].reminders.filter((elem: any) => elem.section === 'inbox')
                let notesRem = arr[0].reminders.filter((elem: any) => elem.section === 'notes')
                inboxReminderSetter(inboxRem.length)
                notesRemiderSetter(notesRem.length)
            }
           
        })



if(user) {

    storage.ref().child(`profiles/${user.email}.jpg`).getDownloadURL()
    .then((url: any) => {
        let elem1: any = document.getElementById('userPicture');
        elem1.style.backgroundImage = `url(${url})`
    })
    .catch(err => console.log("ERROR", err))
setInterval(() => {
    let obj = new Date()
    setDate(`${obj.getHours()}:${obj.getMinutes()}:${obj.getSeconds()}`)
}, 1000)
}
    }, [user])
    function handleSignOut() {
        firebase.auth().signOut().then(() => {
        })
            .catch(() => {
            })
    }
    return <div className={styles.navbarContainer}>
        <SidebarButton toggleSidebar={toggleSidebar} toggle={toggle} />
        <div className={styles.clockAndWeather}>
            <div className={styles.language}></div>
            <div>{date.toString()}</div>
            <Weather />
        </div>
        <h1 className={styles.header}>TaskManager</h1>
        <Link to="/profile">
            <div className={styles.userSection}>
                <div id="userPicture" className={styles.picture}>
                    <div className={styles.reminder}>{navbarReminder != 0 && navbarReminder}</div>
                    <div className={styles.belt}>1505</div>
                </div>
                <div className={styles.user}>{user && user.email}</div>
                <div className={styles.arrow}></div>
            </div>
        </Link>



    </div>
}
const mapStateToProps = (state: any) => {
    return {
        navbarReminder: state.navbarreminder
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        inboxReminderSetter: (number: any) => dispatch(setInboxReminder(number)),
        navbarReminderSetter: (number: any) => dispatch(setNavbarReminder(number)),
        notesRemiderSetter: (number: any) => dispatch(setNotesReminder(number))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)