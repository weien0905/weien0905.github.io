// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy7mCzpI_2XcqtLOQVXc4syaYHGJgbaSs",
  authDomain: "lim-wei-en.firebaseapp.com",
  projectId: "lim-wei-en",
  storageBucket: "lim-wei-en.appspot.com",
  messagingSenderId: "330764447261",
  appId: "1:330764447261:web:371ce1e8da66427c0560f4",
  measurementId: "G-87SENT62Q7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);