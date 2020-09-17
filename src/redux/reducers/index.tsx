import { combineReducers } from 'redux'
import darkmode from './darkmode'
import fontfamily from './fontfamily'
import weatherlocation from './weatherlocation'

export default combineReducers({
  darkmode,
  fontfamily,
  weatherlocation
})



