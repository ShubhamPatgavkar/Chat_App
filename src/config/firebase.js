// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyANQ0GApMjMFWee-FECK2KjCcNkEmhZF9E",
    authDomain: "chatapp-a7de1.firebaseapp.com",
    projectId: "chatapp-a7de1",
    storageBucket: "chatapp-a7de1.appspot.com",
    messagingSenderId: "751789205816",
    appId: "1:751789205816:web:2f6943dfa4d161985f79cd",
    measurementId: "G-2WQHW0H95M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();