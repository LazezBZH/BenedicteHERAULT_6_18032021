//factory...si le média est de type image créée une image, sinon crée une vidéo (possibilité d'ajouter d'autres types de médias ex "son" dans ce cas ajouter conditions et else if)

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
