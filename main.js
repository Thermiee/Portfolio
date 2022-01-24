const hamburger = document.querySelector(".nav-item3");
// const menuLinks = document.querySelector(".menu__links");

// adding the class active when clicking to the hambuger and menuLinks elements
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  //   menuLinks.classList.toggle("active");
});

// removing the class when clicking to the menu__links-item element
document.querySelectorAll(".links").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    // menuLinks.classList.remove("active");
  });
});
