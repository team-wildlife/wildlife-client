'use strict'

const __API_URL__ = 'http://localhost:3000';

$('select[name="country"]').on('change', function(event) {
  var selectedCountry = event.target.value;
  console.log(selectedCountry);
  $.get(`${__API_URL__}/api/v1/countries/${selectedCountry}`)
    .then(data => {
      data = JSON.parse(data);
      $('#results').append(`<h6>Scientific Name: ${data.result[0].scientific_name}</h6><p>Animal ID: ${data.result[0].taxonid}</p>`)
    })
})



// $.get(`http://apiv3.iucnredlist.org/api/v3/species/common_names/loxodonta%20africana?token=${REDLIST_TOKEN}`)
//   .then(data => $('#results').append(`<h3>Animal: ${data.result[0].taxonname}</h3>`))

// .then(data => console.log(data))
  // .then(
  //   data => data.forEach(animal => {
  //     console.log(data)
  //     $('#results').append(`<h3>${animal.result.taxonname}</h3><p>${animal.result.language}</p><hr>`)
  //     // data => console.log(JSON.parse(data)),
  //     err => console.error(err.status, err.statusText, 'is the way my stuff is broken')
  //
  //   })
  //
  // )



// Grabs the selected country ISO when country is selected and stores it in selectedCountry
