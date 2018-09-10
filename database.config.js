module.exports = {
    url: 'postgres://localhost:5432/stackoverflow-lite'
}

//Connect to DB
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/stackoverflow-lite';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, title VARCHAR(40) not null, body VARCHAR not null)');
query.on('end', function() { client.end(); });
