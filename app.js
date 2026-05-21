console.log("DeoMart Premium UI Loaded");

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{
card.addEventListener("click",()=>{
alert(card.innerText + " Coming Soon!");
});
});
