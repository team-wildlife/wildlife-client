'use strict'

//
// $.get('http://apiv3.iucnredlist.org/api/v3/country/getspecies/AZ?token=e66cfb0dfa5d5dab8984278503cec6af0bb18dc640e03fff2b7b796b69a97346')
//
// data => JSON.parse(data).forEach(repo =>
//   $('#results').append(`<h3>${repo.name}</h3><p>${repo.description}</p><hr>`)),
// data => console.log(JSON.parse(data)),
// err => console.error(err.status, err.statusText, 'is the way my stuff is broken'));

// .then(data => console.log(data))

// const TOKEN = process.env.REDLIST_TOKEN;


$.get(`http://apiv3.iucnredlist.org/api/v3/species/common_names/loxodonta%20africana?token=e66cfb0dfa5d5dab8984278503cec6af0bb18dc640e03fff2b7b796b69a97346`)

// .then(data => console.log(data))
  .then(
    data => JSON.parse(data).forEach(animal => {
      console.log(data)
      $('#results').append(`<h3>${animal.taxonname}</h3><p>${animal.language}</p><hr>`)
      // data => console.log(JSON.parse(data)),
      err => console.error(err.status, err.statusText, 'is the way my stuff is broken')

    })

  )
