(function () {
  'use strict'
  const express = require('express')
  const app = express()
  const PORT = 89

  function callback(request, response) {
    response.redirect('index.html')
  }

  app.use(express.static(__dirname + '/'))
  app.get('/', callback)
  app.listen(PORT)

  console.log('Serving at PORT:' + PORT)
  console.log('Open Chrome and redirect to localhost:89')

})();
