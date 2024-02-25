// import firebase from "firebase/compat/app";
import { initializeApp, getApps } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCujtFv0QpmEyH-DIamTy2t5MonvuHm26M",
  authDomain: "final-deploy-47018.firebaseapp.com",
  projectId: "final-deploy-47018",
  storageBucket: "final-deploy-47018.appspot.com",
  messagingSenderId: "395387396219",
  appId: "1:395387396219:web:4e1108ff7dbbc271c342de"
};
const app = !getApps.length ? initializeApp(firebaseConfig) : getApps();
const db = getFirestore(app);

export default db;
