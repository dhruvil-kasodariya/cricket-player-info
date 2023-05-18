import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDzxTazPwjRmYqwe-RijR5_gG2Kd9woIbo",
  authDomain: "cricket-player-info.firebaseapp.com",
  projectId: "cricket-player-info",
  storageBucket: "cricket-player-info.appspot.com",
  messagingSenderId: "365914081015",
  appId: "1:365914081015:web:70db2fc7e18f2fc20675f2",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
