import firebase  from 'firebase';
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyBPQ-IZUnsjc9Vvrf-P6fiM54xMH16mW9I",
    authDomain: "timemanager-c06e5.firebaseapp.com",
    databaseURL: "https://timemanager-c06e5.firebaseio.com",
    projectId: "timemanager-c06e5",
    storageBucket: "timemanager-c06e5.appspot.com",
    messagingSenderId:"559596498073",
    appId: "1:559596498073:web:f6d124fdcf7f152c541c08"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export function signInWithEmailAndPassword(email: any, password: any) {
    return new Promise((resolve, reject) => {
      firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result: any) => {
        resolve(result)
      })
      .catch(reject)
    })
  }
  export let db = firebase.firestore()
  export let storage = firebase.storage();

  export default firebase

