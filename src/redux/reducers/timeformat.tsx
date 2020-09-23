import { CHANGE_TIME_FORMAT} from '../constanst';
export default function timeformat(state = '', action: IAction) {
    switch(action.type){
        case CHANGE_TIME_FORMAT:
            return action.payload
        default:
            return state;
    }
}
interface IAction {
    type?: any,
    payload?: any
}
