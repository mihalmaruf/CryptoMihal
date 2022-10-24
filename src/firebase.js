// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWmMW3bgfqXhozo-NzFVqTLI_RMPJcwWk",
    authDomain: "cryptocoin-b5ab2.firebaseapp.com",
    projectId: "cryptocoin-b5ab2",
    storageBucket: "cryptocoin-b5ab2.appspot.com",
    messagingSenderId: "867573729322",
    appId: "1:867573729322:web:da3b75d3476d925a011b53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;