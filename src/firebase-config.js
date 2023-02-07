// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQeIcA2OPGFoqwa_XVT5K8oZPY4zFdpmA",
  authDomain: "akfshop-d3f54.firebaseapp.com",
  projectId: "akfshop-d3f54",
  storageBucket: "akfshop-d3f54.appspot.com",
  messagingSenderId: "212454724565",
  appId: "1:212454724565:web:e19310b43f6a6f3a28a35c",
  measurementId: "G-4BTS6YTMD5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
