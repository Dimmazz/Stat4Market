const mobileNav = document.querySelector(".header__mobile-nav ul")

document.querySelector(".header__mobile-nav").addEventListener("click", () => {
  mobileNav.classList.toggle("hidden")
  console.log(mobileNav.classList);
})