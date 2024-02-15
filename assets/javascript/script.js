const btnMenu = document.querySelector('.menu-bar');
const navContent = document.querySelector('.nav-content');
const nav = document.querySelector('.nav');
const navHeight = nav.getBoundingClientRect().height;
const hero = document.querySelector('.hero-section');

/***********************************************************************/
/********************** Toggle Navbar Menu */
/***********************************************************************/
btnMenu.addEventListener('click', () => {
  navContent.classList.toggle('hidden');
});

/***********************************************************************/
/********************** Navbar Intersection Observer */
/***********************************************************************/
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else {
    nav.classList.remove('sticky');
  }
};

const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `${navHeight}px`,
};

const navObserver = new IntersectionObserver(stickyNav, obsOptions);
navObserver.observe(hero);
