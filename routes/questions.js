const express = require('express');
const router = express.Router();
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/stackoverflow-lite';

router.get('/', (req, res, next) => {
  // res.status(200).json({
  //   message : "GET requests to the questions end point"
  // });
  pg.connect( connectionString, (err, client, done) => {
    if(err){
      return console.error('error fetching client from pool', err);
    }
    client.query('SELECT * FROM public.questions', (err, result) => {

      if(err){
        return console.error('error running query', err);
      }
      // console.log(result.rows)
      res.status(200).json({
        Questions: result.rows
      });
      done();
    });
  });
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message : 'This is a success POST request to questions'
  });
});

module.exports = router;
