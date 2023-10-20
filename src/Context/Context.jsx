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
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItem,setCartItem] = useState([])

  const creatUserWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const siginInWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleGoogleLogin = (googleAuthProvider) => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }),
    [];

  const authentications = {
    creatUserWithEmail,
    siginInWithEmail,
    handleGoogleLogin,
    user,
    loading,
    setCartItem,
    cartItem
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
