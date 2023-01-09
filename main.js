window.addEventListener('DOMContentLoaded', main);

function main() {
    addEventListeners();
    
}

function addEventListeners() {
    const burgerBtn = document.querySelector('#hamburger-menu');
    burgerBtn.addEventListener('click', showBurger)
}

function showBurger() {
   
    const header = document.querySelector("header");
    header.classList.toggle("showmenu");
}