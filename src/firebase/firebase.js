
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCOinAOEi_wkzgLTzdp7NyT5teHi2a6Uts",
    authDomain: "protein-horce-racing.firebaseapp.com",
    projectId: "protein-horce-racing",
    storageBucket: "protein-horce-racing.appspot.com",
    messagingSenderId: "696318561011",
    appId: "1:696318561011:web:b50e6dbb2a8c8304c30586"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db }