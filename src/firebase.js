// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5UL7Qpr8mplMT4yqh71aA7B832OOTs-o",
  authDomain: "acapela-86d84.firebaseapp.com",
  projectId: "acapela-86d84",
  storageBucket: "acapela-86d84.appspot.com",
  messagingSenderId: "417979512489",
  appId: "1:417979512489:web:f6bf27382ef9297d945bb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getFirestore } from "firebase/firestore";

export const db = getFirestore(app);

import { getAuth } from 'firebase/auth';
export const auth = getAuth(app);