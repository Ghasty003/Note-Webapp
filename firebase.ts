import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

interface Config {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
}

const firebaseConfig: Config = {
    apiKey: "AIzaSyBL-rCTUsXp7GdXLdxDaWwK_pSIXN77Pp4",
    authDomain: "note-webapp-168fe.firebaseapp.com",
    projectId: "note-webapp-168fe",
    storageBucket: "note-webapp-168fe.appspot.com",
    messagingSenderId: "967937720995",
    appId: "1:967937720995:web:c397c6a685644356b47516"
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();