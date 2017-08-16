const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const firebase = require('firebase');
const app = express();


// Initialize Firebase
const config = {
  apiKey: "AIzaSyDBShnmL4sNL09g5ZjE84iX0gSD_xJ8JQA",
  authDomain: "getconnected-1a33d.firebaseapp.com",
  databaseURL: "https://getconnected-1a33d.firebaseio.com",
  projectId: "getconnected-1a33d",
  storageBucket: "",
  messagingSenderId: "483962483612"
};
firebase.initializeApp(config);


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
require('./routes/firebaseRoute')(app);

const PORT = process.env.PORT || 5050;
app.listen(PORT)
