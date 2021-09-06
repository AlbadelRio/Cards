const passport = require('passport');
const localStrategy = require('passport-local');
const Profile = require('../../models/userModel');

passport.use(
  'singup',
  new localStrategy.Strategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        // const profile = await Profile.create({ email, password });
        return done(null, true);
      } catch (error) {
        return done(error);
      }
    }
  )
);
passport.use(
  'login',
  new localStrategy.Strategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        const profile = await Profile.findOne({ email });
        if (!profile) {
          return done(null, false, { message: 'User not found' });
        }
        if (!profile.isValidPassword(password)) {
          return done(null, false, { message: 'Wrong password' });
        }
        return done(null, profile, { message: 'Logged in Sucessfully' });
      } catch (error) {
        return done(null, false);
      }
    }
  )
);
