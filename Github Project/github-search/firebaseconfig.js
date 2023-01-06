// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDagEDcakWW8GIw95m3vk2_JWTLj4A4_AQ",
  authDomain: "eg-github-search.firebaseapp.com",
  projectId: "eg-github-search",
  storageBucket: "eg-github-search.appspot.com",
  messagingSenderId: "789499943443",
  appId: "1:789499943443:web:24cd7361f0fcc9f04b7de6",
  measurementId: "G-FEGZJ7PGR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);