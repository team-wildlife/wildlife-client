'use strict';
var app = app || {};

((module) => {
  var animalView = {};

  animalView.handleAnimalSelection = () => {
    $('#country').on('click', '.country', function() {
      $('#country .country').hide();
      $('#country').empty();
      $('#country').fadeIn();
      app.Animal.fetchAll($(this).data('fetchAll'));
    });
  };


  animalView.initIndexPage = () => {
    console.log('animalView.initIndexPage function called');
    $('#home').empty();
    app.Animal.all.forEach(a => $('#home').append(a.toHtml()));
    $('.about-view').hide();
    $('#home').fadeIn();
  };

  animalView.initAboutPage = () => {
    console.log('animal.all.initAboutPage function called');
    $('.tab-content').hide();
    $('#about').fadeIn();
  };

  module.animalView = animalView;
})(app);


$('.tab').on('click', () => $('.main-nav ul').addClass('hide-nav'));
$('.icon-menu').click(() => $('.main-nav ul').toggleClass('hide-nav'));
$('main').on('click', () =>$('.main-nav ul').addClass('hide-nav'));
