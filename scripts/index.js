let user_input = "";
let gender_api = "https://api.genderize.io?name=";
let age_api = "https://api.agify.io/?name=";
let nationality_api = "https://api.nationalize.io/?name=";
let countries = [];
let game_started = false;

fetchImage();

document.getElementById("button").onclick = function(){
  if (!game_started) {
    game_started = true;
    printQueries();
    console.log(game_started + "onclick");
  }else {
    resetQueries();
    printQueries();
  }
}

async function fetchGenderAge(link, userName, trait) {
    await fetch(link + userName)
            .then(response => response.json())
            .then(data => document.getElementById(trait).textContent = `${trait}: ${data[trait]}`)
}

async function fetchNationality(link, userName) {
    await fetch(link + userName)
            .then(response => response.json())
            .then(data => {countries = data.country});
    printNationality();
    console.log(game_started + "inside fetchnat")
}
console.log(game_started);

function printNationality() {
    console.log("before ifs");
    let gender_para = document.getElementById("nationality");
    let span = document.createElement('span');

    if(countries.length == 0){
      console.log("if");
      span.textContent = "No country available";
      gender_para.appendChild(span);
    }else if (countries.length == 1) {
      console.log("else if 1");
      span.textContent = "Nationality: " + country["country_id"];
      gender_para.appendChild(span);
    }else {
      document.getElementById('nationality').textContent = "Nationality: ";
      console.log("else");
      for(let i = 0; i < countries.length; i++){
        if(i === (countries.length -1)){
          console.log("else if 2");
          span.textContent = countries[i].country_id;
          gender_para.appendChild(span);
        }else {
          console.log("else else");
          let span = document.createElement('span');
          span.textContent = countries[i].country_id + ", ";
          gender_para.appendChild(span);
        }
      }
    }
}

function fetchImage() {
  let image = document.getElementById("dog-image");
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => image.src = data.message);
}

function printQueries(){
  user_input = document.getElementById("input").value;
  fetchGenderAge(gender_api, user_input, "gender");
  fetchGenderAge(age_api, user_input, "age");
  fetchNationality(nationality_api, user_input);
}

function resetQueries() {
  document.getElementById("gender").textContent = "";
  document.getElementById("age").textContent = "";
  document.getElementById("nationality").textContent = "";
}
