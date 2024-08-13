import {auth , onAuthStateChanged ,} from "./firebase.js"

onAuthStateChanged( auth , (user) => {
    if (user) {
        console.log(user.uid);
        
    }else {
        console.log("SignOut");   
    }
})