'use strict';

$(function() {
  var speciesByCategory = [
    { id: 'DD', text: 'Data Deficient'},
    { id: 'LC', text: 'Least Concern'},
    { id: 'NT', text: 'Near Threatened'},
    { id: 'VU', text: 'Vulnerable'},
    { id: 'EN', text: 'Endangered'},
    { id: 'CR', text: 'Critically Endangered'},
    { id: 'EW', text: 'Extinct in the Wild'},
    { id: 'EX', text: 'Extinct'}
  ];

  function createSpeciesByCategory (category) {
    let $category = $(`<option value="${category.id}" name="${category.text}">${category.text}</option>`);
    $('#species-by-category').append($category);
  }
  speciesByCategory.forEach(x => createSpeciesByCategory(x));

});
