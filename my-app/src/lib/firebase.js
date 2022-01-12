import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, getAuth, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCEvdtEX4tnm7sX90UzK-tuDyKu6vRnw4",
  authDomain: "totallook-609cb.firebaseapp.com",
  projectId: "totallook-609cb",
  storageBucket: "totallook-609cb.appspot.com",
  messagingSenderId: "336438149732",
  appId: "1:336438149732:web:30168d3445c18385d91571",
};

// Initialize Firebase

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

export const login = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => signOut(auth);
