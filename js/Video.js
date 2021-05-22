//objet video créé par MediaFactory si le type du média est vidéo

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
    <figure >
      
        <video   class="diapo" id="${this.id}">
        <source src="medias/${this.photographerId}/${this.src}" type="video/mp4"  >
        </video>
      
      <figcaption>
        <div class="mediaTitle">${this.title}</div>
        <div> <span class="mediaLikes" id="${this.id}likes">${this.likes}</span><span> <i class="heart fas fa-heart" id="${this.id}heart"></span></i>
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
      <figcaption>
      ${this.title}
      </figcaption>
    </figure>`;
  }
}
