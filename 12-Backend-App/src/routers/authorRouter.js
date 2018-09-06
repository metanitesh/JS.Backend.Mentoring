const express = require('express');
const { getAllAuthors, getAuthorById } = require('../controllers/authorController');

const authorRoute = express.Router();

function router() {
  authorRoute.get('/', async (req, res) => {
    const authors = await getAllAuthors();
    res.render('authors', {
      authors: authors[0],
    });
  });

  authorRoute.get('/:id', async (req, res) => {
    const author = await getAuthorById(req.params.id);
    console.log(author[0]);
    res.render('author', {
      author: author[0][0],
    });
  });
  return authorRoute;
}

module.exports = router;
