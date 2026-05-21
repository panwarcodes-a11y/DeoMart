let cart = [];

function addToCart(name, price){
cart.push({name, price});
updateCart();
}

function updateCart(){

let items = document.getElementById("cart-items");
let count = document.getElementById("cart-count");
let totalBox = document.getElementById("cart-total");

items.innerHTML = "";

let total = 0;

cart.forEach(item => {
total += item.price;

items.innerHTML += `
<div class="cart-item">
<p>${item.name} - ₹${item.price}</p>
</div>
`;
});

count.innerText = cart.length;
totalBox.innerText = "Total: ₹" + total;
}

function openCart(){
document.getElementById("cart").style.right = "0";
}

function closeCart(){
document.getElementById("cart").style.right = "-100%";
}

---

# 🟢 ORDER BUTTON (IMPORTANT)

function placeOrder(){
if(cart.length === 0){
alert("Cart Empty");
return;
}

let total = cart.reduce((sum, item) => sum + item.price, 0);

// FIREBASE CALL
window.saveOrder(cart, total);

cart = [];
updateCart();
closeCart();
}
