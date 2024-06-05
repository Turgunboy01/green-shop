import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjjMUaVK3NNHOJ4UBQsffX5WSddPR7Hxc",
  authDomain: "shop-edf30.firebaseapp.com",
  projectId: "shop-edf30",
  storageBucket: "shop-edf30.appspot.com",
  messagingSenderId: "221701776722",
  appId: "1:221701776722:web:ea07c9dacb2e3f2241468b",
  measurementId: "G-DXHS89F0RP",
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
