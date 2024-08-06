// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-f909f.firebaseapp.com",
  projectId: "blog-f909f",
  storageBucket: "blog-f909f.appspot.com",
  messagingSenderId: "633611172939",
  appId: "1:633611172939:web:f975d07323a00cda7ba1ce"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);