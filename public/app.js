//https://developer.edamam.com/edamam-docs-recipe-api
$.get('/edamam/search?q=vegan')
.then(data => {
  console.log(data.hits);
  data.hits.forEach(nom => $('#results').append(`<p>${nom.recipe.label}<img src="${nom.recipe.image}" alt="${nom.recipe.label}" height="42" width="42"></p>`));
},
  err => {
    console.error('Status Code: ', err.status);
  });
