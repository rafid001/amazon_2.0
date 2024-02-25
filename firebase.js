// import firebase from "firebase/compat/app";
import { initializeApp, getApps } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {

};
const app = !getApps.length ? initializeApp(firebaseConfig) : getApps();
const db = getFirestore(app);

export default db;
