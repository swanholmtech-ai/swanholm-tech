import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJnnnwB1OGydP1LAufIHIuQz0TgDOVRfo",
  authDomain: "swanholm-tech.firebaseapp.com",
  projectId: "swanholm-tech",
  storageBucket: "swanholm-tech.firebasestorage.app",
  messagingSenderId: "461640989318",
  appId: "1:461640989318:web:528bfcc0f40d57c0cbaf07",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
