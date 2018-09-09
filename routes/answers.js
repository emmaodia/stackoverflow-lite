const express = require('express');
const router = express.Router();
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/stackoverflow-lite';

// router.get('/', (req, res, next) => {
//   res.status(200).json({
//     message : "GET answers"
//   });
// });

router.get('/', (req, res, next) => {
  pg.connect( connectionString, (err, client, done) => {
    if(err){
      return console.error('error fetching client from pool', err);
    }
    client.query('SELECT * FROM public.answers', (err, result) => {

      if(err){
        return console.error('error running query', err);
      }
      // console.log(result.rows)
      res.status(200).json({
        Answers: result.rows
      });
      done();
    });
  });
});

router.post('/', (req, res, next) => {
  //Grab data from Http requests
  var data = {
    content: req.body.content
  }

  pg.connect(connectionString, (err, client, done) => {
    if(err){
      done();
      console.error('error fetching client from pool', err);
      res.status(500).json({ success: false, data: err});
    }

    client.query('INSERT INTO public.answers(content) values($1)',
      [data.content]);
      done();

    client.query('SELECT * FROM public.answers', (err, result) => {

      if(err){
        return console.error('error running query', err);
      }
      // console.log(result.rows)
      res.status(201).json({
        Answers: result.rows
      });
      done();
    });
  });
    //res.status(201).json({message: "It works"});
});

module.exports = router;
