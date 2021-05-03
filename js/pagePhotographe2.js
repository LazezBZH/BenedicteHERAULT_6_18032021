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
    let tagHtml = "";
    for (let i = 0; i < photographer.tags.length; i++) {
      let tag = photographer.tags[i];
      tagHtml += `<span class="tag-photographe">#${tag}</span>`;

      medias.forEach((item) => {
        list.add(new Media(item));
      });

      list.display(list.all);

      document.getElementById("mainFiche").innerHTML = `<section class="profil">
      <div class="textProfil">
    <h2 class="nameProfil">${photographer.name}</h2>
    <p class="locationProfil">${photographer.city}, ${photographer.country}</p>
    <p class="taglineProfil">${photographer.tagline} </p>
    <div class="tagsProfil">${tagHtml}</div></div>
    <button class="contactButton" id="contactButton"
       >
   Contactez-moi
</button>
     <div class="photoProfil"><img src="medias/photographersIDPhotosb/${photographer.portrait}"></div>
    </section>`;

      document.getElementById(
        "form-title"
      ).innerHTML = `<div class="contactez">Contactez-moi</div> <div class="photographe-name">${photographer.name}</div>`;
    }

    function getMedias(medias) {
      return medias.filter((media) => media.photographerId == getId());
    }

    function getId() {
      const params = new URLSearchParams(window.location.search);
      return params.get("id");
    }
  });
