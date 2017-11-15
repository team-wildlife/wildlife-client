'use strict';
var app = app || {};

((module) => {
  var animalView = {};


  animalView.initIndexPage = () => {
    $('.about-view').hide();
    $('selected-animal-view').hide();
    $('#results-common').hide();
    $('#travel-wild').show();
    $('#country-list').show();
  };

  animalView.initAboutPage = () => {
    $('selected-animal-view').hide();
    $('#results-common').hide();
    $('#country-list').hide();
    $('#travel-wild').show();
    $('.main-nav').show();
    $('.about-view').show();
  };

  animalView.selectedAnimalView = () => {
    $('.about-view').hide();
    $('#travel-wild').hide();
    $('selected-animal-view').show();
    $('#results-common').show();
    $('#country-list').show();
    $('.main-nav').show();
  }

  $('#about').on('click', () => {
    animalView.initAboutPage()
  })

  $('#home').on('click', () => {
    animalView.initIndexPage()
  })

  $('select[name="country"]').on('change', () => {
    animalView.selectedAnimalView();
    window.location.href='/selectedAnimal';
  })

  module.animalView = animalView;
})(app);

$(document).ready(function() {
  app.animalView.initIndexPage();
});
