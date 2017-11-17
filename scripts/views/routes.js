'use strict';
var app = app || {};

<<<<<<< HEAD
page('/', () => app.animalView.initIndexPage);
=======
// page('/', () => app.animalView.initIndexPage);
>>>>>>> 8c688b61fe3f189ff31af8d2fe22e0aaf1c8261d
page('/about', () => app.animalView.initAboutPage);
page('/selectedCountry', () => app.animalView.selectedAnimalView);
page('/speciesByCategory', () => app.animalView.speciesByCategoryView);
page();
