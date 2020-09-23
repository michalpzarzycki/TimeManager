import { CHANGE_LANGUAGE} from '../constanst';
export default function language(state = '', action: IAction) {
    switch(action.type){
        case CHANGE_LANGUAGE:
            return action.payload
        default:
            return state;
    }
}
interface IAction {
    type?: any,
    payload?: any
}
