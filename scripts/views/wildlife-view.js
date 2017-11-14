'use strict'


$.get('http://apiv3.iucnredlist.org/api/v3/country/getspecies/AZ?token=e66cfb0dfa5d5dab8984278503cec6af0bb18dc640e03fff2b7b796b69a97346')
  .then(data => $('#results').append(`<h6>Scientific Name: ${data.result[0].scientific_name}</h6><p>Animal ID: ${data.result[0].taxonid}</p>`))
// .then(data => console.log(data))



const animalName = `http://apiv3.iucnredlist.org/api/v3/species/common_names/loxodonta%20africana?token=e66cfb0dfa5d5dab8984278503cec6af0bb18dc640e03fff2b7b796b69a97346`
$.get(animalName)
  .then(data => $('#results').append(`<h3>Animal: ${data.result[0].taxonname}</h3>`))

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
