// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp9Pybk3V_KkmOgAkb56VXvvXXKdJ8j1c",
  authDomain: "modi-africa.firebaseapp.com",
  projectId: "modi-africa",
  storageBucket: "modi-africa.appspot.com",
  messagingSenderId: "692182462722",
  appId: "1:692182462722:web:949b4c29b55f4dc926d21b",
  measurementId: "G-RTHY6GPNLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//SIGN UP FUNCTION
function signUp(){
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndpassword(email.value,password.value);

    promise.catch(e=>alert(e.message));
    alert("You have successfully Signed up to MODI AFRICA.")
}

//log in FUNCTION
function login(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.loginWithEmailandPassword(email.value,password.value);

    promise.catch(e=>alert(e.message));
    alert("You have successfully logged in to MODI AFRICA.")
}

//SIGN OUT
function signOut(){
    auth.signOut();
    alert("You Have successfully Signed Out.")
}

//active user to homepage
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        var email = user.email;
        alert("Active user " +email);
    }else{ 
        alert("No Active User Found");
    }
})