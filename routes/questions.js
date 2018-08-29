const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message : "GET requests to the questions end point"
  });
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message : 'This is a success POST request to questions'
  });
});

module.exports = router;
