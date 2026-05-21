let cart = [];

function addToCart(name,price){
cart.push({name,price});
updateCart();
}

function updateCart(){

let box = document.getElementById("cart-items");
let totalBox = document.getElementById("cart-total");

box.innerHTML = "";

let total = 0;

cart.forEach(i=>{
total += i.price;
box.innerHTML += `<p>${i.name} - ₹${i.price}</p>`;
});

totalBox.innerText = total;
}

function openCart(){
document.getElementById("cart").style.right="0";
}

function closeCart(){
document.getElementById("cart").style.right="-100%";
}

function placeOrder(){

if(cart.length==0){
alert("Cart Empty");
return;
}

let total = cart.reduce((a,b)=>a+b.price,0);

window.login = async () => {
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  console.log("LOGIN SUCCESS:", user);
};
