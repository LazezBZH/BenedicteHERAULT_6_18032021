fetch("js/donnees.json")
  .then(function (response) {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
  })
  .then(function (json) {
    let photographerProfil = json.photographers.filter(
      (photographe) => photographe.id == getId()
    )[0];
    let photographer = new Photographer(photographerProfil);

    let list = new MediaList();
    let factory = new MediaFactory();
    let medias = getMedias(json.media);

    medias.forEach((item) => {
      list.add(new Media(item));
    });
    list.all.forEach((a) => console.log(a.type, a.src));

    list.display(list.all);
  });

function getMedias(medias) {
  return medias.filter((media) => media.photographerId == getId());
}

function getId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}
