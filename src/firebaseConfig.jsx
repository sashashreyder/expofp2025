import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth"; 
import { getStorage } from "firebase/storage"; 
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA_jr182BkdDtGKlbhHj25vEyokQ6ku4Gg",
  authDomain: "expofp-brazil.firebaseapp.com",
  projectId: "expofp-brazil",
  storageBucket: "expofp-brazil.firebasestorage.app",
  messagingSenderId: "799036693397",
  appId: "1:799036693397:web:5c7526ac3d7e76a1fb349c",
  measurementId: "G-ZDKWTBB6MM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  
const auth = getAuth(app);  
const storage = getStorage(app);  
const analytics = getAnalytics(app); 

export { app, db, auth, storage, analytics };

