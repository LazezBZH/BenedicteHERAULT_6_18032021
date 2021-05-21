//va chercher un paramètre (key)

function query(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

//mise en majuscule premier charactère

function ucfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
