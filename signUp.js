import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAwbQLLIwhBktTFUz19Xw6fBblHtpclVFk",
  authDomain: "plp-cohort-2-ef5dc.firebaseapp.com",
  projectId: "plp-cohort-2-ef5dc",
  storageBucket: "plp-cohort-2-ef5dc.appspot.com",
  messagingSenderId: "999483593453",
  appId: "1:999483593453:web:664b10e21c53e427bfb2e4",
  measurementId: "G-9EG53HJ2DY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");

const signupEmailIn = document.getElementById("email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const confirmSignupPasswordIn = document.getElementById(
  "confirm-password-signup"
);
const createacctbtn = document.getElementById("create-acct-btn");

const signupButton = document.getElementById("sign-up");
const returnBtn = document.getElementById("return-btn");

var email,
  password,
  signupEmail,
  signupPassword,
  confirmSignupEmail,
  confirmSignUpPassword;

createacctbtn.addEventListener("click", () => {
  var isVerified = true;

  signupEmail = signupEmailIn.value;
  confirmSignupEmail = confirmSignupEmailIn.value;
  if (signupEmail != confirmSignupEmail) {
    window.alert("Email fields do not match. Try again.");
    isVerified = false;
  }

  signupPassword = signupPasswordIn.value;
  confirmSignUpPassword = confirmSignupPasswordIn.value;
  if (signupPassword != confirmSignUpPassword) {
    window.alert("Password fields do not match. Try again.");
    isVerified = false;
  }

  if (
    signupEmail == null ||
    confirmSignupEmail == null ||
    signupPassword == null ||
    confirmSignUpPassword == null
  ) {
    window.alert("Please fill out all required fields.");
    isVerified = false;
  }

  if (isVerified) {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then(() => {
        window.alert("Success! Account Created");
        window.location = "./createTask.html";
      })
      .catch((error) => {
        const errorMessage = error.message;
        window.alert(errorMessage);

        // window.alert("Error Occurred. Try Again")
      });
  }
});

submitButton.addEventListener("click", function () {
  email = emailInput.value;
  password = passwordInput.value;

  if (isVerified) {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.alert("Success! Welcome Back");
        window.location = "./createTask.html";
      })
      .catch((error) => {
        const errorMessage = error.message;
        window.alert(errorMessage);
        // window.alert("Error Occurred. Try Again")
      });
  }
});

signupButton.addEventListener("click", () => {
  main.style.display = "none";
  createacct.style.display = "block";
});

returnBtn.addEventListener("click", function () {
  main.style.display = "block";
  createacct.style.display = "none";
});
