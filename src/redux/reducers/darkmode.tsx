import { CHANGE_DARK_MODE } from '../constanst';
export default function darkmode(state = false , action:IAction){
    switch(action.type){
        case CHANGE_DARK_MODE:
            return action.payload
        default:
            return state;
    }
}
interface IAction {
    type?: any,
    payload?: any
}
