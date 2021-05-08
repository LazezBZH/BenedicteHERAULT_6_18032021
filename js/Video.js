class Video {
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
    <video controls>
    <source src="medias/${this.photographerId}/${this.src}" type="video/mp4">
    </video>
    <figcaption>${this.title}
    <div class="mediaLikes">
    ${this.likes} <i class="fas fa-heart"></i>
    </div>
    </figcaption>
    </figure>`;
  }
}
