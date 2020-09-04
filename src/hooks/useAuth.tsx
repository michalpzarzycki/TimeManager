//useAuth checked if there is any loggedIn user and return userData and loggedIn boolean
import { useEffect, useState } from "react";
import firebase from "../firebase/firebase";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<any>(null);
  const [user, setUser] = useState('')
  useEffect(() => {

    let dataRef: any = firebase.auth()
    //Watch if there is some Authentication Changes
    dataRef.onAuthStateChanged(() => {
      //if there is a logged user
      if (dataRef.currentUser) {
        //set user data
        setUser(dataRef.currentUser)
        //set that there is a logged user
        setIsLoggedIn(true);
      } else {
        //if there is no user make sure that it setIsLoggedIn must be false
        setIsLoggedIn(false);
      }
    });
  }, [user]);
//return info about who is or not logged
  return { isLoggedIn, user };
};