import firebase from './firebase'


export const login = (email: any, password: any, dispatch: any) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then((data: any) => {
            dispatch({type: "GET_USER_SUCCESS"})
      })
}