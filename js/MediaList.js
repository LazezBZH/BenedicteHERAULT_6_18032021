//ensemble des média de la page d'un photographe

class MediaList {
  constructor() {
    this.all = [];
    this.activeTags = [];
    this.order = "";
    this.isAscending = true;
  }
  add(media) {
    this.all.push(media);
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
    console.log(this.activeTags);

    this.filtered = this.all.filter((media) => {
      let selected = false;
      this.activeTags.forEach((tag) => {
        if (media.tags.includes(tag)) {
          selected = true;
        }
      });
      console.log(selected);
      return selected;
    });

    this.hideAll();
    if (this.activeTags.length === 0) {
      this.display(this.all);
    } else {
      this.display(this.filtered);
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

        console.log(this.order, this.isAscending);
        this.reorder(order);
        reorderAreaFirst.textContent = e.target.textContent;
        //?????????? A REVOIR
      });
    }
  }

  reorder(order) {
    let methodName = "reorderBy" + ucfirst(order);
    this[methodName]();
    this.display(this.all);
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
      let likes = selected.parentNode.children[0];
      let likesMedia = parseInt(likes.innerHTML);
      let allLikes = document.getElementById("scrollLikes");
      let allLikesNum = parseInt(allLikes.innerHTML);

      heart.addEventListener("click", (e) => {
        likesMedia = likesMedia + 1;
        likes.innerHTML = likesMedia;
        heart.setAttribute("style", "color:#901c1c");
        allLikesNum = allLikesNum + 1;
        allLikes.innerHTML = allLikesNum;
      });
    }
  }
  getAllPhotographerLikes() {
    let likesMediaPhotographer = document.querySelectorAll(".mediaLikes");
    let likesMediaPhotographerArray = Array.from(likesMediaPhotographer);
    let sum = 0;
    for (var i = 0; i < likesMediaPhotographerArray.length; i++) {
      sum += parseInt(likesMediaPhotographerArray[i].innerHTML, 10);
    }

    document.querySelector("#scrollLikes").textContent = sum;

    document.getElementsByClassName("heart");
  }
}
