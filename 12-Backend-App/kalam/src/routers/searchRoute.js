const express = require('express');
const { searchByFullText } = require('../controllers/searchController');
const searchRoute = express.Router();

function router() {
  searchRoute.post('/', async (req, res) => {
    var results = await searchByFullText(req.body.search);
    console.log(results[0]);
    res.render('books', {
      books: results[0],
    });
  });


  return searchRoute;
}

module.exports = router;
