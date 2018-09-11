const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
  res.status(200).json({
    message: "GET request to users"
  });
});

router.post('/signup', (req, res, next) => {
  //Grab data from Http requests
  var data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }

  pg.connect(connectionString, (err, client, done) => {
    if(err){
      done();
      console.error('error fetching client from pool', err);
      res.status(500).json({ success: false, data: err});
    }

    client.query('INSERT INTO public.users(name, email, password) values($1, $2, $3)',
      [data.name, data.email, data.password]);
      done();

    //Code block to test Users return
    // client.query('SELECT * FROM public.answers', (err, result) => {
    //
    //   if(err){
    //     return console.error('error running query', err);
    //   }
    //   // console.log(result.rows)
    //   res.status(201).json({
    //     Questions: result.rows
    //   });
    //   done();
    // });
  });
  // res.status(200).json({
  //   message : "This is a successful response request"
  // });
});

module.exports = router;
