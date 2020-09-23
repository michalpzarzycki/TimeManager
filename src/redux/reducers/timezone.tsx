import { CHANGE_TIME_ZONE} from '../constanst';
export default function timezone(state = '', action: IAction) {
    switch(action.type){
        case CHANGE_TIME_ZONE:
            return action.payload
        default:
            return state;
    }
}
interface IAction {
    type?: any,
    payload?: any
}
