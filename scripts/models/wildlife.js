'use strict';
var app = app || {};

// const __API_URL__ = 'https://team-wildlife.herokuapp.com';
const __API_URL__ = 'http://localhost:3000';

((module) => {
  Animal.all = [];

  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  function Animal(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }

  Animal.prototype.toHtml = function() {
    var template = Handlebars.compile($('#animal-template').text());
    return template(this);
  };

  Animal.addDescription = function(data) {
    var template = Handlebars.compile($('.byline').text());
    return template(data);
  };

  Animal.loadAll = rawData => {
    Animal.all = rawData.map(resultsObj => new Animal(resultsObj));
  };

  Animal.fetchOne = callback => {
    console.log('fetchOne function called');
    $.get(`${__API_URL__}/`)
      .then(Animal.loadAll)
      .then(callback)
      .catch(errorCallback)
  }

  Animal.fetchTwo = callback => {
    console.log('fetchTwo function called');
    $.get(`${__API_URL__}/`)
      .then(Animal.loadAll)
      .then(callback)
      .catch(errorCallback)
  }

  Animal.fetchThree = callback => {
    console.log('fetchThree function called');
    $.get(`${__API_URL__}/`)
      .then(Animal.loadAll)
      .then(callback)
      .catch(errorCallback)
  }

  module.Animal = Animal;
})(app);
