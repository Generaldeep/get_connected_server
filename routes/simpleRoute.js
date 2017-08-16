module.exports = app => {
  app.get('/', (req, res) => {
    res.send('tis working');
  })
  app.get('api/hi', (req, res) => {
    res.send('hello hello');
  })
}
