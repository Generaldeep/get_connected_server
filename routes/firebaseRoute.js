const firebase = require('firebase');

module.exports = app => {
  firebase.database().ref('test').push().set('hello');
}
