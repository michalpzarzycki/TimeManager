import { useEffect, useState } from "react";

import firebase from "../firebase/firebase";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState('')
  useEffect(() => {
    firebase.auth().onAuthStateChanged(() => {
      console.log("CHANGES")
      console.log('isLOGGEDIN', isLoggedIn)
      if (firebase.auth().currentUser) {
          setUser(firebase.auth().currentUser)
        setIsLoggedIn(true);
        console.log("TRsUE", isLoggedIn)

      } else {
        setIsLoggedIn(false);
      }
    });
  }, [user]);

  return {isLoggedIn, user};
};