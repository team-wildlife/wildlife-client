'use strict';

var app = app || {};

if(window.location.pathname !== '/') {
  page.base('/');
}

page('/', app.Animal.fetchAll(app.animalView.initIndexPage));
// page('/results', app.animalView.initResultsPage);
page('/about', app.animalView.initAboutPage);


// page('/', (ctx) => app.animalView.(ctx));
//
// page('/', (ctx) => app.animalView.initUpdatePage(ctx));

page();
