import { combineReducers } from 'redux'
import darkmode from './darkmode'
import fontfamily from './fontfamily'
import weatherlocation from './weatherlocation'
import fontsize from './fontsize'
import language from './language'
import inboxreminder from './inboxreminder'
import navbarreminder from './navbarremider'
import notesreminder from './notesreminder'
import timezone from './timezone'
import timeformat from './timeformat'
import weatherformat from './weatherformat'
import tasks from './tasks'
import user from './user'
export default combineReducers({
  darkmode,
  fontfamily,
  weatherlocation,
  fontsize,
  language,
  inboxreminder,
  navbarreminder,
  notesreminder,
  timezone,
  timeformat,
  weatherformat,
  tasks,
  user
})



