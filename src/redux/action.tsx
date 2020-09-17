import {
    CHANGE_SEARCH_FILTER_FIELD,
    CHANGE_DARK_MODE,
    REQUEST_TASKS_PENDING,
    REQUEST_TASKS_SUCCESS,
    REQUEST_TASKS_FAIL
} from './constanst';

export const setSearchFilterField = (text: any) => ({
    type: CHANGE_SEARCH_FILTER_FIELD,
    payload: text
})
export const setChangeDarkMode = (toggle: boolean) => ({
    type:CHANGE_DARK_MODE, 
    payload: toggle
})
export const requestTasks = (dispatch: any) => {
    dispatch({type: REQUEST_TASKS_PENDING})
    
}