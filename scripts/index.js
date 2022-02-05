let user_input = "";
let gender = "https://api.genderize.io?name=" + user_input;
let age = "https://api.agify.io/?name=" + user_input;
let nationality = "https://api.nationalize.io/?name=" + user_input;
let random_dog_image = "https://dog.ceo/api/breeds/image/random";

document.getElementById("button").onclick = function(){
  user_input = document.getElementById("input").value;
  alert(user_input);
}



alert(gender);
alert(age);
alert(nationality);
