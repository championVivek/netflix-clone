import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCEPZccLUIfT6d3svnoAJQFaLsrWO7S19A",
  authDomain: "netflix-clone-6c958.firebaseapp.com",
  projectId: "netflix-clone-6c958",
  storageBucket: "netflix-clone-6c958.appspot.com",
  messagingSenderId: "181064473953",
  appId: "1:181064473953:web:2ac8646e22cb8156d23920",
  measurementId: "G-YYN21SV5WK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;