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
setDoc,
doc
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

// LOGIN
window.login = async ()=>{
const res = await signInWithPopup(auth,provider);
const user = res.user;

await setDoc(doc(db,"users",user.uid),{
name:user.displayName,
email:user.email
});

document.getElementById("user-box").innerHTML =
"Hello " + user.displayName;
};

// SAVE ORDER
window.saveOrder = async (cart,total)=>{

await addDoc(collection(db,"orders"),{
items:cart,
total:total,
status:"Pending",
time:Date.now()
});

};
