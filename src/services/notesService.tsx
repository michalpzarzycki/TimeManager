import { db } from '../firebase/firebase'


export default class notesService {
    constructor() {}

    static getUserNotes(userId: any) {
        return new Promise((resolve, reject) => {
            db.collection('notes').where('userId', '==', userId).onSnapshot(snapshot => {
                let arr: any[] = []
                snapshot.forEach(doc => arr.push(doc.data()))
                resolve(arr)
            })
        })
    }
    static addNewNote(newNote: any) {
        return new Promise((resolve, reject) => {
            db.collection('notes').add({...newNote}).then(() => {
                console.log("ADDED")
                resolve()
            }).catch(err => {
                console.log("ERROR")
                reject(err)
                
            })
        })
     
    }
}