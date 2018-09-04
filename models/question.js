// const pg = require('pg');
// const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/stackoverflow-lite';
// var dbConfig = require('../database.config.js');

// Connecting to the database
//pg.connect(dbConfig.url);


var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/stackoverflow-lite';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE questions(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', function() { client.end(); });

//module.exports = question;
