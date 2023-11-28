import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUk6Jg1BoyjEinD2t--7IKuI4BqAoAXPE",
    authDomain: "portfolio-24d18.firebaseapp.com",
    projectId: "portfolio-24d18",
    storageBucket: "portfolio-24d18.appspot.com",
    messagingSenderId: "204523665752",
    appId: "1:204523665752:web:251cb82685f2e6040d8d2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};