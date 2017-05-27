const express = require('express');
const requestProxy = require('express-request-proxy');
var emojiText = require("emoji-text");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile('index.html')
  	console.log(request.query.receitas);
    response.send('Response receitas:' + request.query.receitas);
    
    (requestProxy({
    url: `https://api.edamam.com/search`,
    headers: {
      app_id: '551d4b2e', // ID
      app_key: 'e7e1c5904bbd8ea64e41e983e4702632'}  // API KEY
  }))(request, response);
});

app.get("/salads", function (request, response) {
  response.send(salads);
});

app.get('/receitas', function (request, response) {
	
	console.log(request.query.receitas);
    response.send('Response receitas:' + request.query.receitas);
    
    (requestProxy({
    url: `https://api.edamam.com/search`,
    headers: {
      app_id: '551d4b2e', // ID
      app_key: 'e7e1c5904bbd8ea64e41e983e4702632'}  // API KEY
  }))(request, response);
});

var salads = [

  "salads one",
  "salads two",
  "salads three"

];

// handles the route for our AJAX request to Edamam
app.get('/edamam*/', proxyEdamam);


function proxyEdamam(request, response) {

  console.log('Routing Edamam request');
  console.log('Deu certo');
  console.log(emojiText.convert("🍎"));
  (requestProxy({
    url: `https://api.edamam.com/search`,
    headers: {
      app_id: '551d4b2e', // ID
      app_key: 'e7e1c5904bbd8ea64e41e983e4702632'}  // API KEY
  }))(request, response);
}

app.listen(PORT, () => console.log(`Acessar localhost:${PORT}`));
