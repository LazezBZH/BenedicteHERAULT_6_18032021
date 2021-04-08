const main = document.querySelector("main");

fetch("donnees.json")
  .then(function (response) {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
  })
  .then(function (json) {
    displayAllPhotographers(json.photographers);
  });

function displayAllPhotographers(photographers) {
  let html = "";
  for (var i = 0; i < photographers.length; i++) {
    let photographe = photographers[i];
    html += renderPhotographer(photographe);
  }

  main.innerHTML = html;
}

function renderPhotographer(photographe) {
  let tagHtml = "";
  for (let i = 0; i < photographe.tags.length; i++) {
    let tag = photographe.tags[i];
    tagHtml += `<span class="tag">#${tag} </span>`;
  }
  return `
<article>
<img src="medias/PhotographersIDPhotos/${photographe.portrait}">
<h2 class="identite">${photographe.name}</h2>
<p class="lieu">${photographe.city}, ${photographe.country}</p>
<p class="tagline">${photographe.tagline} </p>
<p class="prix">${photographe.price}€/jour</p>
<div class="tags">${tagHtml}</div>
</article>`;
}
