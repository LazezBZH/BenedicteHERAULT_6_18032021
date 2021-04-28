class Media {
  constructor(data) {
    this.id = data.id;
    this.photographerId = data.photographerId;

    this.tags = data.tags;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
    if (data.hasOwnProperty("image")) {
      this.type = "image";
      this.src = "medias/" + data.photographerId + "/" + data.image;
      this.html = `<img src="${this.src}"/>`;
    } else {
      this.type = "video";
      this.src = "medias/" + data.photographerId + "/" + data.video;
      this.html = `<video  controls>
  <source src="${this.src}" type="video/mp4">
</video>`;
    }
  }

  render() {
    return this.html;
  }
}
