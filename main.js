window.addEventListener('DOMContentLoaded', main);

/****  THIS IS THE START OF THE JAVASCRIPT FILE   ****/
function main() {
    showHamburgerMenu();
    
}
/****  THIS FUNCTION SHOWS THE CONTENT OF THE HAMBURGER MENU   ****/
function showHamburgerMenu() {
    const header = document.querySelector("header");
    const burgerBtn = document.querySelector('#hamburger-menu');
    const menu = document.querySelectorAll('.menu a');
   
    burgerBtn.addEventListener('click', function(){
        burgerBtn.classList.toggle('showmenu')
        header.classList.toggle("showmenu")

    });

    for (const link of menu) {
        link.addEventListener('click', function (){
            header.classList.toggle("showmenu");
            burgerBtn.classList.toggle('menu a')
        })   
    }
}

