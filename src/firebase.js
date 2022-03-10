import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCV_YoO-ry9t1haF-WaZxnqpy6wepVK6mI",
    authDomain: "react-firebase-68085.firebaseapp.com",
    projectId: "react-firebase-68085",
    storageBucket: "react-firebase-68085.appspot.com",
    messagingSenderId: "467895860905",
    appId: "1:467895860905:web:0ee38ff4d580e7c27233b8",
    measurementId: "G-E4DB5E7F4X"
};

const app= initializeApp(firebaseConfig);
export const db = getFirestore(app);

