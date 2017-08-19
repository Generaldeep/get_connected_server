const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const firebase = require('firebase');
const firebaseInfo = require('./config/firebaseConfig');
require('./services/passport');

const app = express();




// Initialize Firebase
const config = {
  apiKey: firebaseInfo.apiKey,
  authDomain: firebaseInfo.authDomain,
  databaseURL: "https://getconnected-1a33d.firebaseio.com",
  projectId: firebaseInfo.projectId,
  storageBucket: "",
  messagingSenderId: firebaseInfo.messagingSenderId
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



require('./routes/jobs')(app);
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5050;
app.listen(PORT)
