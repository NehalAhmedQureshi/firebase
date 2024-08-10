// ? ************************* import functions from firebase.js *********************************
import { auth, createUserWithEmailAndPassword, storage, ref, uploadBytes, getDownloadURL, db, collection, addDoc } from "./firebase.js"

// ? ************************* import elements or form from html file *********************************
const signUpForm = document.querySelector("#signUpForm")
const userimg = document.querySelector("#userimg")
const userImg = document.querySelector(".userImg")
const userName = document.querySelector(".userName")
const fatherName = document.querySelector(".fatherName")
const userEmail = document.querySelector(".userEmail")
const userPassword = document.querySelector(".userPassword")
const confirmPassword = document.querySelector(".confirmPassword")
const errorMessage = document.querySelector(".message")
const passwordShow = document.querySelector(".passwordShow")
const confirmPasswordShow = document.querySelector(".confirmPasswordShow")




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
confirmPasswordShow.addEventListener("click" , (event) => {

    if (confirmPassword.type == "password") {

        event.target.classList.remove("fa-eye")
        event.target.classList.add("fa-eye-slash")

        confirmPassword.type = "text"
    } else {
        
        event.target.classList.add("fa-eye")
        event.target.classList.remove("fa-eye-slash")
        confirmPassword.type = "password"
    }
} )

// ? ************************* password validation *********************************
function validatePassword() {
    if (userPassword.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords Don't Match");
    } else {
        confirmPassword.setCustomValidity('');
    }
}
userPassword.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;

// ? ************************* add event litener on signUp form *********************************
signUpForm.addEventListener("submit", async (event) => {

    try {

        // * ------------------- make collection reference for user img --------------------
        const collectionRef = collection(db, `${userEmail.value}'s info`)

       // * ------------------- change button text and disable property --------------------
        document.querySelector(".submit").innerHTML = "loading ..."
        document.querySelector(".submit").disabled = true
        
        // *------------ stop event listener refresh
        event.preventDefault()
        console.log(event.target);

        // * ------------ getting email and password value from input
        const email = userEmail.value
        const password = userPassword.value
        
        // * ------------ getting img 
        const profileImg = userImg.files[0]

        // *---------- create storage ref for image saving
        const storageRef = ref(storage, `profileImg/${userEmail.value}'s img`);

        // * --------we are uploading the file here to the storage bucket
        const imgSnapShot = await uploadBytes(storageRef, profileImg);
        console.log("🚀 ~ signUpForm.addEventListener ~ imgSnapShot:", imgSnapShot)
        // * ---------- get the download url of the file
        const imgUrl = await getDownloadURL(storageRef);
        console.log("🚀 ~ signUpForm.addEventListener ~ imgUrl:", imgUrl)

        // * ---------- make object of userInfo
        const userInfo = {
            userImg: imgUrl,
            userName: userName.value,
            fatherName: fatherName.value,
            userEmail: userEmail.value,
            userPassword: userPassword.value,
        }

        // *---------- signUp user via email and password
        const signUp =  await createUserWithEmailAndPassword(auth , email , password)

        // *--------- change button text and disabled property after getting results
        document.querySelector(".submit").innerHTML = "SignUp"
        document.querySelector(".submit").disabled = false

        
        // *------------ reset form after successfully signUp
        signUpForm.reset()
        alert("Successfully SignUp")
        
        // *----------- save userInfo in database
        const result = await addDoc(collectionRef, userInfo)
        
        // * change window location after Successfully signUp
        window.location = "./login.html"

    } catch (error) {

        // *------------ log error if found 
        console.log("🚀 ~ signUpForm.addEventListener ~ error:", error.message)

        // * ------------- change button text and disable property after recieving an error
        document.querySelector(".submit").innerHTML = "SignUp"
        document.querySelector(".submit").disabled = false

        // * ------------ set errror message and style while getting an error
        errorMessage.innerHTML = "Email already in use"
        errorMessage.style.color = "red"
    }

})

