// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDo21cKgZby-0SMaTpMZ_DsL03UVMimDSw",
    authDomain: "phutho-c2bce.firebaseapp.com",
    projectId: "phutho-c2bce",
    storageBucket: "phutho-c2bce.appspot.com",
    messagingSenderId: "1061192954867",
    appId: "1:1061192954867:web:9b757947f2ee45c1641886"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
