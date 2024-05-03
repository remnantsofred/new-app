
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // import { getAuth } from "firebase/auth";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";


// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
  //   apiKey: "AIzaSyBBoiLPu7_MQtORnBFXzuYNx9Usrhw5Hp0",
  //   authDomain: "hufflam-task-tracker.firebaseapp.com",
  //   projectId: "hufflam-task-tracker",
  //   storageBucket: "hufflam-task-tracker.appspot.com",
  //   messagingSenderId: "541359322776",
  //   appId: "1:541359322776:web:438f16a0f3b08f1a30c2ed",
  //   measurementId: "G-YD4DKV6JB2"
  // };
  
  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  // // const auth = getAuth(app);
  // const provider = new GoogleAuthProvider();
  
  
  // const auth = getAuth();
  // signInWithPopup(auth, provider)
  //   .then((result) => {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     const credential = GoogleAuthProvider.credentialFromResult(result);
    //     const token = credential.accessToken;
    //     // The signed-in user info.
    //     const user = result.user;
    //     // IdP data available using getAdditionalUserInfo(result)
    //     // ...
    //   }).catch((error) => {
      //     // Handle Errors here.
      //     const errorCode = error.code;
      //     const errorMessage = error.message;
      //     // The email of the user's account used.
      //     const email = error.customData.email;
      //     // The AuthCredential type that was used.
      //     const credential = GoogleAuthProvider.credentialFromError(error);
      //     // ...
      //   });
      
      // Import the functions you need from the SDKs you need
      // import { initializeApp } from "firebase/app";
      // import { getAnalytics } from "firebase/analytics";
      // // TODO: Add SDKs for Firebase products that you want to use
      // // https://firebase.google.com/docs/web/setup#available-libraries
      
      // // Your web app's Firebase configuration
      // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      // const firebaseConfig = {
      //   apiKey: "AIzaSyBBoiLPu7_MQtORnBFXzuYNx9Usrhw5Hp0",
      //   authDomain: "hufflam-task-tracker.firebaseapp.com",
      //   projectId: "hufflam-task-tracker",
      //   storageBucket: "hufflam-task-tracker.appspot.com",
      //   messagingSenderId: "541359322776",
      //   appId: "1:541359322776:web:438f16a0f3b08f1a30c2ed",
      //   measurementId: "G-YD4DKV6JB2"
      // };
      
      // // Initialize Firebase
      // const app = initializeApp(firebaseConfig);
      // const analytics = getAnalytics(app);
      
      // console.log(firebase)



const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

/// Sign in event handlers

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');
const userDetails = document.getElementById('userDetails');

auth.onAuthStateChanged(user => {
    if (user) {
        // signed in
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
    } else {
        // not signed in
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = '';
    }
});