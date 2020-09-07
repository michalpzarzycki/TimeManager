import { db } from '../firebase/firebase';

export default class inspirationService {
    constructor() {}
    static getInspirationFromDatabase() {
        return new Promise((resolve, reject) => {
            db.collection('inspirations').get().then(snapshot => {
                let arr: any[] = []
                snapshot.forEach(doc => arr.push(doc.data()))
                resolve(arr)
            })
            .catch((err) => {
                reject(err)
            })
        
        })
    }
    static setInspirationQuote(elemId: any, quote: any) {
        let elem1: any = document.getElementById(`${elemId}`)
        elem1.textContent = quote
    }

}

  