let user_input = "";
let gender_api = "https://api.genderize.io?name=";
let age_api = "https://api.agify.io/?name=";
let nationality_api = "https://api.nationalize.io/?name=";

fetchImage();

document.getElementById("button").onclick = function(){
  user_input = document.getElementById("input").value;
  fetchGender(gender_api, user_input);
  fetchAge(age_api, user_input);
  fetchNationality(nationality_api, user_input);
}

async function fetchGender(link, userName) {
    await fetch(link + userName)
            .then(response => response.json())
            .then(data => document.getElementById("gender").textContent = `gender: ${data["gender"]}`)
}

async function fetchAge(link, userName) {
    await fetch(link + userName)
            .then(response => response.json())
            .then(data => document.getElementById("age").textContent = `age: ${data["age"]} years old`)
}

async function fetchNationality(link, userName) {
    await fetch(link + userName)
            .then(response => response.json())
            .then(data => {countries = data.country});
    console.log(countries);
    let gender_para = document.getElementById("nationality");

    countries.map(country => {
      let span = document.createElement('span');
      console.log(span);
      span.textContent = country["country_id"];
      console.log(span);
      gender_para.appendChild(span);
    });

       // 'country["country_id"].value'
    // .textContent = `nationality: ${data.country[0].country_id}`})

}

function fetchImage() {
  let image = document.getElementById("dog-image");
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => image.src = data.message);
}
