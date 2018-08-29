const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/stackoverflow-lite';

// const question = new pg.Client(connectionString);
// question.connect();
// const query = question.query(
//   'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
// query.on('end', () => { question.end(); });

// pg.on('error', function(error){
//     console.log(error);
//     pg.end();
// });
// var config = {};
// config.user = 'pos';
// config.password = 'oaikhenan';
// config.database = 'stackoverflow-lite';
// config.host = 'localhost';
// config.port = 5432;
// pg.connect(config, function(error, client, done){
//     console.log(error);
// });
// setTimeout(function(){
//     console.log('I have waited enough!')
// }, 10000)
