//https://developer.edamam.com/edamam-docs-recipe-api
$(function() {
  console.log('123 testando... :o');

  $.get('/edamam/search?q=vegetarian')
.then(data => {
  console.log(data.hits);
  data.hits.forEach(nom => $('#results').append(`<p>${nom.recipe.label}<img src="${nom.recipe.image}" alt="${nom.recipe.label}" height="42" width="42"></p>`));
},
  err => {
    console.error('Status Code: ', err.status);
  });
  
  $.get('/salads', function(salads) {
    salads.forEach(function(result) {
      $('<li></li>').text(result).appendTo('ul#salads');
    });
  });

  $.get('/edamam', function(res) {
    res.forEach(function(result) {
      $('<li></li>').text(result).appendTo('TESTE');
    });
  });

});


