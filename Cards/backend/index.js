const express = require('express');
require('dotenv').config();
const debug = require('debug')('cards');
const chalk = require('chalk');
const morgan = require('morgan');


require('./src/config/mongooseConfig');


const server = express();
const port = process.env.PORT || 5002;

server.use(morgan('dev'));
server.use(express.json());

const userRouter = require ('./src/routes/userRoute');
const cardRouter = require('./src/routes/cardRoute');

server.use('/api/users', userRouter);
server.use('/api/cards', cardRouter);

server.listen(
    port,
    () => debug(`Server is running on ${chalk.bgYellow(`http://localhost:${port}`)}`)
);