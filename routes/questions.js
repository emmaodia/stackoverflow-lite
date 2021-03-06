const express = require('express');
const router = express.Router();
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/stackoverflow-lite';

//This is the Route to GET all Questions on the platform
router.get('/', (req, res, next) => {

  var id = parseInt(req.params);

  pg.connect( connectionString, (err, client, done) => {
    if(err){
      return console.error('error fetching client from pool', err);
    }
    client.query(`select * from public.questions`, (err, result) => {

      if(err){
        return console.error('error running query', err);
      }
      // This will return all the questions
      res.status(200).json({
        Questions: result.rows
      });
      done();
    });
  });
});

//This is the Route to POST a Question on the platform
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
      done();

    client.query('SELECT * FROM public.questions', (err, result) => {

      if(err){
        return console.error('error running query', err);
      }
      // console.log(result.rows)
      res.status(201).json({
        Questions: result.rows
      });
      done();
    });
  });
    //res.status(201).json({message: "It works"});
});

//This is the Route to EDIT a Question on the platform
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
        done();

      client.query('SELECT * FROM public.questions', (err, result) => {

        if(err){
          return console.error('error running query', err);
        }
        // log result on rows
        res.status(201).json({
          Questions: result.rows
        });
        done();
      });
    });
});

//This is the Route to POST an Answer to a Question on the platform
router.post('/:data_id/answers', (req, res, next) => {
  //Grab data from Http requests
  var data_id = parseInt(req.params.data_id);

  var data = {
    content: req.body.content
  }

  pg.connect(connectionString, (err, client, done) => {
    if(err){
      done();
      console.error('error fetching client from pool', err);
      res.status(500).json({ success: false, data: err});
    }

    client.query(`INSERT INTO public.answers(content, ans_id) values($1, ${data_id})`,
      [data.content]);
      done();

    client.query(`SELECT * FROM public.questions
                  INNER JOIN public.answers
                  ON public.answers.ans_id = public.questions.id
                  WHERE public.questions.id=${data_id}`, (err, result) => {

      if(err){
        return console.error('error running query', err);
      }
      // log result
      res.status(201).json({
        Answers: result.rows
      });
      done();
    });
  });
});

//This is the Route to EDIT an Answer to a Question on the platform
router.put('/:data_id/answers/:id', (req, res, next) => {
  //Grab data from Http requests
  var id = parseInt(req.params.id);

  var data = {
    content: req.body.content
  }

  pg.connect(connectionString, (err, client, done) => {
    if(err){
      done();
      console.error('error fetching client from pool', err);
      res.status(500).json({ success: false, data: err});
    }

    // SQL Query > Update Data
    client.query(`UPDATE public.answers SET content=($1) WHERE id=(${id})`, [data.content]);
    done();

  client.query(`SELECT * FROM public.questions
                INNER JOIN public.answers
                ON public.answers.ans_id = public.questions.id
                WHERE public.questions.id=${data_id}`, (err, result) => {

    if(err){
      return console.error('error running query', err);
    }
    // console.log(result.rows)
    res.status(201).json({
      Questions: result.rows
    });
    done();
  });
  });
});

//This is the Route to DELETE all Answers to a Question and Question itself on the platform
router.delete('/:data_id', (req, res, next) => {

  var id = req.params.data_id;

  pg.connect(connectionString, (err, client, done) => {

    if(err){
      done();
      console.error('error fetching client from pool', err);
      res.status(500).json({ success: false, data: err});
    }

    client.query('DELETE FROM public.questions WHERE id=($1)', [id]);
    done();

  client.query('SELECT * FROM public.questions', (err, result) => {

    if(err){
      return console.error('error running query', err);
    }
    // log result
    res.status(201).json({
      Questions: result.rows
    });
    done();
  });
  });
});

//This is the Route to GET a particular Question on the platform
router.get('/:data_id', (req, res, next) => {
  // Grab data from the URL parameters
  var data_id = parseInt(req.params.data_id);

  pg.connect( connectionString, (err, client, done) => {
    if(err){
      return console.error('error fetching client from pool', err);
    }

    client.query(`SELECT * FROM public.questions
                  WHERE public.questions.id=${data_id}`)
  .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data.rows,
          message: 'Single GET request successful'
        });
    })
    .catch(function (err) {
      return next(err);
    });
  });
});

//This is the Route to GET all Answers to a Question on the platform
router.get('/:data_id/answers', (req, res, next) => {
  // Grab data from the URL parameters
  var data_id = parseInt(req.params.data_id);

  pg.connect( connectionString, (err, client, done) => {
    if(err){
      return console.error('error fetching client from pool', err);
    }

    client.query(`SELECT * FROM public.questions
                  INNER JOIN public.answers
                  ON public.answers.ans_id = public.questions.id
                  WHERE public.questions.id=${data_id}`
                )
  .then((data) => {
      res.status(200)
        .json({
          status: 'success',
          data: data.rows,
          message: 'Single GET request successful'
        });
    })
    .catch(function (err) {
      return next(err);
    });
  });
});

module.exports = router;
