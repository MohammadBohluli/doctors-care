const btnMenu = document.querySelector('.menu-bar');
const navContent = document.querySelector('.nav-content');
btnMenu.addEventListener('click', () => {
  navContent.classList.toggle('hidden');
});
