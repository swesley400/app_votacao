// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app")
const { getFirestore, collection, getDocs, addDoc } = require( 'firebase/firestore/lite');

const firebaseConfig = {
  apiKey: "AIzaSyDd09ijuJuZ0jCDkaDV0fFZvDqSV-sx33s",
  authDomain: "votacao-d490f.firebaseapp.com",
  projectId: "votacao-d490f",
  storageBucket: "votacao-d490f.appspot.com",
  messagingSenderId: "643346922184",
  appId: "1:643346922184:web:bc8cac395bd0c08ba843fd",
  measurementId: "G-QCHLNHYVKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

module.exports = app