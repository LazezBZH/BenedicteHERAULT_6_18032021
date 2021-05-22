//objet image créé par MediaFactory si le type du média est image

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
    <figure >
     <img src="medias/${this.photographerId}b/${this.src}" alt="${this.title}" class="diapo" id="${this.id}"/>
     <figcaption>
      <div class="mediaTitle">${this.title}</div>
      <div> <span class="mediaLikes" id="${this.id}likes">${this.likes}</span><span> <i class="heart fas fa-heart" id="${this.id}heart"></i></span>
      </div>
     </figcaption>
    </figure>`;
  }

  renderSlide() {
    return `
    <figure>
     <img src="medias/${this.photographerId}/${this.src}" alt="${this.title}" class="diapo" id="${this.id}" />
     <figcaption>
      <div class="mediaTitle">${this.title}</div>
     </figcaption>
    </figure>`;
  }
}
