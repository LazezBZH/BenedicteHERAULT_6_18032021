//ensemble des média de la page d'un photographe

class MediaList {
  constructor() {
    this.all = [];
    this.activeTags = [];
    this.order = "";
    this.isAscending = true;
    this.totalLikes = 0;
  }
  add(media) {
    this.all.push(media);
  }

  build(medias) {
    this.display(this.all);
    this.listenForReordering();
    let slider = new Slider(this.all);
    slider.listenForStart();
    this.getAllLikesPhotographer();
    this.increaseMediaLikes();
    this.displayReorderList();
  }

  display(medias) {
    let html = "";

    medias.forEach((media) => {
      html += media.render();
    });
    document.getElementById("medias").innerHTML = html;
  }

  //filtre sur les tags du photographe amenant à page d'accueil avec filtre des photographes ayant ce tag
  listenForFiltering() {
    let filters = document.querySelectorAll("tag-photographe");
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

    this.filtered = this.all.filter((media) => {
      let selected = false;
      this.activeTags.forEach((tag) => {
        if (media.tags.includes(tag)) {
          selected = true;
        }
      });
      return selected;
    });

    this.hideAll();
    if (this.activeTags.length === 0) {
      this.build(this.all);
    } else {
      this.build(this.filtered);
    }
  }

  hideAll() {
    document.querySelector("main").innerHTML = "";
  }

  //Tri des médias par date, popularité ou titre
  displayReorderList() {
    let reorderAreaClosed = document.getElementById("sort-list_closed");
    let reorderAreaOpen = document.getElementById("sort-list");
    reorderAreaClosed.addEventListener("mouseover", function (evt) {
      reorderAreaClosed.style.display = "none";
      reorderAreaOpen.style.display = "flex";
    });
    reorderAreaOpen.addEventListener("click", function (evt) {
      reorderAreaClosed.style.display = "flex";
      reorderAreaOpen.style.display = "none";
    });
  }

  listenForReordering() {
    let elements = document.getElementsByClassName("sort-by");
    let reorderAreaFirst = document.getElementById("sort-list_first");
    for (let el of elements) {
      el.addEventListener("click", (e) => {
        let order = e.target.getAttribute("data-order");
        if (this.order != order) {
          this.isAscending = true;
        } else {
          this.isAscending = !this.isAscending;
        }

        this.order = order;

        el.style.order == "0";

        this.reorder(order);
        reorderAreaFirst.textContent = e.target.textContent;
      });
    }
  }

  reorder(order) {
    let methodName = "reorderBy" + ucfirst(order);
    this[methodName]();
    this.build(this.all);
  }
  reorderByPopularity() {
    this.all = this.all.sort((a, b) => {
      if (this.isAscending) {
        return a.likes - b.likes;
      } else {
        return b.likes - a.likes;
      }
    });
  }
  reorderByDate() {
    this.all = this.all.sort((a, b) => {
      let dateA = new Date(a.date);
      let dateB = new Date(b.date);
      if (this.isAscending) {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
  }
  reorderByTitle() {
    this.all = this.all.sort((a, b) => {
      if (this.isAscending) {
        return a.title > b.title ? 1 : -1;
      } else {
        return b.title > a.title ? 1 : -1;
      }
    });
  }

  increaseMediaLikes() {
    let hearts = document.getElementsByClassName("heart");
    for (let i = 0; i < hearts.length; i++) {
      let heart = hearts[i];
      let selected = heart.parentNode;

      heart.addEventListener("click", (e) => {
        let id = e.target.getAttribute("data-id");
        let index = this.all.findIndex((media) => media.id == id);
        let likes = this.all[index].likes + 1;
        this.all[index].likes = likes;
        selected.parentNode.children[0].innerHTML = likes;
        heart.setAttribute("style", "color:#901c1c");
        this.totalLikes++;
        document.getElementById("scrollLikes").innerHTML = this.totalLikes;
      });
    }
  }
  getAllLikesPhotographer() {
    let total = 0;
    this.all.forEach((media) => {
      total += media.likes;
    });
    this.totalLikes = total;
    document.querySelector("#scrollLikes").textContent = total;
  }
}
