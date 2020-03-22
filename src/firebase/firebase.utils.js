import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCvVuEkYkixCLDkALj5SovxNvhGt_F-Sco",
  authDomain: "crown-store-7fbfa.firebaseapp.com",
  databaseURL: "https://crown-store-7fbfa.firebaseio.com",
  projectId: "crown-store-7fbfa",
  storageBucket: "crown-store-7fbfa.appspot.com",
  messagingSenderId: "962007557786",
  appId: "1:962007557786:web:7399b4d0808f76ed1ea123",
  measurementId: "G-XYF5Q06XFM"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
