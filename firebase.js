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

let currentUser = null;

---

# 🔐 LOGIN FIX (REAL WORKING)

window.login = async () => {
try{
const res = await signInWithPopup(auth, provider);
currentUser = res.user;

await setDoc(doc(db,"users",currentUser.uid),{
name: currentUser.displayName,
email: currentUser.email,
photo: currentUser.photoURL
});

document.getElementById("user-box").innerHTML =
"👤 " + currentUser.displayName;

alert("Login Success 🚀");
}
catch(e){
alert(e.message);
}
};

---

# 💾 SAVE ORDER (FIXED)

window.saveOrder = async (cart,total)=>{

try{

await addDoc(collection(db,"orders"),{
user: currentUser ? currentUser.email : "guest",
items: cart,
total: total,
status: "Pending",
time: Date.now()
});

}catch(e){
alert("Order error: " + e.message);
}

};

---

# 👤 AUTO USER CHECK

onAuthStateChanged(auth,(user)=>{
currentUser = user;

if(user){
document.getElementById("user-box").innerHTML =
"👤 " + user.displayName;
}
});
