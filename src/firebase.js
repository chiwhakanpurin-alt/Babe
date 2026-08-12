import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAP08700b-c24CjtPU8N_urW5-TbiO7RPE",
  authDomain: "chat-p-sync.firebaseapp.com",
  projectId: "chat-p-sync",
  storageBucket: "chat-p-sync.firebasestorage.app",
  messagingSenderId: "41685215007",
  appId: "1:41685215007:web:ffe5eb4a54176c161ff22a",
  measurementId: "G-BEL3R0R511"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
