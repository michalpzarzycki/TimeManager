import firebase, { db, storage } from '../firebase/firebase'
export default class inboxService {
    dataRef: any
    constructor() {
        this.dataRef = firebase.auth()
    }
    docRef: any
    users: any[] = []

    getUserConversationsSnapshot(setter: any) {
        try {
        db.collection('conversations').where('users', 'array-contains', this.dataRef.currentUser.email)
        .onSnapshot(snapshot => {
            let arr: any[] = []
            snapshot.forEach(doc => arr.push(doc.data()))
            setter([...arr])
        })
    } catch(err) {
        console.log(err)
    }
            
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

     async createNewConversation(anotherUserEmail: any) {
        //This message appears on top of the new conversation
        let welcomeMessage = {
            id: '',
            messages: [
                {
                    author: 'admin',
                    date: Date.now(),
                    message: 'You can start conversation'
                }
            ],
            users: [anotherUserEmail, this.dataRef.currentUser.email]
        }
        return new Promise((resolve, reject) => {
            db.collection('conversations').add(welcomeMessage)
              .then((docRef: any) => {
                 db.collection('conversations').doc(docRef.id).update({...welcomeMessage, id: docRef.id})
                  resolve(docRef)
              })
              .catch(err => {
                  reject()
              })   
        }) 
    }

     async getCreatedConversation(docRef: any) {
       return new Promise((resolve, reject) => {
        docRef.get().then((snapshot: any) => {
            let arr = []
            arr.push({ ...snapshot.data(), id: snapshot.id })
            resolve(arr)
        })
        .catch(() => {
            reject()
        })
       }) 
    }

    static getUserImgWithEmail(email: any) {
        return new Promise((resolve, reject) => {
            storage.ref().child(`/profiles/${email}.jpg`)
            .getDownloadURL()
            .then((url) => {
                resolve(url)
            })
            .catch((err) => {
                reject(err)
            })
        })
    }
    static updateConversation(docId: any, update: any) {
        return new Promise((resolve, reject) => {
            db.collection('conversations').doc(docId).update({update}).then(() => {
                resolve()
            }).catch((err: any) => reject(err)) 
        })
    }
}

