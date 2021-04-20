const main = document.querySelector("main");

fetch("js/donnees.json")
  .then(function (response) {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
  })
  .then(function (json) {
    let list = new List();
    for (var i = 0; i < json.photographers.length; i++) {
      let photographe = new Photographer(json.photographers[i]);
      list.add(photographe);
    }

    list.displayPhotographers();
    list.displayTags();
    list.listenForFiltering();
  });

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
