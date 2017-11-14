'use strict'

const __API_URL__ = 'http://localhost:3000';
let randomIndex;

$('select[name="country"]').on('change', function(event) {
  var selectedCountry = event.target.value;
  console.log(selectedCountry);
  $.get(`${__API_URL__}/api/v1/countries/${selectedCountry}`)
    .then(data => {
      data = JSON.parse(data);
      randomIndex = Math.floor(Math.random()*data.result.length);
      $('#results-common').append(`<h6>Scientific Name: ${data.result[randomIndex].scientific_name}</h6><p>Animal ID: ${data.result[randomIndex].taxonid}</p>`)
      let commonName = data.result[randomIndex].scientific_name.toLowerCase().replace(' ', '%20');
      console.log(commonName.toLowerCase());
      $.get(`${__API_URL__}/api/v1/commonName/${commonName}`)
        .then(commonData => {
          // console.log(data);
          commonData = JSON.parse(commonData);
          // console.log(commonData)
          $('#results-common').append(`<h3>Common Name: ${commonData.result[0].taxonname}</h3>`)
        })
      $.get(`${__API_URL__}/api/v1/narrative/${commonName}`)
        .then(descriptionData => {
          // console.log(data);
          descriptionData = JSON.parse(descriptionData);
          console.log(descriptionData)
          $('#results-common').append(`<h3>Description: ${descriptionData.result[0].rationale}</h3>`)
        })

    })
})
