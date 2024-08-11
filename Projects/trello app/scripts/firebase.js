// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL, } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js"
import { getFirestore , collection , addDoc ,} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZbxGrZw4FgsWu7EmS3VKiHaJrCxF9Lys",
  authDomain: "trello-e21ed.firebaseapp.com",
  projectId: "trello-e21ed",
  storageBucket: "trello-e21ed.appspot.com",
  messagingSenderId: "83650170801",
  appId: "1:83650170801:web:5f40f0bd7c30986d143790",
  measurementId: "G-VN2N32GCFE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// &Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)
const storage = getStorage(app)
const db = getFirestore(app);

//   todo export functions
export { auth, createUserWithEmailAndPassword, storage, ref, uploadBytes, getDownloadURL, collection , addDoc, db , signInWithEmailAndPassword ,onAuthStateChanged,}