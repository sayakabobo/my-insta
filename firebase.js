// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP_pmQCQwAVgYuC7rDqBhfpl4pn_U4SUs",
  authDomain: "my-insta-e66dc.firebaseapp.com",
  projectId: "my-insta-e66dc",
  storageBucket: "my-insta-e66dc.appspot.com",
  messagingSenderId: "539645167010",
  appId: "1:539645167010:web:aba57c8c59679fc975defb",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
