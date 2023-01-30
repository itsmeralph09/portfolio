const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

const navLink = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  }

  if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

[...navLink].forEach((nav) => {
  nav.addEventListener("click", () => {
    if (primaryNav.getAttribute("data-visible") === "true") {
      primaryNav.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
    }
  });
});
 var typed = new Typed(".typing", {
        strings: ["front-end developer","web designer","graphic designer", "computer technician"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
const navbar = document.querySelector('header');
let top1 = navbar.offsetTop;
function stickynavbar() {
  if (window.scrollY >= top1) {    
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');    
  }
}
window.addEventListener('scroll', stickynavbar);

let navbar1 = document.getElementById("primary-nav");
let viewportHeight = window.innerHeight;
let navHeight = document.getElementById("primary-nav").offsetHeight;

let navbarLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", e => {
  scrollpos = window.scrollY;
  navbarLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (section.offsetTop <= scrollpos + 130 &&
        section.offsetTop + section.offsetHeight > scrollpos + 130) {
      link.classList.add("nav-link-active");
    } else {
      link.classList.remove("nav-link-active");
    }
  });
});