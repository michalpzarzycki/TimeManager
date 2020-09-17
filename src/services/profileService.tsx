import {storage, db} from '../firebase/firebase'
export default class profileService {
    constructor() {}

    static uploadPictureSnapshot(userEmail: any, file: any, progress: any, error: any, complete: any) {
        storage.ref()
               .child(`profiles/${userEmail}.jpg`)
               .put(file)
               .on('state_changed', progress, error, complete)
   
    }
    static updateUserData(userData: any) {
        return new Promise((resolve, reject) => {
            db.collection('users')
              .doc(userData.docId)
              .update({...userData})
              .then(() => resolve())
              .catch(err => reject(err))
        })
     
    }

    static getUserData(userEmail: any) {
        return new Promise((resolve, reject) => {
            db.collection('users')
              .where('email', '==', userEmail)
              .get()
              .then((doc) => {
                    let obj = {}
                    doc.forEach(doc => obj={...doc.data(), docId: doc.id})
                    resolve(obj)})
              .catch(err => reject(err))
        })
    }
}
