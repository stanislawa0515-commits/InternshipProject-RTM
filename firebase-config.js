// Import the Firebase SDKs from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    doc, 
    addDoc, 
    setDoc, 
    getDocs, 
    getDoc, 
    updateDoc, 
    deleteDoc, 
    query, 
    where, 
    orderBy, 
    limit,
    onSnapshot,
    arrayUnion
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBd4X0so1FgU08Ms9RQckceYLr7IiVj16k",
    authDomain: "beats-system.firebaseapp.com",
    projectId: "beats-system",
    storageBucket: "beats-system.firebasestorage.app",
    messagingSenderId: "731985301330",
    appId: "1:731985301330:web:bb46cb39104c818de5348b",
    measurementId: "G-EE1NPWGRHR"
};

// Initialize Firebase and Firestore Database
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export instances and Firestore functions
export { 
    db, 
    collection, 
    doc, 
    addDoc, 
    setDoc, 
    getDocs, 
    getDoc, 
    updateDoc, 
    deleteDoc, 
    query, 
    where, 
    orderBy, 
    limit,
    onSnapshot,
    arrayUnion
};
