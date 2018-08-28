const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

const questionRouter = require('./routes/questions');

app.use('/api/v1/questions', questionRouter)

app.listen(8080, () => console.log('App listening on port 8080!'))
module.exports = app;
