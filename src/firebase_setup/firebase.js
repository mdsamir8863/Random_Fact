// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Firestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJXV0sB8AEAMcT4V0J7jt7Cxj1-zf1AUQ",
  authDomain: "store-6eef2.firebaseapp.com",
  projectId: "store-6eef2",
  storageBucket: "store-6eef2.appspot.com",
  messagingSenderId: "684485131611",
  appId: "1:684485131611:web:3e9d253769ca7e49ae2e7e",
  measurementId: "G-76EDCMHN3X",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore = Firestore.Firestore;
// export { Firestore } from "firebase/firestore";

