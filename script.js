const main = document.querySelector("main");

fetch("donnees.json")
  .then(function (response) {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
  })
  .then(function (json) {
    for (var i = 0; i < json.photographers.length; i++) {
      let myArticle = document.createElement("article");
      let myH2 = document.createElement("h2");
      let myPara1 = document.createElement("p");
      let myPara2 = document.createElement("p");
      let myPara3 = document.createElement("p");
      let myPortrait = document.createElement("img");
      let myTagsPhotographers = document.createElement("ul");

      myH2.textContent = json.photographers[i].name;
      myPara1.textContent =
        json.photographers[i].city + ", " + json.photographers[i].country;
      myPara2.textContent = json.photographers[i].tagline;
      myPara3.textContent = json.photographers[i].price + "€/jour";
      myPortrait.src =
        "medias/PhotographersIDPhotos/" + json.photographers[i].portrait;

      var tagsPhotographers = json.photographers[i].tags;
      for (var j = 0; j < tagsPhotographers.length; j++) {
        let listTagsPhotographers = document.createElement("li");
        listTagsPhotographers.textContent = "#" + tagsPhotographers[j];
        myTagsPhotographers.appendChild(listTagsPhotographers);
      }

      myArticle.appendChild(myPortrait);
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myTagsPhotographers);

      myH2.classList.add("identite");
      myPara1.classList.add("lieu");
      myPara2.classList.add("tagline");
      myPara3.classList.add("prix");
      myTagsPhotographers.classList.add("tags-photographers");

      main.appendChild(myArticle);
    }
  });
