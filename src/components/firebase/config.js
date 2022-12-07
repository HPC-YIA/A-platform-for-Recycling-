// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";


import "firebase/compat/storage";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPzKDJfMX1m0OcwZlPVtmC7sdFFMAGHGc",
  authDomain: "my-recycled-web.firebaseapp.com",
  projectId: "my-recycled-web",
  storageBucket: "my-recycled-web.appspot.com",
  messagingSenderId: "904735424218",
  appId: "1:904735424218:web:fb08a7b6fa05fd4af06fe3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectstorage = firebase.storage();
const projectfirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const storageRef= firebase.storage().ref();

export{projectstorage,projectfirestore,timestamp, storageRef} ;