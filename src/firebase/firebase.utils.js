import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAhSSAAlX6Zcy9_Y-l9znWWSPVfjKdD43E",
  authDomain: "clothes-shop-app.firebaseapp.com",
  projectId: "clothes-shop-app",
  storageBucket: "clothes-shop-app.appspot.com",
  messagingSenderId: "729356314660",
  appId: "1:729356314660:web:9c8b036f80283d7c6910b1",
  measurementId: "G-6CLDSQJGPJ",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;