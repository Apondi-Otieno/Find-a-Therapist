"use strict";

let popup = `

<div class="login hidden">
      <button class="close-modal ">&times;</button>

      <h2 class="heading-2 login__title">Login</h2>

      <form action="#">

        <label for="email">Email</label>
        <input type="email" required placeholder="Enter email">

        <label for="password">Password</label>
        <input type="password" required>

        <input type="submit" value="Login" id="btnSubmit">
      </form>
  </div>

  <div class="overlay hidden "></div>

`;

const body = document.querySelector("body");

body.insertAdjacentHTML("beforeend", popup);

const btnLogin = document.querySelector(".btn--login");
popup = document.querySelector(".login");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");

const popupDisplay = () => {
  popup.classList.remove("hidden");
  overlay.classList.remove("hidden");
  closeModal.classList.remove("hidden");
};

const popupHide = () => {
  popup.classList.add("hidden");
  overlay.classList.add("hidden");
  closeModal.classList.add("hidden");
};

btnLogin.addEventListener("click", popupDisplay);
overlay.addEventListener("click", popupHide);
closeModal.addEventListener("click", popupHide);
