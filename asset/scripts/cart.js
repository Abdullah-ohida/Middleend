const product = document.querySelectorAll('.product-item');
const addToCart = document.querySelectorAll(".btn-cart");
const cartContainer = document.querySelector(".container");
const cartCount = document.querySelector(".cart-quant");
const cart = document.querySelector(".cart");

let cartItem = [];
count = 0;

addToCart.forEach(event => {
    event.addEventListener("click", ()=>{
    cartItem.push(event.parentNode);
    count++;
    cartCount.textContent = count;
    })
})

cart.addEventListener('click', ()=>{
    window.open("./asset/pages/cart.html")
})



