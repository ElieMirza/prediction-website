let user_input = "";
let gender = "https://api.genderize.io?name=";
let age = "https://api.agify.io/?name=";
let nationality = "https://api.nationalize.io/?name=";

fetchImage();

document.getElementById("button").onclick = function(){
  user_input = document.getElementById("input").value;
  // fetchJSON(gender, user_input)
  fetchJSON(age, user_input)
  // fetchJSON(nationality, user_input)
}

function fetchJSON(link, userName) {
  fetch(link + userName)
    .then(response => response.json())
    .then(data => alert(data.gender));
}

function fetchImage() {
  let image = document.getElementById("dog-image");
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => image.src = data.message);
}
