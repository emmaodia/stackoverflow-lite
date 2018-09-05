var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/stackoverflow-lite';

var client = new pg.Client(connectionString);
client.connect();

//This table has to belong to Questions table
var query = client.query(`CREATE TABLE answers
                          (id SERIAL PRIMARY KEY,
                          text VARCHAR(40) not null,
                          body VARCHAR not null)`);
query.on('end', function() { client.end(); });
