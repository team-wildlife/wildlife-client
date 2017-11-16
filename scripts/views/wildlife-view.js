'use strict';
var app = app || {};

((module) => {
  var animalView = {};


  animalView.initIndexPage = () => {
    $('#gmap').hide();
    $('.about-view').hide();
    $('#results-common').hide();
    $('#category-results').hide();
    $('#travel-wild').show();
    $('#country-list').show();
    $('#species-by-category').show();
  };

  animalView.initAboutPage = () => {
    $('#gmap').hide();
    $('#results-common').hide();
    $('#country-list').hide();
    $('#species-by-category').hide();
    $('#category-results').hide();
    $('#travel-wild').show();
    $('.main-nav').show();
    $('.about-view').show();
  };

  animalView.selectedAnimalView = () => {
    $('.about-view').hide();
    $('#travel-wild').hide();
    $('#species-by-category').hide();
    $('#category-results').hide();
    $('#gmap').show();
    $('#results-common').show();
    $('#country-list').show();
    $('.main-nav').show();
  }

  animalView.speciesByCategoryView = () => {
    $('.about-view').hide();
    $('#gmap').hide();
    $('#results-common').hide();
    $('#country-list').hide();
    $('#travel-wild').show();
    $('.main-nav').show();
    $('#species-by-category').show();
    $('#category-results').show();
  }

  animalView.resetView = () => {
    $('#results-common').empty();
    $('#category-results').empty();
  }

  $('#about').on('click', () => {
    animalView.initAboutPage()
  })

  $('#home').on('click', () => {
    animalView.initIndexPage()
  })

  $('select[name="country"]').on('change', () => {
    animalView.resetView();
    animalView.selectedAnimalView();
    page('/selectedCountry');
  })

  $('select[name="category"]').on('change', () => {
    animalView.resetView();
    animalView.speciesByCategoryView();
    page('/speciesByCategory');
  })

  $('.main-nav').on('click', () => {
    $('.main-nav>ul').show();
  })

  module.animalView = animalView;
})(app);

$(document).ready(function() {
  app.animalView.initIndexPage();
});
