const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
//const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const questionRouter = require('./routes/questions');

app.use('/api/v1/questions', questionRouter)

app.listen(3000, () => console.log('App listening on port 8080!'))

// Database Set Up
const dbConfig = require('./database.config.js');
const pg = require('pg');

// Connecting to the database
pg.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

module.exports = app;
