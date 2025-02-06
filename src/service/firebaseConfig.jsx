// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEiAvh-mqLXYNHvflC6QLdPfOLKy4XCTA",
  authDomain: "demand-forecasting-app.firebaseapp.com",
  projectId: "demand-forecasting-app",
  storageBucket: "demand-forecasting-app.firebasestorage.app",
  messagingSenderId: "882646782228",
  appId: "1:882646782228:web:6ef850da4f2122c55c3201",
  measurementId: "G-SM7EKSCM86"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);