import { CHANGE_FONT_SIZE } from '../constanst';
export default function fontsize(state = '', action: IAction) {
    switch(action.type){
        case CHANGE_FONT_SIZE:
            return action.payload
        default:
            return state;
    }
}
interface IAction {
    type?: any,
    payload?: any
}
