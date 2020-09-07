import { db } from '../firebase/firebase'


export default class myExcusesService {
    constructor() {}

    static getUsersExcuses(userUid: any) {
        return new Promise((resolve, reject) => {
            db.collection('excuses').where('userId', '==', userUid).onSnapshot(snapshot => {
                let arr: any[] =[]
                snapshot.forEach(doc => arr.push({...doc.data(), docId: doc.id}))
                resolve(arr)
            })
        })
    }
    
    static addExcuseToDatabase(excuse) {
        return new Promise((resolve, reject) => {
            db.collection('excuses').add(excuse).then(() => {
                resolve()
            }).catch(err => {
                reject()
            })
        })
    }
    static updateExcuse(docId: any, counter: any) {
        db.collection('excuses').doc(docId).update({excuseCounter: counter+1})

    }
 
}


