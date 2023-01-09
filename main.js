window.addEventListener('DOMContentLoaded', main);

/**
 * THIS FUNCTION IS THE START OF THE JAVASCRIPT FILE.
 */
function main() {
    showHamburgerMenu();
    
}

/**
 * THIS FUNCTION SHOWS AND CLOSE THE HAMBURGER MENU, AND YOU CAN USE THE NAV-LINKS. 
 */

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

