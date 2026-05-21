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

let currentUser = null;

---

# 🔐 LOGIN

window.login = async () => {
const result = await signInWithPopup(auth, provider);
currentUser = result.user;

await setDoc(doc(db, "users", currentUser.uid), {
name: currentUser.displayName,
email: currentUser.email,
photo: currentUser.photoURL
});

alert("Welcome " + currentUser.displayName);
};

---

# 📦 ORDER SAVE SYSTEM

window.saveOrder = async (cart, total) => {

if(!currentUser){
alert("Please login first");
return;
}

const orderData = {
userId: currentUser.uid,
items: cart,
total: total,
status: "Pending",
time: Date.now()
};

await addDoc(collection(db, "orders"), orderData);

alert("Order Placed Successfully 🚀");
};

---

# 👤 USER CHECK

onAuthStateChanged(auth, (user) => {
currentUser = user;
});
