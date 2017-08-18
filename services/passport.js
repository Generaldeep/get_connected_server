const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const firebase = require('firebase');

passport.use(new GoogleStrategy(
  {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },
  (accessToken, refreshToken, profile, done) => {
    let user = {deep: profile.id}

    firebase.database().ref('users').push().set(user);
  }));
