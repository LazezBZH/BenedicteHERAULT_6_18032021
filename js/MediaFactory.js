class MediaFactory {
  build(data) {
    if (data.hasOwnProperty("image")) {
      data.src = data.image;

      return new Image(data);
    } else {
      data.src = data.video;

      return new Video(data);
    }
  }
}
