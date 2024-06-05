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
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    console.log(user);
    await addDoc(collection(db, "users"), {
      uid: user.uid, // user obyektining uid xususiyatiga o'zgartirildi
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const lagout = () => {
  signOut(auth);
};

export { auth, db, login, signup, lagout };
