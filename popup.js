"use strict";

const btnLogin = document.querySelector(".btn--login");
const popup = document.querySelector(".login");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");

btnLogin.addEventListener("click", () => {
  popup.classList.remove("hidden");
  overlay.classList.remove("hidden");
  closeModal.classList.remove("hidden");
});

overlay.addEventListener("click", () => {
  popup.classList.add("hidden");
  overlay.classList.add("hidden");
  closeModal.classList.add("hidden");
});

closeModal.addEventListener("click", () => {
  popup.classList.add("hidden");
  overlay.classList.add("hidden");
  closeModal.classList.add("hidden");
});
