import { createUserWithEmailAndPassword, signInWithEmailAndPassword,signInAnonymously, signOut } from "firebase/auth";
import { auth } from "../client";

export async function createUserWithEmailPassword(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user;
      // ...
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      throw error;
      // ..
    });
}
export async function loginUserWithEmailPassword(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user;
      // ...
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      throw error;
    });
}

export async function anonLogin() {
    return signInAnonymously(auth).then((userCredential) => {
      // Signed in  
      const user = userCredential.user;
      return user;
    }).catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      throw error;
    })
}

export async function logoutUser() {
  return signOut(auth)
    .then(() => {
      // Sign-out successful.
      return true;
    })
    .catch((error) => {
      // An error happened.
      throw error;
    });
}
