const axios = require('axios');

module.exports = app => {
  app.get('/api/test', (req, res, next) => {
    res.send('test works')
  });
  app.get('/api/testing', (req, res, next) => {
    res.send('test works just fine')
  });
}
