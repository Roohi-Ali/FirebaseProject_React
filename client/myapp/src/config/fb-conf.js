
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBstkgu1dEx-yto1qofvWfVYuUodfI_M8Q",
  authDomain: "myfirebaseproject1-42e1f.firebaseapp.com",
  projectId: "myfirebaseproject1-42e1f",
  storageBucket: "myfirebaseproject1-42e1f.appspot.com",
  messagingSenderId: "95685063281",
  appId: "1:95685063281:web:2a0fdaaa0c783f728e61d0",
  measurementId: "G-TZHCG6KTFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)


// const analytics = getAnalytics(app);