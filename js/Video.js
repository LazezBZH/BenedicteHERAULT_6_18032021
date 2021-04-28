class Video {
  constructor(data) {
    this.id = data.id;
    this.photographerId = data.photographerId;
    this.tags = data.tags;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
    this.src = data.src;
  }
  render() {
    return `<video  controls>
  <source src="${this.src}" type="video/mp4">
</video>`;
  }
}
