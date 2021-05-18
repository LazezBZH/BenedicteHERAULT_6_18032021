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
    <video  class="diapo" data-media-id="${this.id}" >
    <source src="medias/${this.photographerId}/${this.src}" type="video/mp4">
    </video>
    <figcaption>${this.title}
    <div class="mediaLikes" id="${this.id}likes">${this.likes} <i class="fas fa-heart" id="${this.id}heart"></i>
    </div>
    </figcaption>
    </figure>`;
  }

  renderSlide() {
    return `
    <figure>
    <video controls autoplay>
    <source src="medias/${this.photographerId}/${this.src}" type="video/mp4">
    </video>
    <figcaption>${this.title}
    </figcaption>
    </figure>`;
  }
}
