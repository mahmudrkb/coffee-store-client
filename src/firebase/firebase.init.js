// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmu11UVI__mvfjUZ7hurS-ym8EofUNbIo",
  authDomain: "coffee-store-4c057.firebaseapp.com",
  projectId: "coffee-store-4c057",
  storageBucket: "coffee-store-4c057.firebasestorage.app",
  messagingSenderId: "278645195316",
  appId: "1:278645195316:web:5b2a41ee0f1a8460ce4061"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);