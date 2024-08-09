import {auth , createUserWithEmailAndPassword , storage , ref , uploadBytes , getDownloadURL , db , collection , addDoc} from "./firebase.js"
const signUpForm = document.querySelector("#signUpForm")
const userimg = document.querySelector("#userimg")
const userImg = document.querySelector(".userImg")
const userName = document.querySelector(".userName")
const fatherName = document.querySelector(".fatherName")
const userEmail = document.querySelector(".userEmail")
const userPassword = document.querySelector(".userPassword")
const confirmPassword = document.querySelector(".confirmPassword")


signUpForm.addEventListener("submit" , async(event) => {
    const collectionRef = collection(db , `${userEmail.value}`)
    
    event.preventDefault()
    console.log(event.target);
    
    
    const profileImg = userImg.files[0]
    // ! img save in storage bucket
    const storageRef = ref(storage, `userProfiles/${userName.value}'s img`);
        // we are uploading the file here to the storage bucket
    const imgSnapShot = await uploadBytes(storageRef, profileImg);
    // get the download url of the file
    const imgUrl = await getDownloadURL(storageRef);

    const userInfo = {
        userImg : imgUrl,
        userName : userName.value,
        fatherName : fatherName.value,
        userEmail : userEmail.value,
        userPassword : userPassword.value,
    }
    console.log("🚀 ~ signUpForm.addEventListener ~ userInfo:", userInfo)
    try {
        const result = await addDoc(collectionRef , userInfo)
        console.log("🚀 ~ signUpForm.addEventListener ~ result:", result)
        console.log("🚀 ~ signUpForm.addEventListener ~ result:", result.id)
    } catch (error) {
        console.log("🚀 ~ signUpForm.addEventListener ~ error:", error)
        
    }

})

