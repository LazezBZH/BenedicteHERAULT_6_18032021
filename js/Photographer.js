class Photographer {
  constructor(data) {
    this.name = data.name;
    this.city = data.city;
    this.country = data.country;
    this.tagline = data.tagline;
    this.price = data.price;
    this.tags = data.tags;
    this.portrait = data.portrait;
    this.id = data.id;
  }
  render() {
    let tagHtml = "";
    for (let i = 0; i < this.tags.length; i++) {
      let tag = this.tags[i];
      tagHtml += `<span class="tag-photographe">#${tag}</span>`;
    }

    return `
       <a href="pagePhotographe.html?id=${this.id}">
        <div class="photoIdentite"><img src="medias/photographersIDPhotosb/${this.portrait}"></div>
        <h2 class="identite">${this.name}</h2>
        <p class="lieu">${this.city}, ${this.country}</p>
        <p class="tagline">${this.tagline} </p>
        <p class="prix">${this.price}€/jour</p>
        <div class="tags">${tagHtml}</div>
      </a>`;
  }

  displayTags() {
    let html = "";

    this.tags.forEach((tag) => {
      html += `<a href="index.html?tag=${tag}" class="tag-photographe" id="${tag}">#${tag}</a>`;
    });

    document.getElementById("tagProfil").innerHTML = html;
  }

  displayProfil() {
    document.getElementById("nameProfil").innerHTML = this.name;
    document.getElementById("locationProfil").innerHTML =
      this.city + ", " + this.country;
    document.getElementById("taglineProfil").innerHTML = this.tagline;

    document.getElementById(
      "photoProfil"
    ).innerHTML = `<img src="medias/photographersIDPhotosb/${this.portrait}" >`;
    document.getElementById("form-title").innerHTML =
      "Contactez-moi </br>" + this.name;

    this.displayTags();
    console.log(this.tags);
  }
}
