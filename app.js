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
