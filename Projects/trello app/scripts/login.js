
import { auth , signInWithEmailAndPassword, } from "./firebase.js"

const loginForm = document.querySelector(".loginForm")
const userEmail = document.querySelector(".userEmail")
const userPassword = document.querySelector(".userPassword")
const btn = document.querySelector(".submit")
const errorDiv = document.querySelector(".error")
const passwordShow = document.querySelector(".show")

// *------------------------- password text enable or disable
passwordShow.addEventListener("click" , (event) => {

    if (userPassword.type == "password") {

        event.target.classList.remove("fa-eye")
        event.target.classList.add("fa-eye-slash")

        userPassword.type = "text"
    } else {

        event.target.classList.add("fa-eye")
        event.target.classList.remove("fa-eye-slash")
        userPassword.type = "password"
    }
} )

loginForm.addEventListener("submit", async (event) => {
    try {

        btn.disabled = true
        btn.innerHTML = "loading ..."
        event.preventDefault()
        console.log("hello");

        const email = userEmail.value
        const password = userPassword.value

        const result = await signInWithEmailAndPassword(auth , email , password)
        console.log("🚀 ~ loginForm.addEventListener ~ result:", result)

        btn.disabled = false
        btn.innerHTML = "Log In"
        alert("Successfully login");
        
        window.location = "./dashboard.html"

    } catch (error) {
        console.log("🚀 ~ loginForm.addEventListener ~ error:", error)
        errorDiv.innerHTML = "Invalid User Email or Password!"
        alert("Invalid User Email or Password!")
        errorDiv.style.color = "red"
        errorDiv.style.fontWeight = 600 
    }

})