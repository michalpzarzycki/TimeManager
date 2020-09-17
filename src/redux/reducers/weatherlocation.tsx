import { CHANGE_WEATHER_LOCATION } from '../constanst';
export default function weatherlocation(state = '', action: IAction) {
    switch(action.type){
        case CHANGE_WEATHER_LOCATION:
            return action.payload
        default:
            return state;
    }
}
interface IAction {
    type?: any,
    payload?: any
}
