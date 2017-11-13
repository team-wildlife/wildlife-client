'use strict';
var app = app || {};

// const __API_URL__ = 'https://team-wildlife.herokuapp.com';
const __API_URL__ = 'http://localhost:3000';

((module) => {
  animalView.all = {};

  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  function Animal(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }

  Animal.prototype.toHtml = function() {
    var template = Handlebars.compile($('#').text());
    return template(this);
  };

  Animal.addDescription = function(data) {
    var template = Handlebars.compile($('#').text());
    return template(data);
  };

  Animal.loadAll = rawData => {
    Animal.all = rawData.map(resultsObj => new Animal(resultsObj));
  };

  Animal.fetchAll = callback => {
    console.log('fetchAll function called');
    $.get(`${__API_URL__}/`)
      .then(Animal.loadAll)
      .then(callback)
      .catch(errorCallback)
  }

  Animal.insertFormValues = data => {
    $('#').attr('', data.id);
    $('#').val(data.);
    $('#').val(data.);
    $('#').val(data.);
    $('#').val(data.);
    $('#').val(data.);
  }

  Animal.prototype.insertRecord = function(callback) {
    $.post(`${__API_URL__}/`, {})
      .then(app.Animal.fetchAll())
      .then(callback)
  };


  module.Animal = Animal;
})(app);
