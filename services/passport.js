// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const FirebaseStrategy = require('passport-firebase-auth').Strategy;
// const keys = require('../config/keys');
// const firebaseInfo =  require('../config/firebaseConfig');
// const firebase = require('firebase');
//
// passport.use(new GoogleStrategy(
//   {
//     clientID: keys.googleClientID,
//     clientSecret: keys.googleClientSecret,
//     callbackURL: '/auth/google/callback'
//   },
//   (accessToken, refreshToken, profile, done) => {
//     let user = {googleId: profile.id, name: profile.displayName}
//     let userKey = firebase.database().ref('users').push().key;
//     firebase.database().ref(`users/${userKey}`).set(user)
//   })
// );
