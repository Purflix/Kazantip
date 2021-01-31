'use strict';

const body = document.querySelector("body");
const burgerMenu = document.querySelector(".burger");
const headerNav = document.querySelector(".nav");
const header = document.querySelector(".header");

// ==> Burger menu <==
burgerMenu.addEventListener("click", function (event) {
   event.preventDefault();
   burgerMenu.classList.toggle("burger--active");
   body.classList.toggle("body-lock");
   headerNav.classList.toggle("nav--active");
   header.classList.toggle("header--active");
});
// ==X Burger menu X==

// ==> Sticky header <==
function stickyHeader() {
   const nextElement = header.nextElementSibling;
   header.classList.add("fixedToTop"); 
   nextElement.style.marginTop = header.offsetHeight + "px";
   nextElement.style.minHeight = "90vh";
}
stickyHeader();
// ==X Sticky header X==