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
<p>${item.name} - ₹${item.price}</p>
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

// ORDER SYSTEM
function placeOrder(){

if(cart.length === 0){
alert("Cart Empty");
return;
}

let otp = Math.floor(1000 + Math.random()*9000);

let order = {
items:cart,
otp:otp,
status:"Pending",
time:Date.now()
};

alert("Order Placed! OTP: " + otp);

console.log(order);

cart = [];
updateCart();
closeCart();
}
