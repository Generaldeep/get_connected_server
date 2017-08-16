const axios = require('axios');

module.exports = app => {
  app.get('/api/jobs', (req, res, next) => {
    axios.get('http://service.dice.com/api/rest/jobsearch/v1/simple.json?text=javascript&city=94102&pgcnt=20')
    .then((data) => {
       return data.data.resultItemList
    })
    .then((jsonData) => {
      res.send(jsonData);
    })
    .catch((err) => {
      next(err)
    });
  });

}
