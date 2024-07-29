import { auth, signInWithEmailAndPassword } from "./firebase.js"

const form = document.querySelector("#loginForm")
const errorMsg = document.querySelector("#error")
const showPassword = document.querySelector("#showPassword") 
const password = document.querySelector("#password")

showPassword.addEventListener("click" , (e) => {
    console.log(event.target.checked);
    if (event.target.checked) {
        password.type = "text"
        console.log("🚀 ~ showPassword.addEventListener ~ password:", password)
    } else {
        password.type = "password"
    }
} )

form.addEventListener('submit', async (event) => {
    try {
        event.preventDefault();
        const email = document.querySelector("#email").value
        const password = document.querySelector("#password").value

        const result = await signInWithEmailAndPassword(auth , email, password)
        console.log("🚀 ~ form.addEventListener ~ result:", result)
        alert('Congratulation! You are login successfully')
        window.location = "./dashboard.html"
    } catch (error) {
    console.log("🚀 ~ form.addEventListener ~ error:", error.message)
    errorMsg.innerHTML = "Invalid User Email or Password"
    }
})