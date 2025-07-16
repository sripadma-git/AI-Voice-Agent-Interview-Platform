// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCNyS7WsvN3ST-ELJkieIVIBMT7CNsSPJY",
  authDomain: "prepwise-cb25d.firebaseapp.com",
  projectId: "prepwise-cb25d",
  storageBucket: "prepwise-cb25d.firebasestorage.app",
  messagingSenderId: "673210467487",
  appId: "1:673210467487:web:af67559f39293d21010eaa",
  measurementId: "G-GGFC9KXL7N"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);