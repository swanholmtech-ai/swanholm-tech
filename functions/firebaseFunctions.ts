import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import { auth } from "../services/firebaseConfig";

const signUpWithFirebase = async (
  email: string,
  password: string
): Promise<UserCredential | null> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (error) {
    console.error("Error signing up with Firebase:", error);
    return null;
  }
};

export { signUpWithFirebase };
