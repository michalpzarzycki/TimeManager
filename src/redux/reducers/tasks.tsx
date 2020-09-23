import { GET_TASKS_REQUEST, GET_TASKS_FAILURE, GET_TASKS_SUCCESS} from '../constanst';
export default function tasks(state = {}, action: IAction) {
    switch(action.type){
        case GET_TASKS_SUCCESS:
            return {
                tasks: action.payload,
                loading: false,
                error:''
            }
        case GET_TASKS_FAILURE:
            return {
                loading: false,
                tasks: [],
                error: action.payload
            }
        case GET_TASKS_REQUEST:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}
interface IAction {
    type?: any,
    payload?: any
}
