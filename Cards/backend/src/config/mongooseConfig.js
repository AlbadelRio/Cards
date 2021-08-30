const { connect } = require('mongoose');
const debug = require('debug')('cards:ddbbConfig');

connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
)
  .then(
    () => debug('Database connection stablished'),
    (error) => debug(error),
  );