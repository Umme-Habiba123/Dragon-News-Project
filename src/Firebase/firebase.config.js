// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdmfV9LBvjQCFrkkh8Gu0LVaaK1k5BrKY",
  authDomain: "dragon-news-breaking-f9f13.firebaseapp.com",
  projectId: "dragon-news-breaking-f9f13",
  storageBucket: "dragon-news-breaking-f9f13.firebasestorage.app",
  messagingSenderId: "16990975157",
  appId: "1:16990975157:web:0d57e08ff3fe7eee137afc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;