class Media {
  constructor(data) {
    this.id = data.id;
    this.photographerId = data.photographerId;

    this.tags = data.tags;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
    this.title = data.title;
    if (data.hasOwnProperty("image")) {
      this.type = "image";
      this.src = "medias/" + data.photographerId + "b/" + data.image;
      this.html = `<figure>
    <img src="${this.src}"
         alt="${this.title}">
    <figcaption> <div class="mediaTitle">${this.title}</div>
    <div class="mediaLikes">${this.price} €
   ${this.likes} <i class="fas fa-heart"></i></div></figcaption>
</figure>`;
    } else {
      this.type = "video";
      this.src = "medias/" + data.photographerId + "/" + data.video;
      this.html = `<figure>
    <video  controls>
  <source src="${this.src}" type="video/mp4">
</video>
    <figcaption>${this.title}
    <div class="mediaLikes">${this.price} €
   ${this.likes} <i class="fas fa-heart"></i></div></figcaption>
</figure>`;
    }
  }

  render() {
    return this.html;
  }
}
