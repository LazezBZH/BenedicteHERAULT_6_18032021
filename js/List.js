class List {
  constructor() {
    this.all = [];
    this.activeTags = [];
  }
  add(photographer) {
    this.all.push(photographer);
  }

  //html tous les photographes page accueil...provient de Photographer
  displayPhotographers() {
    let html = "";

    for (let i = 0; i < this.all.length; i++) {
      let photographe = new Photographer(this.all[i]);
      html += photographe.render();
    }
    document.querySelector("main").innerHTML = html;
  }

  //insertion html tags du header
  displayTags() {
    let html = "";
    this.getAllTags().forEach((tag) => {
      html += `<span class="tag tag-filter" id="${tag}">#${tag}</span>`;
    });
    document.getElementById("tags").innerHTML = html;
  }

  //recherche tous les tags photographes pour les mettre dans la nav du header ("set" évite les doublons)
  getAllTags() {
    let list = new Set();
    this.all.forEach((photographe) => {
      photographe.tags.forEach((tag) => {
        list.add(tag);
      });
    });

    return list;
  }
  //filtre à faire, ne fonctionne pas encore
  listenForFiltering() {
    let filters = document.querySelectorAll(".tag-filter");
    for (let i = 0; i < filters.length; i++) {
      let filter = filters[i];
      filter.addEventListener("click", (evt) => {
        let tag = evt.target.getAttribute("id");

        this.filter(tag);
      });
    }
  }

  filter(tag) {
    if (this.activeTags.includes(tag)) {
      this.activeTags = this.activeTags.filter((item) => item !== tag);
      document.getElementById(tag).classList.remove("tag-actif");
    } else {
      this.activeTags.push(tag);
      document.getElementById(tag).classList.add("tag-actif");
    }
    console.log(this.activeTags);

    this.filtered = this.all.filter((photographe) => {
      let selected = false;
      this.activeTags.forEach((tag) => {
        if (photographe.tags.includes(tag)) {
          selected = true;
        }
      });
      console.log(selected);
      return selected;
    });

    this.hideAll();
  }

  hideAll() {
    document.querySelector("main").innerHTML = "";
    this.displayPhotographers(this.filtered);
  }
}
