// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBffP8prwXtopqiQj5nOYRcbjHIdzTFxfE",
  authDomain: "tfgetg-7aea2.firebaseapp.com",
  databaseURL:
    "https://tfgetg-7aea2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tfgetg-7aea2",
  storageBucket: "tfgetg-7aea2.appspot.com",
  messagingSenderId: "557469576569",
  appId: "1:557469576569:web:19eefa889e289bfebd93a8",
  measurementId: "G-4LQGSM8XSZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getDatabase(app);

export { app, analytics, auth, storage, db };
