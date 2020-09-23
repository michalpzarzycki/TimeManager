import { CHANGE_WEATHER_FORMAT} from '../constanst';
export default function weatherformat(state = '', action: IAction) {
    switch(action.type){
        case CHANGE_WEATHER_FORMAT:
            return action.payload
        default:
            return state;
    }
}
interface IAction {
    type?: any,
    payload?: any
}
