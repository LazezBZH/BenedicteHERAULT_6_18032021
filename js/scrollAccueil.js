//apparition du scroll "passer au contenu"
document.addEventListener("scroll", apparitionScroll);
let scroll = document.querySelector(".scroll");
function apparitionScroll() {
  if (window.pageYOffset > 100) {
    scroll.style.display = "block";
  } else {
    scroll.style.display = "none";
  }
}
