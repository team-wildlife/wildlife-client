'use strict';
var app = app || {};

page('/', () => app.animalView.initIndexPage);
page('/about', () => app.animalView.initAboutPage);
page();
