import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(true); 
    googleProvider.setCustomParameters({
      prompt: "select_account",
    });

    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        setLoading(false);  
      })
      .catch((error) => {
        console.error("Login failed: ", error);
        setLoading(false);  
      });
  };

  //current user check
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const logOut = async () => {
    setLoading(true);  
    return signOut(auth)
      .then(() => {
        setUser(null);
        setLoading(false);  
      })
      .catch((error) => {
        console.error("Logout failed: ", error);
        setLoading(false); 
      });
  };
  const authInfo = { googleLogin, user,logOut,loading};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
