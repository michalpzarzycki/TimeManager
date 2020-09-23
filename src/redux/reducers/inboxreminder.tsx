import { CHANGE_INBOX_REMINDER } from '../constanst';
export default function inboxreminder(state = '', action: IAction) {
    switch(action.type){
        case CHANGE_INBOX_REMINDER:
            return action.payload
        default:
            return state;
    }
}
interface IAction {
    type?: any,
    payload?: any
}
