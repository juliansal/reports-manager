// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQkwWzM2QiwpDZ8jbVSBF4-q5ujj3qVPo",
  authDomain: "reports-repo-a84d7.firebaseapp.com",
  projectId: "reports-repo-a84d7",
  storageBucket: "reports-repo-a84d7.appspot.com",
  messagingSenderId: "379226435783",
  appId: "1:379226435783:web:95ead21cf04e7ccd364ee2",
  measurementId: "G-LQV0CJE5QY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);