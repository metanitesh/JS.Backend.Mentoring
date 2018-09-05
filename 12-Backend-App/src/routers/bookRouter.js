const express = require('express');
const { getAllBooks, getBookById } = require('../controllers/bookController');

const bookRouter = express.Router();

function router() {
  bookRouter.get('/', async (req, res) => {
    const books = await getAllBooks();
    res.render('books', {
      books: books[0],
    });
  });

  bookRouter.get('/:id', async (req, res) => {
    const book = await getBookById(req.params.id);
    console.log(book[0]);
    res.render('book', {
      book: book[0][0],
    });
  });


  return bookRouter;
}

module.exports = router;
