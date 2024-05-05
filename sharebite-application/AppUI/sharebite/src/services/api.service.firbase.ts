import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyC5UYieIuXz6ZZAUUWzhdsJGBx515o_uN4",
  authDomain: "sharebite-79c85.firebaseapp.com",
  projectId: "sharebite-79c85",
  storageBucket: "sharebite-79c85.appspot.com",
  messagingSenderId: "453512320390",
  appId: "1:453512320390:web:99e471b79bee672dfc4807"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseStorage = getStorage(app);