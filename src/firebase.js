import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDCjMPRvKbgUMZ56WGsD1nwG2jp6I0ZfQU",
    authDomain: "netflix-build-7f7c6.firebaseapp.com",
    projectId: "netflix-build-7f7c6",
    storageBucket: "netflix-build-7f7c6.appspot.com",
    messagingSenderId: "992957150993",
    appId: "1:992957150993:web:d1049bb31e75f36bd7beb0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;