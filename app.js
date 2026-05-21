let cart = [];

function addToCart(name,price){
cart.push({name,price});
update();
}

function update(){

let box = document.getElementById("cart-items");
let count = document.getElementById("cart-count");
let totalBox = document.getElementById("cart-total");

box.innerHTML = "";

let total = 0;

cart.forEach(i=>{
total += i.price;
box.innerHTML += `<p>${i.name} - ₹${i.price}</p>`;
});

count.innerText = cart.length;
totalBox.innerText = "Total: ₹"+total;
}

function placeOrder(){
if(cart.length==0){
alert("Cart empty");
return;
}

let total = cart.reduce((a,b)=>a+b.price,0);

window.saveOrder(cart,total);

alert("Order placed");

cart=[];
update();
}
