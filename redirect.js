const btnBook = document.querySelectorAll(".btn--book");

btnBook.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn);
    const parent = btn.closest(".listing");

    let imgSrc = parent.querySelector(".listing__img").src;
    localStorage.setItem("imgUrl", imgSrc);

    window.open("detail.html", "_self");
  });
});

const docImg = document.querySelector(".doc__img");
if (docImg) {
  let imgUrl = localStorage.getItem("imgUrl");

  document.querySelector(".doc__img").src = imgUrl;
}
