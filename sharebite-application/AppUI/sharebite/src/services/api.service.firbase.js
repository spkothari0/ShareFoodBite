import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

export const locationKeyConstant = import.meta.env.LOCATION_KEY_CONSTANT;
const firebaseConfig = {
  apiKey: "AIzaSyC5UYieIuXz6ZZAUUWzhdsJGBx515o_uN4",
  authDomain: "sharebite-79c85.firebaseapp.com",
  projectId: "sharebite-79c85",
  storageBucket: "sharebite-79c85.appspot.com",
  messagingSenderId: "453512320390",
  appId: "1:453512320390:web:99e471b79bee672dfc4807"
};

// const firebaseConfig = {
//   apiKey: import.meta.env.FIREBASE_API_KEY,
//   authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.FIREBASE_APP_ID
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseStorage = getStorage(app);