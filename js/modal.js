// DOM Elements
let modalBg = document.querySelector(".bground");
let formData = document.querySelectorAll(".form-data");
let validationBtn = document.getElementById("btn-envoi");
let closeBtn = document.querySelector("#close");
let launchBtn = document.querySelector("#contactButton");

// VARIABLES FORMULAIRE
let prenom = document.getElementById("first");
let nom = document.getElementById("last");
let mail = document.getElementById("email");
let message = document.getElementById("message");

//VARIABLES MESSAGES ERREUR
let erreurPrenom = document.getElementById("erreur-prenom");
let erreurNom = document.getElementById("erreur-nom");
let erreurMail = document.getElementById("erreur-mail");
let erreurMessage = document.getElementById("erreur-message");

// REGEX
let mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //regular expression mail source https://emailregex.com/

//EVENTS
launchBtn.addEventListener("click", launchModal);

closeBtn.addEventListener("click", fermerFormulaire);

prenom.addEventListener("keyup", validerPrenom);

nom.addEventListener("keyup", validerNom);

mail.addEventListener("keyup", validerMail);

message.addEventListener("keyup", validerMessage);

validationBtn.addEventListener("click", sendForm);

function launchModal() {
  modalBg.style.display = "block";
}

function fermerFormulaire() {
  modalBg.style.display = "none";
}

function validerPrenom(e) {
  if (prenom.validity.valueMissing) {
    e.preventDefault();
    erreurPrenom.textContent = "* Veuillez renseigner votre prénom.";
    prenom.classList.replace("text-control", "erreur-input");
    return false;
  } else if (prenom.value.length < 2) {
    e.preventDefault();
    erreurPrenom.textContent =
      "* Le prénom doit comporter au minimum 2 caractères.";
    prenom.classList.replace("text-control", "erreur-input");
    return false;
  } else {
    erreurPrenom.textContent = " ";
    prenom.classList.replace("erreur-input", "text-control");
    return true;
  }
}

function validerNom(e) {
  if (nom.validity.valueMissing) {
    e.preventDefault();
    erreurNom.textContent = "* Veuillez renseigner votre nom.";
    nom.classList.replace("text-control", "erreur-input");
    return false;
  } else if (nom.value.length < 2) {
    e.preventDefault();
    erreurNom.textContent = "* Le nom doit comporter au minimum 2 caractères.";
    nom.classList.replace("text-control", "erreur-input");
    return false;
  } else {
    erreurNom.textContent = " ";
    nom.classList.replace("erreur-input", "text-control");
    return true;
  }
}

function validerMail(e) {
  if (mail.validity.valueMissing) {
    e.preventDefault();
    erreurMail.textContent = "* Veuillez renseigner votre adresse mail.";
    mail.classList.replace("text-control", "erreur-input");
    return false;
  } else if (!mail.value.match(mailRegex)) {
    e.preventDefault();
    erreurMail.textContent =
      "* Le format de votre adresse mail ne semble pas valide.";
    mail.classList.replace("text-control", "erreur-input");
    return false;
  } else {
    erreurMail.textContent = " ";
    mail.classList.replace("erreur-input", "text-control");
    return true;
  }
}

function validerMessage(e) {
  if (message.validity.valueMissing) {
    e.preventDefault();
    erreurMessage.textContent = "* N'oubliez pas de nous laisser un message.";
    message.classList.replace("text-control", "erreur-input");
    return false;
  } else if (message.value.length < 5) {
    e.preventDefault();
    erreurMessage.textContent = "* Votre message semble un peu court.";
    message.classList.replace("text-control", "erreur-input");
    return false;
  } else {
    erreurMessage.textContent = " ";
    message.classList.replace("erreur-input", "text-control");
    return true;
  }
}

function sendForm(e) {
  form.style.display = "none";
}
