const express = require('express');
const router = express.Router();
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/stackoverflow-lite';

router.get('/', (req, res, next) => {
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
  //Grab data from Http requests
  var data = {
    title: req.body.title,
    body: req.body.body
  }

  pg.connect(connectionString, (err, client, done) => {
    if(err){
      done();
      console.error('error fetching client from pool', err);
      res.status(500).json({ success: false, data: err});
    }

    client.query('INSERT INTO public.questions(title, body) values($1, $2)',
      [data.title, data.body]);
        });

    res.status(201).json({message: "It works"});
});

//PUT Method
router.put('/:data_id', function(req, res) {

    // Grab data from the URL parameters
    var id = req.params.data_id;

    // Grab data from http request
    var data = {
      title: req.body.title,
      body: req.body.body
    }

    // Get a Postgres client from the connection pool
    pg.connect(connectionString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).send(json({ success: false, data: err}));
        }

        // SQL Query > Update Data
        client.query("UPDATE public.questions SET title=($1), body=($2) WHERE id=($3)", [data.title, data.body, id]);

        // SQL Query > Select Data
        var query = client.query("SELECT * FROM public.questions ORDER BY id ASC");

        // Stream results back one row at a time
        // query.on('row', function(row) {
        //     results.push(row);
        // });

        // After all data is returned, close connection and return results
        // query.on('end', function() {
        //     done();
        //     return res.json(results);
        // });
        res.status(201).json({message: "Item edited"});
    });

});

router.delete('/:data_id', (req, res, next) => {
  // res.status(200).json({
  //   message : "requests to deletedd wrks"
  // });
  var id = req.params.data_id;

  pg.connect(connectionString, (err, client, done) => {

    if(err){
      done();
      console.error('error fetching client from pool', err);
      res.status(500).json({ success: false, data: err});
    }

    client.query('DELETE FROM public.questions WHERE id=($1)', [id]);
    res.status(200).json({
      message: "Question has been deleted"
    });
  });
});

module.exports = router;
