// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnavPKdoZUxpNSj1FlQhGY3MSrqZYqrkw",
    authDomain: "orgafe-73790.firebaseapp.com",
    projectId: "orgafe-73790",
    storageBucket: "orgafe-73790.appspot.com",
    messagingSenderId: "965892608365",
    appId: "1:965892608365:web:812b4aebc2091788b1ca64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;