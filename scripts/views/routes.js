'use strict';
var app = app || {};

page('/', () => app.animalView.initIndexPage);
page('/about', () => app.animalView.initAboutPage);
page('/selectedCountry', () => app.animalView.selectedAnimalView);
page('/speciesByCategory', () => app.animalView.speciesByCategoryView);
page();
