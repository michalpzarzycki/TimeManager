import {
    CHANGE_DARK_MODE,
    CHANGE_FONT_FAMILY,
    CHANGE_WEATHER_LOCATION,
    CHANGE_FONT_SIZE,
    CHANGE_LANGUAGE,
    CHANGE_INBOX_REMINDER,
    CHANGE_NOTES_REMINDER,
    CHANGE_NAVBAR_REMINDER,
    CHANGE_TIME_ZONE,
    CHANGE_TIME_FORMAT,
    CHANGE_WEATHER_FORMAT,
     GET_TASKS_REQUEST,
    GET_TASKS_SUCCESS,
     GET_TASKS_FAILURE} from './constanst'
describe("CONSTANTS TEST",() => {
    test("CHECKING CHANGE DARK MODE", () => {
        expect(CHANGE_DARK_MODE).toBe('CHANGE_DARK_MODE')
    })
    test("CHECKING CHANGE FONT FAMILY", () => {
        expect(CHANGE_FONT_FAMILY).toBe('CHANGE_FONT_FAMILY')
    })
    test("CHECKING CHANGE WEATHER LOCATION", () => {
        expect(CHANGE_WEATHER_LOCATION).toBe('CHANGE_WEATHER_LOCATION')
    })
    test("CHECKING CHANGE WEATHER FORMAT", () => {
        expect(CHANGE_WEATHER_FORMAT).toBe('CHANGE_WEATHER_FORMAT')
    })
    test("CHECKING CHANGE FONT SIZE", () => {
        expect(CHANGE_FONT_SIZE).toBe('CHANGE_FONT_SIZE')
    })
    test("CHECKING CHANGE LANGUAGE", () => {
        expect(CHANGE_LANGUAGE).toBe('CHANGE_LANGUAGE')
    })
    test("CHECKING CHANGE INBOX REMINDER", () => {
        expect(CHANGE_INBOX_REMINDER).toBe('CHANGE_INBOX_REMINDER')
    })
    test("CHECKING CHANGE NAVBAR REMINDER", () => {
        expect(CHANGE_NAVBAR_REMINDER).toBe('CHANGE_NAVBAR_REMINDER')
    })
    test("CHECKING CHANGE NOTES REMINDER", () => {
        expect(CHANGE_NOTES_REMINDER).toBe('CHANGE_NOTES_REMINDER')
    })
    test("CHECKING CHANGE TIME ZONE", () => {
        expect(CHANGE_TIME_ZONE).toBe('CHANGE_TIME_ZONE')
    })
    test("CHECKING CHANGE TIME FORMAT", () => {
        expect(CHANGE_TIME_FORMAT).toBe('CHANGE_TIME_FORMAT')
    })
    test("CHECKING GET TASKS REQUEST", () => {
        expect(GET_TASKS_REQUEST).toBe('GET_TASKS_REQUEST')
    })
    test("CHECKING GET TASKS SUCCESS", () => {
        expect(GET_TASKS_SUCCESS).toBe('GET_TASKS_SUCCESS')
    })
    test("CHECKING GET TASKS FAILURE", () => {
        expect(GET_TASKS_FAILURE).toBe('GET_TASKS_FAILURE')
    })
})
  


