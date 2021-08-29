const express = require('express');
require('dotenv').config();
const debug = require('debug')('server');
const chalk = require('chalk');


require('./src/config/mongooseConfig');


const server = express();
const port = process.env.PORT || 5002;

server.use(express.json());

server.listen(
    port,
    () => debug(`Server is running on ${chalk.bgYellow(`http://localhost:${port}`)}`)
);