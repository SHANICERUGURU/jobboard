// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQJycy2ov1CRXwV9VxyKkkljGcDFu0gQw",
  authDomain: "jobboard-1a058.firebaseapp.com",
  projectId: "jobboard-1a058",
  databaseURL: "https://jobboard-1a058-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: "jobboard-1a058.appspot.com",
  messagingSenderId: "3742801511",
  appId: "1:3742801511:web:6ecb3e201227c9055f3ec2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app