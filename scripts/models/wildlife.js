'use strict'

const __API_URL__ = 'https://team-wildlife.herokuapp.com'
let randomIndex;

// +++++++++++++++++++++++++++++++
// API Calls For Country Selection
// +++++++++++++++++++++++++++++++


$('select[name="country"]').on('change', function(event) {
  var selectedCountry = event.target.value;
  var fullCountryName = $('#country-list option:selected').text();
  $('#gmap').attr('src', `https://maps.googleapis.com/maps/api/staticmap?center=${fullCountryName}&zoom=5&mapTypeControl=false&disableDefaultUI=true&draggable=false&maptype=hybrid&size=640x480`)
  console.log(selectedCountry);
  $.get(`${__API_URL__}/api/v1/countries/${selectedCountry}`)
    .then(data => {
      data = JSON.parse(data);
      console.log('data', data);
      randomIndex = Math.floor(Math.random()*data.result.length);
      $('#results-common').append(`<h3 id="newAnimal"><span>Scientific Name:</span> ${data.result[randomIndex].scientific_name}</h3>`)
      let commonName = data.result[randomIndex].scientific_name.toLowerCase().replace(' ', '%20');
      console.log(commonName.toLowerCase());

      $.get(`${__API_URL__}/api/v1/commonName/${commonName}`)
        .then(commonData => {
          commonData = JSON.parse(commonData);
          console.log('common data', commonData);
          if(commonData.result.length > 0) {
            $('#newAnimal').prepend(`<h3><span>Common Name:</span> ${commonData.result[0].taxonname}</h3>`)
          } else {
            $('#newAnimal').prepend('<h3><span>Common Name:</span> Common Name Data Does Not Exist For this Species</h3>');
          }
        });
      $.get(`${__API_URL__}/api/v1/narrative/${commonName}`)
        .then(descriptionData => {
          descriptionData = JSON.parse(descriptionData);
          $('#newAnimal').append(`<h3><span>Description:</span> ${descriptionData.result[0].rationale}</h3>`)

          $.get(`${__API_URL__}/api/v1/images/${commonName}`)
            .then(imageData => {
              imageData = JSON.parse(imageData);
              $('#newAnimal').prepend(`<img class="species-image" src=${imageData.value[0].contentUrl} />`)
            })
        })
    })
})


// +++++++++++++++++++++++++++++++
// API Calls For Category Selection
// +++++++++++++++++++++++++++++++

$('select[name="category"]').on('change', function(event) {
  var selectedCategory = event.target.value;
  console.log(selectedCategory);
  $.get(`${__API_URL__}/api/v1/category/${selectedCategory}`)
    .then(categoryData => {
      categoryData = JSON.parse(categoryData);
      randomIndex = Math.floor(Math.random()*categoryData.result.length);
      $('#category-results').append(`<h3><span>Scientific Name: </span>${categoryData.result[randomIndex].scientific_name}</h3>`)
      let commonName = categoryData.result[randomIndex].scientific_name.toLowerCase().replace(' ', '%20');
      console.log(commonName.toLowerCase());

      $.get(`${__API_URL__}/api/v1/commonName/${commonName}`)
        .then(commonData => {
          commonData = JSON.parse(commonData);
          console.log('common data', commonData);
          if(commonData.result.length > 0) {
            $('#category-results').prepend(`<h3><span>Common Name:</span> ${commonData.result[0].taxonname}</h3>`)
          } else {
            $('#category-results').prepend('<h3><span>Common Name:</span> Common Name Data Does Not Exist For this Species</h3>');
          }
        });
      $.get(`${__API_URL__}/api/v1/narrative/${commonName}`)
        .then(descriptionData => {
          descriptionData = JSON.parse(descriptionData);
          $('#category-results').append(`<h3><span>Description:</span> ${descriptionData.result[0].rationale}</h3>`)

          $.get(`${__API_URL__}/api/v1/images/${commonName}`)
            .then(imageData => {
              imageData = JSON.parse(imageData);
              $('#category-results').prepend(`<img class="species-image" src=${imageData.value[0].contentUrl} />`)
            })
        })
    })
})

var $loading = $('#loadingDiv').hide();
$(document)
  .ajaxStart(function () {
    $loading.show();
  })
  .ajaxStop(function () {
    $loading.hide();
  });
