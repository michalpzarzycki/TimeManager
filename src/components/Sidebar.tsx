import React, { useState, useLayoutEffect } from 'react';
import {Link, withRouter} from 'react-router-dom'
import styles from './Sidebar.module.css'
import loginService from '../services/loginService';
import {connect} from 'react-redux'
import Loader from './Loader';
const LANGUAGES: any = {
  pol:{
      header: "WYBIERZ JEZYK",
      sidebarMainPage: "STRONA GLOWNA",
      sidebarSettings: "USTAWIENIA",
      sidebarProfile: "PROFIL",
      sidebarInbox: "SKRZYNKA",
      sidebarContact: "KONTAKT",
      sidebarMyExcuses: "WYMOWKI",
      sidebarNotes: "NOTATKI",
      sidebarInspirations: "INSPIRACJE",
      sidebarCommunity: "SPOLECZNOSC",
      sidebarLogout: "WYLOGUJ"
  },
  spa:{
      header: "ELIGE LENGUA",
      
  },
  usa:{
      header: "CHOOSE LANGUAGE",
      sidebarMainPage: "MAIN PAGE",
      sidebarSettings: "SETTINGS",
      sidebarProfile: "PROFILE",
      sidebarInbox: "INBOX",
      sidebarContact: "CONTACT",
      sidebarMyExcuses: "EXCUSES",
      sidebarNotes: "NOTES",
      sidebarInspirations: "INSPIRATIONS",
      sidebarCommunity: "COMMUNITY",
      sidebarLogout: "LOGOUT"

  },
  it:{
      header: "SCEGLI LA LINGUA"
  },
  ger:{
      header: "SPRACHE WÄHLEN"
  },
  chin:{
      header: "选择语言"
  },
  ru:{
      header: "ВЫБЕРИТЕ ЯЗЫК"
  },
  pg:{
      header: "ESCOLHA O SEU IDIOMA"
  }
}
function Sidebar({toggle, history, inboxReminder, notesReminder, language} : any) {
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
          <span className={styles.mainPageIcon}></span>{ language && size>800 ? LANGUAGES[language].sidebarMainPage : ''} 
          </div>
        </Link>
        <Link to='/profile'>
          <div className={styles.profile}>
            <span className={styles.profileIcon}></span>{ language && size>800 ? LANGUAGES[language].sidebarProfile : ''}
          </div>
        </Link>
        <Link to='/settings'>
          <div className={styles.settings}>
            <span className={styles.settingsIcon}></span>{ language && size>800 ? LANGUAGES[language].sidebarSettings : ''}
          </div>
        </Link>
        <Link to='/inbox'>
          <div className={styles.inbox}>
           <span className={styles.inboxIcon}></span>{ language && size>800 ? LANGUAGES[language].sidebarInbox : ''}
            {inboxReminder &&  <span className={styles.reminder}>{inboxReminder}</span>}
          </div>
        </Link>
        <Link to='/contact'>
          <div className={styles.contact}>
            <span className={styles.contactIcon}></span>{ language && size>800 ? LANGUAGES[language].sidebarContact : ''}
          </div>
        </Link>
        <Link to='/myexcuses'>
          <div className={styles.myexcuses}>
            <span className={styles.myexcusesIcon}></span>{ language && size>800 ? LANGUAGES[language].sidebarMyExcuses : ''}
          </div>
        </Link>
        <Link to='/notes'>
          <div className={styles.notes}>
            <span className={styles.notesIcon}></span>{ language && size>800 ? LANGUAGES[language].sidebarNotes : ''}
            {notesReminder && <span className={styles.reminder}>{notesReminder}</span>}
          </div>
        </Link>
        <Link to='/inspiration'>
          <div className={styles.inspiration}>
            <span className={styles.inspirationIcon}></span>{ language && size>800 ? LANGUAGES[language].sidebarInspirations : ''}
          </div>
          </Link>
        <Link to='/community'>
          <div className={styles.community}>
            <span className={styles.communityIcon}></span>{ language && size>800 ? LANGUAGES[language].sidebarCommunity : ''}
          </div>
          </Link>
        <div className={styles.logout} onClick={handleLogout}>
          <span className={styles.logoutIcon}></span>{ language && size>800 ? LANGUAGES[language].sidebarLogout : ''}
        </div>
    </div>
}

const mapStateToProps = (state: any) => {
  return {
    inboxReminder: state.inboxreminder,
    notesReminder: state.notesreminder,
    language: state.language
  }
}
export default connect(mapStateToProps)(withRouter(Sidebar))