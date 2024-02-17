"use strict";
const btnMenu = document.querySelector(".menu-bar");
const navContent = document.querySelector(".nav-content");
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;
const hero = document.querySelector(".hero-section");
const heroImg = document.querySelector(".hero__img");
const heroContent = document.querySelector(".hero__content");
const allImgLazy = document.querySelectorAll(".lazy-img");
const counters = document.querySelectorAll(".statistics__box span");
const statisticsSection = document.querySelector(".statistics-section");

/***********************************************************************/
/********************** Toggle Navbar Menu */
/***********************************************************************/
btnMenu.addEventListener("click", () => {
  navContent.classList.toggle("hidden");
});

/***********************************************************************/
/********************** Navbar Intersection Observer */
/***********************************************************************/
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else {
    nav.classList.remove("sticky");
  }
};

const navObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${navHeight}px`,
});
navObserver.observe(hero);

/***********************************************************************/
/********************** Revealing Intersection Observer */
/***********************************************************************/
const replacing = function (element, oldClass, newClass) {
  element.classList.replace(oldClass, newClass);
};

const revealingSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  replacing(heroImg, "fade-right", "fade-in");
  replacing(heroContent, "fade-left", "fade-in");

  observer.unobserve(hero);
};

const sectionObserver = new IntersectionObserver(revealingSection, {
  root: null,
  threshold: 0,
});
sectionObserver.observe(hero);

/***********************************************************************/
/********************** Lazy Blur Effect */
/***********************************************************************/

const lazyBlurImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("lazy-img");
  observer.unobserve(entry.target);
};

const lazyBlurImgObserver = new IntersectionObserver(lazyBlurImg, {
  root: null,
  threshold: 1,
});

allImgLazy.forEach((img) => {
  lazyBlurImgObserver.observe(img);
});

/***********************************************************************/
/********************** Counter zero to Target */
/***********************************************************************/
const countingAnimation = function () {
  counters.forEach((count) => {
    let startValue = 0;
    let endValue = parseInt(count.dataset.count);
    let duration = Math.floor(1000 / endValue);

    const counter = setInterval(function () {
      startValue++;
      count.textContent = `+${startValue}`;
      if (startValue === endValue) clearInterval(counter);
    }, duration);
  });
};

const counter = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  countingAnimation();

  observer.unobserve(statisticsSection);
};

const counterObserver = new IntersectionObserver(counter, {
  root: null,
  threshold: 0.5,
});

counterObserver.observe(statisticsSection);
