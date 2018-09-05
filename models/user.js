var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/stackoverflow-lite';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query(`CREATE TABLE IF NOT EXISTS
                          users(
                          id SERIAL PRIMARY KEY,
                          name VARCHAR(255),
                          email VARCHAR(255) NOT NULL UNIQUE,
                          CREATED_AT TIMESTAMP DEFAULT NOW(),
                          password VARCHAR(255) NOT NULL`);
query.on('end', function() { client.end(); });
