export default class weatherService {
    constructor() {}
    //return weather data from current location
   static async getWeather() {
        return new Promise((resolve, reject) => {
            if(navigator.geolocation) {
                let key = '073634a91c2b50b2af6e10147e4f385e' 
                navigator.geolocation.getCurrentPosition(async (position) => {
                   let lat = position.coords.latitude;
                   let lon = position.coords.longitude
                   let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
                   let jsonData = await data.json()
                   resolve(jsonData)
                })} else {
                    reject()
                }
        })
    }
    //set weather icon on given selector
    static setIcon(querySelector: string, weatherIcon: string) {
        let iconElem = document.querySelector(`${querySelector}`) as HTMLElement
        iconElem.style.backgroundImage = `url(http://openweathermap.org/img/w/${weatherIcon}.png)`
    }
}
    