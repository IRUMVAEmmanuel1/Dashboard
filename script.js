'use strict';

// toogle active class on header when cliecked nav-toogle-btn

const header=document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-menu-toggle-btn]")

navToggleBtn.addEventListener("click", function(){
    header.classList.toggle("active");

})



// toogle ctx-menu when click on card-menu-btn

const menuBtn = document.querySelectorAll("[data-menu-btn]");

for(let i=0;i<menuBtn.length; i++){
    menuBtn[i].addEventListener("click", function(){
        this.nextElementSibling.classList.toggle("active");
    })
}