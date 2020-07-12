import { useEffect, useState } from "react";

import firebase from "../firebase/firebase";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(() => {
      if (firebase.auth().currentUser) {
          console.log(firebase.auth().currentUser)
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return isLoggedIn;
};