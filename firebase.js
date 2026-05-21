import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
GoogleAuthProvider,
signInWithPopup,
signOut,
onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
getFirestore,
doc,
setDoc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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
const result = await signInWithPopup(auth,provider);
const user = result.user;

await setDoc(doc(db,"users",user.uid),{
name:user.displayName,
email:user.email,
photo:user.photoURL
});

alert("Welcome " + user.displayName);
}

// LOGOUT
window.logout = ()=>signOut(auth);

// UI
onAuthStateChanged(auth,(user)=>{

let box = document.getElementById("user-box");

if(user){
box.innerHTML = `
<img src="${user.photoURL}" width="50">
<p>${user.displayName}</p>
<button onclick="logout()">Logout</button>
`;
}else{
box.innerHTML = `
<button onclick="login()">Login With Google</button>
`;
}

});
