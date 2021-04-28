class MediaFactory {
  build(data) {
    let type = "image";
    let src = "";

    if (data.hasOwnProperty("image")) {
      type = "image";

      return new Image(data);
    } else {
      type = "video";

      return new Video(data);
    }
  }
}
