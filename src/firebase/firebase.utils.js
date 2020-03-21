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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
