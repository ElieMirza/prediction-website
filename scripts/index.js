let user_input = "";
let gender_api = "https://api.genderize.io?name=";
let age_api = "https://api.agify.io/?name=";
let nationality_api = "https://api.nationalize.io/?name=";
let countries = [];
let game_started = false;
let nationality_para = document.getElementById("nationality");

fetchImage();

// logic to start and resert query on every submit
document.getElementById("button").onclick = function() {
  if (!game_started) {
    game_started = true;
    printQueries();
    console.log(game_started + "onclick");
  } else {
    resetQueries();
    printQueries();
  }
}

// Fetches gender and age
async function fetchGenderAge(link, userName, trait) {
  await fetch(link + userName)
    .then(response => response.json())
    .then(data => {
      if (data[trait] == null) {
        document.getElementById(trait).textContent = "no data available";
      } else {
        document.getElementById(trait).textContent = `${trait}: ${data[trait]}`;
      }
    })
}

// Fetches nationality and calls print nationality function
async function fetchNationality(link, userName) {
  await fetch(link + userName)
    .then(response => response.json())
    .then(data => countries = data.country);
  printNationality();
}

// logic to print nationality/ies in a way that when more than one is available
// they get shown separated by a comma
function printNationality() {
  let span = document.createElement('span');

  if (countries.length == 0) {
    span.textContent = "No country available";
    nationality_para.appendChild(span);
  } else if (countries.length == 1) {
    span.textContent = "Nationality: " + countries[0].country_id;
    nationality_para.appendChild(span);
  } else {
    document.getElementById('nationality').textContent = "Nationality: ";
    for (let i = 0; i < countries.length; i++) {
      if (i === (countries.length - 1)) {
        span.textContent = countries[i].country_id;
        nationality_para.appendChild(span);
      } else {
        let span = document.createElement('span');
        span.textContent = countries[i].country_id + ", ";
        nationality_para.appendChild(span);
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

function printQueries() {
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
