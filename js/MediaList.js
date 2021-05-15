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

  listenForReordering() {
    let elements = document.getElementsByClassName("sort-by");

    for (let el of elements) {
      el.addEventListener("click", (e) => {
        let order = e.target.getAttribute("data-order");
        if (this.order == order) {
          this.isAscending == !this.isAscending;
        } else {
          this.direction = "asc";
        }

        this.order = order;

        console.log(this.order, this.direction);
        this.reorder(order);
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
      return a.likes - b.likes;
    });
  }
  reorderByDate() {
    this.all = this.all.sort((a, b) => {
      let dateA = new Date(a.date);
      let dateB = new Date(b.date);
      return dateA - dateB;
    });
  }
  reorderByTitle() {
    this.all = this.all.sort((a, b) => {
      return a.title > b.title ? 1 : -1;
    });
  }
}
