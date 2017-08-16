const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: true,
  credentials: true
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions))  
app.options('*', cors(corsOptions));

require('./routes/simpleRoute')(app);
require('./routes/jobs')(app);

const PORT = process.env.PORT || 5050;
app.listen(PORT)
