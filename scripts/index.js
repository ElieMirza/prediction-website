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

    let gender_para = document.getElementById("nationality");
    let span = document.createElement('span');

    if(countries.length == 0){
      span.textContent = "No country available";
      gender_para.appendChild(span);
    }else if (countries.length == 1) {
      span.textContent = country["country_id"];
      gender_para.appendChild(span);
    }else {
      for(let i = 0; i < countries.length; i++){
        if(i === (countries.length -1)){
          console.log("else if");
          span.textContent = countries[i].country_id;
          gender_para.appendChild(span);
        }else {
          console.log("else else");
          let span = document.createElement('span');
          span.textContent = countries[i].country_id + ", ";
          gender_para.appendChild(span);
        }
      }
    //   countries.forEach((country => {
    //   if(countries.indexOf((Object.keys(country).find(key => country[key] === country["country_id"]))) === (countries.length -1)){
    //     console.log("else if");
    //     span.textContent = country["country_id"];
    //     gender_para.appendChild(span);
    //   }else {
    //     console.log("else else");
    //     let span = document.createElement('span');
    //     span.textContent = country["country_id"] + ", ";
    //     gender_para.appendChild(span);
    //   }
    // }))
    }
}

function fetchImage() {
  let image = document.getElementById("dog-image");
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => image.src = data.message);
}
