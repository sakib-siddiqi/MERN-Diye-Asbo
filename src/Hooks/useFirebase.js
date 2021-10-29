import { initializeApp } from "firebase/app";
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
import firebaseConfig from "../Configs/firebase.config.app";
/**firebase app initializing */
initializeApp(firebaseConfig);
/**
 * Auth
 * google provider
 */
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
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
  const [conFirm, setConFirm] = useState(false);
  const handleConFirm = (doit) => {
    setConFirm(doit);
  };
  /**
   * Google Signin
   * signout
   * delete User
   */
  const handleSignin = (historyPush) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        historyPush();
        setUser(res.user);
      })
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
    return onAuthStateChanged(auth, (user) => {
      try {
        user ? setUser(user) : setUser({});
      } catch (err) {
        setError(err.code);
      } finally {
        setLoading(false);
      }
    });
  }, []);
  return {
    user,
    error,
    loading,
    conFirm,
    handleConFirm,
    handleSignin,
    handleSignOut,
    handleDeleteUser,
  };
};
export default useFirebase;

/**
 * create new funct to setuser
 *
 */
