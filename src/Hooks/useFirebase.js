import firebaseApp from "../Configs/firebase.config.app";
import {
  GoogleAuthProvider,
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  deleteUser,
} from "firebase/auth";

import { useEffect } from "react";
import { useState } from "react";
/**
 * Auth
 * google provider
 */
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
/**firebase app initializing */
firebaseApp();
/**
 * Main Function===============================================================
 * Main Function===============================================================
 * Main Function===============================================================
 */
const useFirebase = () => {
  /**
   * States
   */
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  /**
   * Google Signin
   * signout
   * delete User
   */
  const handleSignin = () => {
    setLoading(true);
    return signInWithPopup(user, googleProvider)
      .then((res) => setUser(res.user))
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };
  const handleSignOut = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => setUser({}))
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };
  const handleDeleteUser = () => {
    setLoading(true);
    deleteUser(auth.currentUser)
      .then(() => setUser({}))
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };
  /**
   * auth state changed
   */
  useEffect(() => {
    return onAuthStateChanged(auth, (user) =>
      user ? setUser(user) : setUser({})
    );
  }, []);
  return {
    user,
    error,
    loading,
    handleSignin,
    handleSignOut,
    handleDeleteUser,
  };
};
export default useFirebase;
