fetch("js/donnees.json")
  .then(function (response) {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
  })

  //récupération des médias du photographe (avec l'id du photographe)
  .then(function (json) {
    let list = new MediaList();
    let factory = new MediaFactory();
    let medias = getMedias(json.media);
    let profil = json.photographers.filter(
      (photographe) => photographe.id == query("id")
    )[0];
    let photographer = new Photographer(profil);

    photographer.displayProfil();

    medias.forEach((item) => {
      let media = factory.build(item);
      list.add(media);
    });
    console.log(list.all);

    list.display(list.all);
    list.listenForReordering();
    let slider = new Slider(list.all);
    slider.listenForStart();
    list.getAllPhotographerLikes();
    list.increaseMediaLikes();
    //list.increaseAllPhotographerLikes();
  });

function getMedias(medias) {
  return medias.filter((media) => media.photographerId == query("id"));
}
