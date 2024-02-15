// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-46c0b.firebaseapp.com",
  projectId: "mern-blog-46c0b",
  storageBucket: "mern-blog-46c0b.appspot.com",
  messagingSenderId: "506624946896",
  appId: "1:506624946896:web:06402318486b4a29ef64d5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);