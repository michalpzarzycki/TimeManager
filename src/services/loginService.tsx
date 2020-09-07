import firebase from '../firebase/firebase'
export default class loginService {
    constructor() {}

    static async signIn(email: any, password: any) {
        return new Promise((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(email, password)
                    .then((data) => {
                         resolve(data)
                        })
                    .catch((error) => {
                        reject(error)
                        })
                    })
    }
    static async signOut() {
        return new Promise((resolve, reject) => {
            firebase.auth().signOut()
                    .then(() => {
                        resolve()
                    })
                    .catch((err) => {
                        reject(err)
                    })
        })
    }
}