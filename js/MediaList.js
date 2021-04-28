class MediaList {
  constructor() {
    this.all = [];
  }
  add(media) {
    this.all.push(media);
  }
  display(medias) {
    let html = "";

    medias.forEach((media) => {
      html += media.render();
    });
    document.getElementById("medias").innerHTML = html;
  }
}
