import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZre9BkpHvyfxKpTHiL2EU1hKPKWK5O4c",

  authDomain: "green-shop-17f48.firebaseapp.com",

  projectId: "green-shop-17f48",

  storageBucket: "green-shop-17f48.appspot.com",

  messagingSenderId: "81418368286",

  appId: "1:81418368286:web:f7b1cfc2f10eab26b8050f",

  measurementId: "G-VX58HSSMF4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getFirestore(app);
const fireDB = getFirestore(app);

const lagout = () => {
  signOut(auth);
};

export { auth, fireDB, lagout };
