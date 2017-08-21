const axios = require('axios');

module.exports = app => {
  app.get('/api/test', (req, res, next) => {
    res.send('test works')
  });
}
