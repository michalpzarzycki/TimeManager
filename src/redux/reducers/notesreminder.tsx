import { CHANGE_NOTES_REMINDER } from '../constanst';
export default function notesreminder(state = '', action: IAction) {
    switch(action.type){
        case CHANGE_NOTES_REMINDER:
            return action.payload
        default:
            return state;
    }
}
interface IAction {
    type?: any,
    payload?: any
}
