fetch("js/donnees.json")
  .then(function (response) {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
  })

  .then(function (json) {
    let list = new MediaList();
    let factory = new MediaFactory();
    let medias = getMedias(json.media);
    let photographerProfil = json.photographers.filter(
      (photographe) => photographe.id == getId()
    )[0];
    let photographer = new Photographer(photographerProfil);

    photographer.displayProfil();

    medias.forEach((item) => {
      let media = factory.build(item);
      list.add(media);
    });
    console.log(list.all);

    list.display(list.all);

    function getId() {
      const params = new URLSearchParams(window.location.search);
      return params.get("id");
    }

    function getMedias(medias) {
      return medias.filter((media) => media.photographerId == getId());
    }
  });
