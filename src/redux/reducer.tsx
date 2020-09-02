import {
    CHANGE_SEARCH_FILTER_FIELD,
    REQUEST_TASKS_FAIL,
    REQUEST_TASKS_SUCCESS,
    REQUEST_TASKS_PENDING
} from './constanst'

const initialState = {
    searchFilterField: ''
}
const taskInitialState = {
    tasks: ''
}
interface IAction {
    type?: any,
    payload?: any
}
export const searchTasks = (state=initialState, action: IAction={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FILTER_FIELD:
            return {...state, searchFilterField: action.payload}
        default: 
        return state    
    }
}

export const requestTasks = (state=taskInitialState, action: IAction={}) => {
    switch(action.type) {
        case REQUEST_TASKS_PENDING:
            return{...state, isPending: true}
        case REQUEST_TASKS_SUCCESS:
            return{...state, tasks: action.payload, isPending: false}
        case REQUEST_TASKS_FAIL:
            return{...state, error: action.payload, isPending: false}
        default:
            return state
    }
}

