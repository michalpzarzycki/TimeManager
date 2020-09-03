const KEY = '073634a91c2b50b2af6e10147e4f385e';
export default class weatherService {
    lat: any
    lon: any
    data: any
    constructor(lat: any, lon: any) {
        this.lat = lat;
        this.lon = lon
        this.data = this.getData()
    }
    async getData() {
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${KEY}`)
        let jsonData = await data.json()
        return jsonData
    }
    async getTemp() {
        let data =  await this.data
        return data.main.temp
    }
    async getCity() {
        let data =  await this.data
        return data.name
    }
    async getIcon() {
        let data =  await this.data
        return data.weather[0].icon
    }

}
