'use strict';

// add event on element

const addEventOnElem = function(elem, type, callback){
    if(elem.length>1){
        for(let i=0; i < elem.length;i++){
            elem[i].addEventListener(type,callback);
        }
    } else{
        elem.addEventListener(type,callback);
    }
}

// navbar toggle
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
console.log(navToggler);
console.log(navToggler);
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function(){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

// close navbar when click on any navbar links

const navLinks = document.querySelectorAll("[data-nav-link]");

const closeNavbar = function(){
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}

addEventOnElem(navLinks,"click", closeNavbar);

// Header active when scroll down
const header = document.querySelector("[data-header]");

const headerActive = function(){
    if(window.scrollY > 100){
        header.classList.add("active");
    }
    else{
        header.classList.remove("active");
    }
}

addEventOnElem(window, "scroll", headerActive);