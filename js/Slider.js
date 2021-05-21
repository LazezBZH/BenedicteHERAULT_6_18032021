//Diaporama dans une lightbox

class Slider {
  constructor(medias) {
    this.slides = document.querySelectorAll(".diapo");
    this.slider = document.getElementById("slider");
    this.container = this.slider.getElementsByClassName("slider-content")[0];
    this.medias = medias;
    this.currentIndex = 0;
  }

  //lancer le diaporama
  listenForStart() {
    this.slides.forEach((slide) => {
      slide.addEventListener("click", (e) => {
        this.slider.style.display = "flex";
        let id = e.target.getAttribute("id");
        this.currentIndex = this.medias.findIndex((media) => media.id == id);

        this.display();
      });
    });
    this.listenForMoves();
  }

  //navigation entre les médias, click sur flèche + nav au clavier
  listenForMoves() {
    let next = document.getElementById("next");
    let previous = document.getElementById("previous");

    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 37) {
        this.next();
        this.display();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 39) {
        this.previous();
        this.display();
      }
    });

    next.addEventListener("click", () => {
      this.next();
      this.display();
    });
    previous.addEventListener("click", () => {
      this.previous();
      this.display();
    });
  }

  //fonctions
  display() {
    let media = this.medias[this.currentIndex];
    let html = "";
    html += media.renderSlide();
    this.container.innerHTML = html;
  }

  next() {
    if (this.currentIndex >= this.medias.length) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }

  previous() {
    if (this.currentIndex <= 0) {
      this.currentIndex = this.medias.length;
    } else {
      this.currentIndex--;
    }
  }
}

//fermeture lightbox
let closeDiapo = document.getElementById("close-slider");
closeDiapo.addEventListener("click", closeSlider);

function closeSlider() {
  slider.style.display = "none";
}
