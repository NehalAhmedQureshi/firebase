
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// improt function from firebase to help in authientication

import {
  getAuth,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiW2QgN51kJk5othwl_7o2nnAOa5QKaRw",
  authDomain: "nehal-1e2b8.firebaseapp.com",
  projectId: "nehal-1e2b8",
  storageBucket: "nehal-1e2b8.appspot.com",
  messagingSenderId: "307690204571",
  appId: "1:307690204571:web:b846c93031977ef781853e",
  measurementId: "G-VTMS098M69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service

const auth = getAuth(app);

  const message = document.querySelector('.message')
document
.querySelector('.signUpForm')
.addEventListener('submit' , async (event) => {

  try {

    event.preventDefault()

    // get email & password for users from html website
    const email = event.target.children[0].value
    const password = event.target.children[1].value

    // sending email & password to firebase
    const result = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    
    console.log('result' , result);
    
    message.innerHTML = 'Sign-Up Successfully!'
    //  see current user
    console.log('current user' , auth.currentUser);
    // clear form
    event.target.reset()
  } catch (error) {
    
    console.log('error',error);
    message.innerHTML = error.message
  }
})