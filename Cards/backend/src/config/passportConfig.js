const passport = require('passport');

require('./passport-strategy/localStrategy');
require('./passport-strategy/jwtStrrategy');

function passportConfig(server) {
  server.use(passport.initialize());
}

module.exports = passportConfig;
