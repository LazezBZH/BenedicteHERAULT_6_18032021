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
    this.alt = data.alt;
  }
  render() {
    return `
    <figure tabindex="3">
     <img src="medias/${this.photographerId}b/${this.src}" alt="lancer le diaporama à partir de la photo de titre ${this.title}" class="diapo" id="${this.id}"/>
     <figcaption>
      <h2 class="mediaTitle">${this.title}</h2>
      <div> <span class="mediaLikes" data-id="${this.id}" >${this.likes}</span>
      <span> <i class="heart fas fa-heart" data-id="${this.id}" ></i></span>
      </div>
     </figcaption>
    </figure>`;
  }

  renderSlide() {
    return `
    <figure >
     <img src="medias/${this.photographerId}b/${this.src}" alt="${this.alt}" class="diapo" id="${this.id}" />
     <figcaption>
      <h2 class="mediaTitle">${this.title}</h2>
     </figcaption>
    </figure>`;
  }
}
