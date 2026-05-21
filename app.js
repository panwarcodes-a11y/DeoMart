let cart = [];

function addToCart(name,price){
cart.push({name,price});
updateCart();
}

function updateCart(){

let box = document.getElementById("cart-items");
let count = document.getElementById("cart-count");
let totalBox = document.getElementById("cart-total");

box.innerHTML = "";

let total = 0;

cart.forEach(item=>{
total += item.price;
box.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
});

count.innerText = cart.length;
totalBox.innerText = total;
}

function placeOrder(){

if(cart.length === 0){
alert("Cart Empty");
return;
}

let total = cart.reduce((a,b)=>a+b.price,0);

window.saveOrder(cart,total);

alert("Order Placed Successfully 🚀");

cart=[];
updateCart();
}
