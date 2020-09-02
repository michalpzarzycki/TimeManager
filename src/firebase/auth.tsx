import firebase from './firebase'

export const login = (email: any, password: any) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
}