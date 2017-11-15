'use strict'

// const __API_URL__ = 'http://localhost:3000';
const __API_URL__ = 'https://team-wildlife.herokuapp.com'
let randomIndex;

$('select[name="country"]').on('change', function(event) {
  var selectedCountry = event.target.value;
  // var selectedCountryFullName = event.target.text;
  console.log(selectedCountry);
  $.get(`${__API_URL__}/api/v1/countries/${selectedCountry}`)
    .then(data => {
      data = JSON.parse(data);
      console.log('data', data);
      randomIndex = Math.floor(Math.random()*data.result.length);
      $('#results-common').append(`<h6 id="scientific-name">Scientific Name: ${data.result[randomIndex].scientific_name}</h6><p>Animal ID: ${data.result[randomIndex].taxonid}</p>`)
      let commonName = data.result[randomIndex].scientific_name.toLowerCase().replace(' ', '%20');
      console.log(commonName.toLowerCase());

      $.get(`${__API_URL__}/api/v1/commonName/${commonName}`)
        .then(commonData => {
          commonData = JSON.parse(commonData);
          console.log('common data', commonData);
          if(commonData.result.length > 0) {
            $('#newAnimal').append(`<h3 class="common-name">Common Name: ${commonData.result[0].taxonname}</h3>`)
          } else {
            $('#newAnimal').append('<h3 class="common-name">Common Name: Common Name Data Does Not Exist For this Species</h3>');
          }
        });
      $.get(`${__API_URL__}/api/v1/narrative/${commonName}`)
        .then(descriptionData => {
          descriptionData = JSON.parse(descriptionData);
          $('#newAnimal').append(`<h3 id="animal-description">Description: ${descriptionData.result[0].rationale}</h3>`)
        })

    })
})
