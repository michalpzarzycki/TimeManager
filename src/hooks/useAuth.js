import { useEffect, useState } from "react";

import firebase from "../firebase/firebase";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState('')
  useEffect(() => {
    firebase.auth().onAuthStateChanged(() => {
      console.log("CHANGES")
      if (firebase.auth().currentUser) {
        console.log("LOGGEDIN")
          setUser(firebase.auth().currentUser)
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [user]);

  return {isLoggedIn, user};
};