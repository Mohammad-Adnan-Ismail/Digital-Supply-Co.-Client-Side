// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXxEsi0tjKWqhWodJrGzu1ayornRfMMyE",
  authDomain: "digital-40d52.firebaseapp.com",
  projectId: "digital-40d52",
  storageBucket: "digital-40d52.appspot.com",
  messagingSenderId: "928228730606",
  appId: "1:928228730606:web:6ae63000ff71d705e575ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;