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
apiKey: "AIzaSyB4pbyr4_zy7A7r7aZDNhfv7KpPTe0zruU",
authDomain: "deomart-bf41e.firebaseapp.com",
projectId: "deomart-bf41e",
storageBucket: "deomart-bf41e.appspot.com",
messagingSenderId: "690880758075",
appId: "1:690880758075:web:2103a1d13781760d5a371e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

let user = null;

// LOGIN
window.login = async () => {
const res = await signInWithPopup(auth, provider);
user = res.user;

await setDoc(doc(db,"users",user.uid),{
name:user.displayName,
email:user.email,
photo:user.photoURL
});

document.getElementById("user-box").innerHTML =
"👤 " + user.displayName;
};

// SAVE ORDER
window.saveOrder = async (cart,total)=>{

await addDoc(collection(db,"orders"),{
user:user ? user.email : "guest",
items:cart,
total:total,
status:"Pending",
time:Date.now()
});

};

// USER STATE
onAuthStateChanged(auth, (user) => {
  if (user) {

    document.getElementById("user-box").innerHTML = `
      <div style="padding:10px">
        <img src="${user.photoURL}" width="50" style="border-radius:50%">
        <p>Welcome ${user.displayName}</p>
      </div>
    `;

  } else {
    document.getElementById("user-box").innerHTML = `
      <button onclick="login()">Login With Google</button>
    `;
  }
});
