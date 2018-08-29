const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/stackoverflow-lite';

const question = new pg.Client(connectionString);
question.connect();
const query = question.query(
  'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', () => { question.end(); });
