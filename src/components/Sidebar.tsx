import React, { useState, useLayoutEffect } from 'react';
import {Link, withRouter} from 'react-router-dom'
import styles from './Sidebar.module.css'
import loginService from '../services/loginService';
import {connect} from 'react-redux'
import Loader from './Loader';

function Sidebar({toggle, history, inboxReminder, notesReminder} : any) {
    let [isLoader, setIsLoader] = useState(false)
    const [size, setSize] = useState(window.innerWidth);
  useLayoutEffect(() => {
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
   
    const updateSize = () => setSize(window.innerWidth) 

    function handleLogout() {
        setIsLoader(true)
        //signOut and change route
        setTimeout(()=>{
          loginService.signOut().then(() => {
            history.push('/login')
            setIsLoader(false)
          })
        }, 1500)
      
    }
    return <div className={toggle ? styles.sidebarContainer : styles.none}>
        <div className={isLoader ? styles.loader : styles.none}><Loader /></div>
        <Link to='/'>
          <div className={styles.mainPage}>
          <span className={styles.mainPageIcon}></span>{size>800 ? 'Main Page' : ''}  
          </div>
        </Link>
        <Link to='/profile'>
          <div className={styles.profile}>
            <span className={styles.profileIcon}></span>{size>800 ? 'Profile' : ''}
          </div>
        </Link>
        <Link to='/settings'>
          <div className={styles.settings}><span className={styles.settingsIcon}>
            </span>{size>800 ? 'Settings' : ''}
          </div>
        </Link>
        <Link to='/inbox'>
          <div className={styles.inbox}>
            <span className={styles.inboxIcon}></span>{size>800 ? 'Inbox' : ''}
            {inboxReminder &&  <span className={styles.reminder}>{inboxReminder}</span>}
          </div>
        </Link>
        <Link to='/contact'>
          <div className={styles.contact}>
            <span className={styles.contactIcon}></span>{size>800 ? 'Contact' : ''}
          </div>
        </Link>
        <Link to='/myexcuses'>
          <div className={styles.myexcuses}>
            <span className={styles.myexcusesIcon}></span>{size>800 ? 'My Excuses' : ''}
          </div>
        </Link>
        <Link to='/notes'>
          <div className={styles.notes}>
            <span className={styles.notesIcon}></span>{size>800 ? 'Notes' : ''}
            {notesReminder && <span className={styles.reminder}>{notesReminder}</span>}
          </div>
        </Link>
        <Link to='/inspiration'>
          <div className={styles.inspiration}>
            <span className={styles.inspirationIcon}></span>{size>800 ? 'Inspirations' : ''}
          </div>
          </Link>
        <Link to='/community'>
          <div className={styles.community}>
            <span className={styles.communityIcon}></span>{size>800 ? 'Community' : ''}
          </div>
          </Link>
        <div className={styles.logout} onClick={handleLogout}>
          <span className={styles.logoutIcon}></span>{size>800 ? 'Logout' : ''}
        </div>
    </div>
}

const mapStateToProps = (state: any) => {
  return {
    inboxReminder: state.inboxreminder,
    notesReminder: state.notesreminder
  }
}
export default connect(mapStateToProps)(withRouter(Sidebar))