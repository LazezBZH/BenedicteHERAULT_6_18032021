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

    console.log(photographer);
    function getId() {
      const params = new URLSearchParams(window.location.search);
      return params.get("id");
    }
  });
