const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const questionRouter = require('./routes/questions');

app.use('/api/v1/questions', questionRouter)

app.listen(3000, () => console.log('App listening on port 8080!'))
module.exports = app;
