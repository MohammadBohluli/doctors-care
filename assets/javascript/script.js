const btnMenu = document.querySelector(".menu-bar");
const navContent = document.querySelector(".wrapper-nav");
btnMenu.addEventListener("click", () => {
  navContent.classList.toggle("hidden");
});
