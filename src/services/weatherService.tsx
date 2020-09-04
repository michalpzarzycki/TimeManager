const KEY = '073634a91c2b50b2af6e10147e4f385e';
export default class weatherService {
    lat: number
    lon: number
    data: any
    constructor(lat: number, lon: number) {
        this.lat = lat;
        this.lon = lon
        this.data = this.getData()
    }
    async getData() {
        try {
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${KEY}`)
        let jsonData = await data.json()
        return jsonData
        } catch(err) {
            throw Error("sth went wrong"+err)
        }
    }
    async getTemp() {
        try {
        let data =  await this.data
        return data.main.temp
        } catch(err) {
            throw Error('sth went wrong'+err)
        }

    }
    async getCity() {
        try {
        let data =  await this.data
        return data.name
        } catch(err) {
            throw Error('sth went wrong '+ err)
        }
    }
    async getIcon() {
        let data =  await this.data
        return data.weather[0].icon
    }

}
