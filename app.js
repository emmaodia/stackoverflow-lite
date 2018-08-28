const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();


app.listen(3000, () => console.log('App listening on port 8080!'))
module.exports = app;
