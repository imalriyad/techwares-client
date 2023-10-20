/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const Context = ({ children }) => {
  const [cartLength, setCartLength] = useState(0);
  const [user, setUser] = useState(null);

  const creatUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const siginInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleGoogleLogin = (googleAuthProvider) => {
    return signInWithPopup(auth, googleAuthProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }),
    [];

  const authentications = {
    setCartLength,
    cartLength,
    creatUserWithEmail,
    siginInWithEmail,
    handleGoogleLogin,
    user,
  };
  return (
    <div>
      <AuthContext.Provider value={authentications}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default Context;
