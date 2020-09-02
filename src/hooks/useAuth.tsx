import { useEffect, useState } from "react";

import firebase from "../firebase/firebase";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<any>(null);
  const [user, setUser] = useState('')
  useEffect(() => {
    let dataRef: any = firebase.auth()
    dataRef.onAuthStateChanged(() => {
      console.log("CHANGES")
      console.log('isLOGGEDIN', isLoggedIn)
      if (dataRef.currentUser) {
          setUser(dataRef.currentUser)
        setIsLoggedIn(true);
        console.log("TRsUE", isLoggedIn)

      } else {
        setIsLoggedIn(false);
      }
    });
  }, [user]);

  return {isLoggedIn, user};
};