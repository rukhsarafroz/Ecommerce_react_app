import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCWuc9y2ytFpxjcjs5yrF4NogEXLSuDykg",
  authDomain: "crwn-db-5ec12.firebaseapp.com",
  databaseURL: "https://crwn-db-5ec12.firebaseio.com",
  projectId: "crwn-db-5ec12",
  storageBucket: "crwn-db-5ec12.appspot.com",
  messagingSenderId: "286936076939",
  appId: "1:286936076939:web:08d340a44a19f333b4fa8e",
  measurementId: "G-LP1MN0EC3C",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
