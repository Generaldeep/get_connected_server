const passport = require('passport');
const firebase = require('firebase');

// module.exports = app => {
//   app.get('/auth/google',
//     passport.authenticate('google', {
//       scope: ['profile', 'email']
//     })
//   );
//
//   app.get('/auth/google/callback', passport.authenticate('google'))
// }
module.exports = app => {
  app.get('/api/login', (req, res) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  provider.addScope('https://www.googleapis.com/auth/plus.login');
   firebase.auth().signInWithPopup(provider).then((result) => {
    const user = result.user;
    // res.send(user)
    // return addNonExistingUsers(user);
  }).catch(err => (err));
  })
}
