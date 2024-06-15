import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
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
        return result
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

  //createUserWithEmail&Pass
  const createUser = async (email, password, username) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('userCredential',userCredential)
      const user = userCredential.user;
      console.log('user',user)
      setUser(user)
      
      // Set display name for the user
      await updateProfile(user, {
        displayName: username,
  
      });
  
     
      return user;
    } catch (error) {
      console.error("Error creating user: ", error);
      throw error;  
    }
  };

  //Logout
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
  const authInfo = { googleLogin,setLoading, user,logOut,loading,setLoading, createUser};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
