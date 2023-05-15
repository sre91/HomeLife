// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHUoBDcK2Wf7U0MnkjnQ4DqEVArxgwwog",
  authDomain: "homelife-react.firebaseapp.com",
  projectId: "homelife-react",
  storageBucket: "homelife-react.appspot.com",
  messagingSenderId: "31473889578",
  appId: "1:31473889578:web:28e54fa0e0079629c8ae53",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
