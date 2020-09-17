import { CHANGE_FONT_FAMILY } from '../constanst';
export default function fontfamily(state = '', action: IAction) {
    switch(action.type){
        case CHANGE_FONT_FAMILY:
            return action.payload
        default:
            return state;
    }
}
interface IAction {
    type?: any,
    payload?: any
}
