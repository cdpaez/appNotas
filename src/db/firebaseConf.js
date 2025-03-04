// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByPfjCC3noFj1XBMrM95RGJ5tCI_PlzTQ",
  authDomain: "appnotas-c6bd4.firebaseapp.com",
  projectId: "appnotas-c6bd4",
  storageBucket: "appnotas-c6bd4.firebasestorage.app",
  messagingSenderId: "1084866332025",
  appId: "1:1084866332025:web:3c989efe08d6bbff255ba8"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
