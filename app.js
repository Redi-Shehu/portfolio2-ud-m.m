// const hamburgerContainer = document.querySelector("#header__main-nav");
// const hamburger = document.querySelector(".header__main-nav--hamburger");
// const links = document.querySelectorAll(".header__main-nav--links li");

// hamburger.addEventListener("click", () => {
//   hamburgerContainer.classList.toggle("clicked");
//   links.forEach((link) => {
//     link.classList.toggle("fade");
//   });
// });

const mainNav = document.querySelector("#header__main-nav");
const hamburger = document.querySelector(".header__main-nav--hamburger");
const links = document.querySelectorAll(".header__main-nav--links li");
console.log(links);

hamburger.addEventListener("click", function () {
  mainNav.classList.toggle("clicked");

  links.forEach(function (link) {
    link.classList.toggle("fade");
  });
});
