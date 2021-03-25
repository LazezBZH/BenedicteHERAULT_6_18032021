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

      myH2.textContent = json.photographers[i].name;
      myPara1.textContent =
        json.photographers[i].city + ", " + json.photographers[i].country;
      myPara2.textContent = json.photographers[i].tagline;
      myPara3.textContent = json.photographers[i].price + "€/jour";
      myPortrait.src =
        "medias/PhotographersIDPhotos/" + json.photographers[i].portrait;

      myArticle.appendChild(myPortrait);
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);

      main.appendChild(myArticle);
    }
  });
