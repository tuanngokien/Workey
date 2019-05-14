import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB-APoGYgUdnG28TKCS7bdMMxsJnxnlaqU",
  authDomain: "workey-6afb1.firebaseapp.com",
  databaseURL: "https://workey-6afb1.firebaseio.com",
  projectId: "workey-6afb1",
  storageBucket: "workey-6afb1.appspot.com",
  messagingSenderId: "344293148391",
  appId: "1:344293148391:web:102979d8d394385e"
};

let app = Firebase.initializeApp(firebaseConfig); 
let db = app.database(); 
console.log(db);
export default db;
