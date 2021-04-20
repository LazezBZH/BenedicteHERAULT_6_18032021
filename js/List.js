class List {
  constructor() {
    this.all = [];
  }
  add(photographer) {
    this.all.push(photographer);
  }

  //html tous les photographes page accueil...provient de Photographer
  displayPhotographers() {
    let html = "";

    for (var i = 0; i < this.all.length; i++) {
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
    for (var i = 0; i < this.all.length; i++) {
      let tags = this.all[i].tags;
      for (var j = 0; j < tags.length; j++) {
        list.add(tags[j]);
      }
    }
    return list;
  }
  //filtre à faire, ne fonctionne pas encore
  listenForFiltering() {
    let filters = document.querySelectorAll(".tag-filter");
    for (var i = 0; i < filters.length; i++) {
      let filter = filters[i];
      filter.addEventListener("click", function (evt) {
        this.all.filter(evt.target.getAttribute("id"));
      });
    }
  }

  filter(tag) {
    this.all.filter((photographe) => {
      return this.photographe.tags.includes(tag);
    });
  }
}
