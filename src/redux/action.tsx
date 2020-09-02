import {
    CHANGE_SEARCH_FILTER_FIELD,
    REQUEST_TASKS_PENDING,
    REQUEST_TASKS_SUCCESS,
    REQUEST_TASKS_FAIL
} from './constanst';

export const setSearchFilterField = (text: any) => ({
    type: CHANGE_SEARCH_FILTER_FIELD,
    payload: text
})

export const requestTasks = (dispatch: any) => {
    dispatch({type: REQUEST_TASKS_PENDING})
    
}