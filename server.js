const express = require('express');
const requestProxy = require('express-request-proxy');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile('index.html')
});

// handles the route for our AJAX request to Edamam
app.get('/edamam/*', proxyEdamam);

function proxyEdamam(request, response) {
  console.log('Routing Edamam request');
  console.log('Deu certo');
  (requestProxy({
    url: `https://api.edamam.com/search`,
    headers: {
      app_id: '551d4b2e', // ID
      app_key: 'e7e1c5904bbd8ea64e41e983e4702632'}  // API KEY
  }))(request, response);
}

app.listen(PORT, () => console.log(`Acessar localhost:${PORT}`));
