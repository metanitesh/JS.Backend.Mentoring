const express = require('express');
const { getAllBooks } = require('../controllers/bookController');

const bookRouter = express.Router();

function router() {
  bookRouter.get('/', async (req, res) => {
    const books = await getAllBooks();
    res.render('books', {
      books: books[0],
    });
  });
  return bookRouter;
}

module.exports = router;
