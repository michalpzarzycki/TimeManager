import { GET_USER_REQUEST, GET_USER_FAILURE, GET_USER_SUCCESS} from '../constanst';
export default function user(state = {}, action: IAction) {
    switch(action.type){
        case GET_USER_SUCCESS:
            return {
                user: action.payload,
            }
        case GET_USER_FAILURE:
            return {
                user: null,
            }
        case GET_USER_REQUEST:
            return {
                ...state,
                user: null,
               
            }
        default:
            return state;
    }
}
interface IAction {
    type?: any,
    payload?: any
}
