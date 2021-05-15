//<div class="mediaLikes" id="${this.id}likes">${this.likes} <i class="fas fa-heart" id="${this.id}heart"></i>
console.log("coucou");

let idLikes = this.id + "likes";
let idHeart = this.id + "heart";
let likes = document.getElementById(this.idLikes).content;
let heart = document.getElementById(this.idHeart);
this.heart = heart;

this.heart.addEventListener("click", addLike);

function addLike() {}
