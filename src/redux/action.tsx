import {
    CHANGE_SEARCH_FILTER_FIELD,
    CHANGE_DARK_MODE,
    CHANGE_FONT_FAMILY,
    CHANGE_WEATHER_LOCATION

} from './constanst';

export const setSearchFilterField = (text: any) => ({
    type: CHANGE_SEARCH_FILTER_FIELD,
    payload: text
})
export const setChangeDarkMode = (toggle: any) => ({
    type:CHANGE_DARK_MODE, 
    payload: toggle
})
export const setFontFamily = (font: any) => ({
    type: CHANGE_FONT_FAMILY,
    payload: font
})
export const setWeatherLocation = (location: any) => ({
    type: CHANGE_WEATHER_LOCATION,
    payload: location
})
