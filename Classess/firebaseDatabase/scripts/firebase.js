// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getFirestore, collection, addDoc, serverTimestamp,doc,onSnapshot,getDocs } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9gHzueF5q_tb5DWPjCWsWhIwfLKTFIyU",
    authDomain: "firestore-database-by-nehal.firebaseapp.com",
    projectId: "firestore-database-by-nehal",
    storageBucket: "firestore-database-by-nehal.appspot.com",
    messagingSenderId: "497302924005",
    appId: "1:497302924005:web:a80217df2a11644866020c",
    measurementId: "G-700EZFRXVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Export functions to another file of javascript
export { db, collection, addDoc, serverTimestamp,doc,onSnapshot,getDocs }


