const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
//const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const questionRouter = require('./routes/questions');
const answerRouter = require('./routes/answers');

app.use('/api/v1/questions', questionRouter)
app.use('/api/v1/answers', answerRouter)

app.listen(3000, () => console.log('App listening on port 8080!'))

// Database Set Up
const dbConfig = require('./database.config.js');
const pg = require('pg');

// Ensure connection to the database
pg.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

module.exports = app;
