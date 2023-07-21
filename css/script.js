const mobile_nav = document.querySelector(".navbar-btn");
const nav_header = document.querySelector("header");
const rm1 = document.querySelector("#rm1");
const rm2 = document.querySelector("#rm2");
const rm3 = document.querySelector("#rm3");
const rm4 = document.querySelector("#rm4");
// const sk = document.getElementById("skill");
// const footer = document.querySelector("footer");
// const menu = document.getElementById("x-mark");
// const bar = document.getElementById("bars");
// const About = document.getElementById("about");

const toggleNavBar = () => {
  nav_header.classList.toggle("active");
};

const remove_active = () => {
  nav_header.classList.remove("active");
  // sk.style.display = "block";
  // footer.style.display = "block";
  // About.style.display = "block";
};

// const menu_btn = () => {
//   // sk.style.display = "block";
//   // footer.style.display = "block";
//   // About.style.display = "block";
// };

// const bar_btn = () => {
//   // sk.style.display = "none";
//   // footer.style.display = "none";
//   // About.style.display = "none";
// };

mobile_nav.addEventListener("click", () => toggleNavBar());

rm1.addEventListener("click", () => remove_active());
rm2.addEventListener("click", () => remove_active());
rm3.addEventListener("click", () => remove_active());
rm4.addEventListener("click", () => remove_active());

// menu.addEventListener("click", () => menu_btn());
// // bar.addEventListener("click", () => bar_btn());
