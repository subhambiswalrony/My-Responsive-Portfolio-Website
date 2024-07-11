function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// typing text animation script
var typed = new Typed(".typing", {
  strings: ["Software Engineer", "Full stack Developer", "Application Developer"],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true
});