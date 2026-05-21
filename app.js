console.log("DeoMart Loaded");

let cart = [];

function addToCart(name,price){

cart.push({name,price});

updateCart();

openCart();

}

function updateCart(){

const cartItems =
document.getElementById("cart-items");

const cartCount =
document.getElementById("cart-count");

const cartTotal =
document.getElementById("cart-total");

cartItems.innerHTML = "";

let total = 0;

cart.forEach((item,index)=>{

total += item.price;

cartItems.innerHTML += `
<div class="cart-item">

<h4>${item.name}</h4>

<p>₹${item.price}</p>

</div>
`;

});

cartCount.innerText = cart.length;

cartTotal.innerText =
"Total: ₹" + total;

}

function openCart(){

document.getElementById("cartDrawer")
.style.right = "0";

}

function closeCart(){

document.getElementById("cartDrawer")
.style.right = "-100%";

}

document.querySelector(".fa-shopping-cart")
.addEventListener("click",openCart);

const cards =
document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("click",()=>{

alert(card.innerText + " Coming Soon!");

});

});
