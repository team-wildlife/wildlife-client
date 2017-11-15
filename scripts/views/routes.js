'use strict';
var app = app || {};

page('/', () => app.animalView.initIndexPage);
page('/about', () => app.animalView.initAboutPage);
page('/selectedAnimal', () => app.animalView.selectedAnimalView);
page();
