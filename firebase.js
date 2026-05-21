import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
GoogleAuthProvider,
signInWithPopup,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
getFirestore,
collection,
addDoc,
doc,
setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "deomart-bf41e.firebaseapp.com",
projectId: "deomart-bf41e",
storageBucket: "deomart-bf41e.appspot.com",
messagingSenderId: "690880758075",
appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

let user = null;

// LOGIN
window.login = async ()=>{
const result = await signInWithPopup(auth,provider);
user = result.user;

await setDoc(doc(db,"users",user.uid),{
name:user.displayName,
email:user.email,
photo:user.photoURL
});

alert("Welcome " + user.displayName);
};

// SAVE ORDER (GLOBAL)
window.saveOrder = async (order)=>{

await addDoc(collection(db,"orders"),order);

};

// USER STATE
onAuthStateChanged(auth,(u)=>{
user = u;
});
