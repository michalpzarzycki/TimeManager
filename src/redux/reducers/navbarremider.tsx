import { CHANGE_NAVBAR_REMINDER } from '../constanst';
export default function navbarreminder(state = '', action: IAction) {
    switch(action.type){
        case CHANGE_NAVBAR_REMINDER:
            return action.payload
        default:
            return state;
    }
}
interface IAction {
    type?: any,
    payload?: any
}
