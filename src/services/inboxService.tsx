import firebase, { db } from '../firebase/firebase'
export default class inboxService {
    dataRef: any
    constructor() {
        this.dataRef = firebase.auth()
    }
    users: any[] = []

   async getAllUserConversationsSnapshot() {
       return new Promise((resolve, reject) => {
        db.collection('conversations').where('users', 'array-contains', this.dataRef.currentUser.email)
        .onSnapshot(snapshot => {
            let arr: any[] = []
            snapshot.forEach(doc => arr.push(doc.data()))
            resolve(arr)
        }, reject)
       })     
    }

    async getAllUsersSnapshot() {
        return new Promise((resolve, reject) => {
            db.collection('users').onSnapshot(snapshot => {
                let arr: any[] = []
                snapshot.forEach(doc => { 
                    arr.push({ ...doc.data(), id: doc.id })

                })
                resolve(arr)
        }, reject)
       
        })

    }
}




