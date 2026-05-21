let cart = [];

function addToCart(name,price){
cart.push({name,price});
updateCart();
}

function updateCart(){

let items = document.getElementById("cart-items");
let count = document.getElementById("cart-count");
let totalBox = document.getElementById("cart-total");

items.innerHTML = "";

let total = 0;

cart.forEach(item=>{
total += item.price;

items.innerHTML += `
<div class="item">
${item.name} - ₹${item.price}
</div>
`;
});

count.innerText = cart.length;
totalBox.innerText = "Total: ₹" + total;
}

function openCart(){
document.getElementById("cart").style.right="0";
}

function closeCart(){
document.getElementById("cart").style.right="-100%";
}

// FINAL ORDER SYSTEM
async function placeOrder(){

if(cart.length === 0){
alert("Cart Empty");
return;
}

let otp = Math.floor(1000 + Math.random()*9000);
let total = cart.reduce((sum,i)=>sum+i.price,0);

let order = {
items:cart,
total:total,
otp:otp,
status:"Pending",
createdAt:Date.now()
};

// Firebase function call
await window.saveOrder(order);

alert("Order Placed 🚀 OTP: " + otp);

cart = [];
updateCart();
closeCart();
}
