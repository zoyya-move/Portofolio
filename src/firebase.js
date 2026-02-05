// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
 apiKey: "AIzaSyBCCQ9jEEFerVG5p9L4apk-u2o22CPvN3Q",
    authDomain: "portofolio-126b1.firebaseapp.com",
    projectId: "portofolio-126b1",
    storageBucket: "portofolio-126b1.firebasestorage.app",
    messagingSenderId: "856729539016",
    appId: "1:856729539016:web:3d687895034291097a70fd",
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
