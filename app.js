const sidebar = document.querySelector("aside");
const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const darkWhite = document.querySelector(".dark-white");
const theme = document.querySelector(".theme");
const themeToggleBtn1 = document.querySelector(".theme-btn:nth-child(2)");
const themeToggleBtn2 = document.querySelector(".theme-btn:nth-child(3)");
const themeToggleBtn3 = document.querySelector(".theme-btn:nth-child(4)");
const themeToggleBtn4 = document.querySelector(".theme-btn:nth-child(5)");
const logo1 = document.querySelector(".logo:nth-child(1)");
const logo2 = document.querySelector(".logo:nth-child(2)");
console.log(logo1, logo2);
toggleBtn.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

themeToggleBtn2.addEventListener("click", () => {
  document.body.classList.add("dark-mode");
  theme.classList.add("toggle-theme");
  themeToggleBtn1.classList.add("show-dark");
  themeToggleBtn2.classList.remove("show-dark");
  themeToggleBtn3.classList.remove("show-dark");
  themeToggleBtn4.classList.add("show-dark");
  logo2.classList.add("show-dark");
  logo1.classList.remove("show-dark");
});
themeToggleBtn4.addEventListener("click", () => {
  document.body.classList.remove("dark-mode");
  theme.classList.remove("toggle-theme");
  themeToggleBtn1.classList.remove("show-dark");
  themeToggleBtn2.classList.add("show-dark");
  themeToggleBtn3.classList.add("show-dark");
  themeToggleBtn4.classList.remove("show-dark");
  logo1.classList.add("show-dark");
  logo2.classList.remove("show-dark");
});
