const hamburger = document.querySelector("#hamburger");
const closeButton = document.querySelector("#navigation-close");
const navLinks = document.querySelector(".navigation-links");
const navPages = document.querySelectorAll(".navigation-link");
const navigation = document.querySelector(".navigation-links-selected");

hamburger.addEventListener("click", event => {
  event.stopPropagation();
  navLinks.classList.add("navigation-links-selected");
  hamburger.classList.toggle("btn-toggle");
  closeButton.classList.toggle("btn-toggle");

  TweenMax.to(".link-one", 1, {
    opacity: 1,
    ease: Power4.easeOut,
    x: 100
  });
  TweenMax.to(".link-two", 1.3, {
    opacity: 1,
    ease: Power4.easeOut,
    x: 100
  });
  TweenMax.to(".link-three", 1.6, {
    opacity: 1,
    ease: Power4.easeOut,
    x: 100
  });
  TweenMax.to(".link-four", 1.9, {
    opacity: 1,
    ease: Power4.easeOut,
    x: 100
  });
  TweenMax.to(".link-five", 2.2, {
    opacity: 1,
    ease: Power4.easeOut,
    x: 100
  });

  TweenMax.to(".navigation-links-selected", 1, {
    opacity: 0.95,
    ease: Power1.easeOut,
    top: "7%"
  });
});

closeButton.addEventListener("click", event => {
  event.stopPropagation();
  navLinks.classList.remove("navigation-links-selected");
  navLinks.classList.add("testing");
  hamburger.classList.toggle("btn-toggle");
  closeButton.classList.toggle("btn-toggle");

  TweenMax.to(".navigation-link", 2, {
    opacity: 0,
    ease: Power1.easeOut,
    x: -100
  });

  TweenMax.to(".navigation-links", 3, {
    opacity: 0,
    ease: Power3.easeOut,
    top: -1000
  });
});
