import {
    CHANGE_SEARCH_FILTER_FIELD,
    CHANGE_DARK_MODE,
    CHANGE_FONT_FAMILY,
    CHANGE_WEATHER_LOCATION, 
    CHANGE_FONT_SIZE,
    CHANGE_LANGUAGE,
    CHANGE_INBOX_REMINDER,
    CHANGE_NAVBAR_REMINDER,
    CHANGE_NOTES_REMINDER,
    CHANGE_TIME_FORMAT,
    CHANGE_TIME_ZONE,
    CHANGE_WEATHER_FORMAT,
    GET_TASKS_REQUEST,
    GET_TASKS_SUCCESS,
    GET_TASKS_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE

} from './constanst';

export const setSearchFilterField = (text: any) => ({
    type: CHANGE_SEARCH_FILTER_FIELD,
    payload: text
})
export const setChangeDarkMode = (toggle: any) => ({
    type:CHANGE_DARK_MODE, 
    payload: toggle
})
export const setFontFamily = (font: any) => ({
    type: CHANGE_FONT_FAMILY,
    payload: font
})
export const setWeatherLocation = (location: any) => ({
    type: CHANGE_WEATHER_LOCATION,
    payload: location
})
export const setFontSize = (fontSize: any) => ({
    type: CHANGE_FONT_SIZE,
    payload: fontSize
})
export const setLanguage = (language='pol') => ({
    type:CHANGE_LANGUAGE,
    payload: language
})
export const setInboxReminder = (inboxreminder: any) => ({
    type:CHANGE_INBOX_REMINDER,
    payload: inboxreminder
}) 
export const setNavbarReminder = (navbarreminder: any) => ({
    type: CHANGE_NAVBAR_REMINDER,
    payload: navbarreminder
})
export const setNotesReminder = (notesreminder: any) => ({
    type: CHANGE_NOTES_REMINDER,
    payload: notesreminder
})
export const setTimeFormat = (timeformat: any) => ({
    type: CHANGE_TIME_FORMAT,
    payload: timeformat
})
export const setTimeZone = (timezone: any) => ({
    type: CHANGE_TIME_ZONE,
    payload: timezone
})
export const setWeatherFormat = (weatherformat: any) => ({
    type: CHANGE_WEATHER_FORMAT,
    payload: weatherformat
})


//get task
export const getTasksRequest = (tasks:any) => ({
    type: GET_TASKS_REQUEST,
    payload: tasks
}) 
export const getTasksSuccess = (tasks: any) => ({
    type: GET_TASKS_SUCCESS,
    payload: tasks
})
export const getTasksFailure = (tasks: any) => ({
    type: GET_TASKS_FAILURE,
    payload: tasks
})

//get user
export const getUserRequest = (user:any) => ({
    type: GET_USER_REQUEST,
    payload: user
}) 
export const getUserSuccess = (user: any) => ({
    type: GET_USER_SUCCESS,
    payload: user
})
export const getUserFailure = (user: any) => ({
    type: GET_USER_FAILURE,
    payload: user
})