// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};


// const firebaseConfig = {
//     apiKey: "AIzaSyA8aqsn1JT1TpRF_7fNW_W7SRIt5D76qgo",
//     authDomain: "furniture-werehouse.firebaseapp.com",
//     projectId: "furniture-werehouse",
//     storageBucket: "furniture-werehouse.appspot.com",
//     messagingSenderId: "786771888258",
//     appId: "1:786771888258:web:07f3b2c04158db24a5cc9b"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;