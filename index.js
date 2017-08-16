const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/simpleRoute')(app);
require('./routes/jobs')(app);

const PORT = process.env.PORT || 5050;
app.listen(PORT)
