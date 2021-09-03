const express = require('express');
require('dotenv').config();
const debug = require('debug')('cards');
const chalk = require('chalk');
const morgan = require('morgan');
const cors = require('cors');
const passportConfig = require('./src/config/passportConfig');
require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5002;

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
passportConfig(server);

const userRouter = require('./src/routes/userRoute');
const cardRouter = require('./src/routes/cardRoute');
const packCardRouter = require('./src/routes/packCardRoute');
const authRouter = require('./src/routes/authRoute');

server.use('/api/users', userRouter);
server.use('/api/cards', cardRouter);
server.use('/api/packCards', packCardRouter);
server.use('/', authRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.bgYellow(`http://localhost:${port}`)}`)
);
