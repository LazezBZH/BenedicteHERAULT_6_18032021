class Image {
  constructor(data) {
    this.id = data.id;
    this.photographerId = data.photographerId;
    this.tags = data.tags;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
    this.src = data.src;
    this.title = data.title;
  }
  render() {
    return `
    <figure>
    <img src="medias/${this.photographerId}b/${this.src}" alt="${this.title}"/>
    <figcaption>
    <div class="mediaTitle">${this.title}</div>
    <div class="mediaLikes">${this.likes} <i class="fas fa-heart"></i>
    </div>
    </igcaption>
    </figure>`;
  }
}
