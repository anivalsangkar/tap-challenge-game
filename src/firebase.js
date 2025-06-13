// src/firebase.js

// 1) Core Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getAnalytics }  from 'firebase/analytics';

// 2) Firebase Auth
import {
  getAuth,
  GoogleAuthProvider
} from 'firebase/auth';

// 3) Firestore (we’ll need this next)
import { getFirestore } from 'firebase/firestore';

// ————————————————————————————————————————————————
// Your Firebase web app configuration
// (replace with exactly what you’ve copied from the console)
const firebaseConfig = {
  apiKey:            "AIzaSyCrBbn-wkQDxVa7acewAGjm8L3bxd4m5Rc",
  authDomain:        "tapchallengegame-6255f.firebaseapp.com",
  projectId:         "tapchallengegame-6255f",
  storageBucket:     "tapchallengegame-6255f.appspot.com",
  messagingSenderId: "21650027511",
  appId:             "1:21650027511:web:10b0ad43dcc47b6f3df4f2",
  measurementId:     "G-TDLDQDZRSR"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// (Optional) Analytics — only works in production domains
export const analytics = getAnalytics(app);

// Auth exports
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Firestore export (we’ll use this in the next step)
export const db = getFirestore(app);
