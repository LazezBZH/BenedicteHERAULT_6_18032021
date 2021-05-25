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
    this.alt = data.alt;
  }
  render() {
    return `
    <figure tabindex="3">
      
        <video   class="diapo" id="${this.id}" title= "lancer le diaporama à partir de la video de titre ${this.title}">
        <source src="medias/${this.photographerId}/${this.src}" type="video/mp4"  >
        </video>
      
      <figcaption>
        <h2 class="mediaTitle">${this.title}</h2>
        <div> <span class="mediaLikes" data-id="${this.id}">${this.likes}</span>
        <span> <i class="heart fas fa-heart" data-id="${this.id}" ></span></i>
        </div>
      </figcaption>
    </figure>`;
  }

  renderSlide() {
    return `
    <figure>
      <video controls autoplay title= " ${this.alt}">
        <source src="medias/${this.photographerId}/${this.src}" type="video/mp4">
      </video>
      <figcaption>
      <h2>${this.title}</h2>
      </figcaption>
    </figure>`;
  }
}
