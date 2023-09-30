import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var config = {
  apiKey: "AIzaSyC3JfWR_FjwCUDpQ-TQRgebDvZus2OiBxs",
  authDomain: "todo-vuetify-cf08f.firebaseapp.com",
  projectId: "todo-vuetify-cf08f",
  storageBucket: "todo-vuetify-cf08f.appspot.com",
  messagingSenderId: "904549710151",
  appId: "1:904549710151:web:ffea778d6aa06a7a59b462",
  measurementId: "G-TNQDXJTXFN"
};
firebase.initializeApp(config);
const db = firebase.firestore();

db.settings({ timestampInSnapshots: true});

export default db;