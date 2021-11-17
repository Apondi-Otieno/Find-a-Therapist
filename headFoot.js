"use strict";

let header = document.querySelector(".header");
let footer = document.querySelector(".footer");

header.innerHTML = `
   <img src="img/logo.jpg" alt="logo" class="logo">
   <nav class="nav">
      <a href="#" class="nav__item">Home</a>
      <a href="#" class="nav__item">About</a>
      <a href="#" class="nav__item">Services</a>
      <a href="#" class="nav__item">Contact</a>
   </nav>

   <button class="btn btn--login">
      Login
   </button>
`;

footer.innerHTML = `
   <img src="img/logo.jpg" alt="logo" class="logo footer__logo">
   <p class="footer__text">Copyright &copy;. Find a Therapist kenya</p>
`;
