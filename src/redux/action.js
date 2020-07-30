import {CHANGE_SEARCH_FILTER_FIELD} from './constanst';

export const setSearchFilterField = (text) => ({
    type: CHANGE_SEARCH_FILTER_FIELD,
    payload: text
})