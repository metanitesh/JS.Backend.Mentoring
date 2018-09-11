const express = require('express');
const { getAllBooks, getBookById } = require('../controllers/bookController');
const { getBookInfo } = require('../service/bookservice');

const bookRouter = express.Router();

function router() {
  bookRouter.get('/', async (req, res) => {
    const books = await getAllBooks();
    res.render('books', {
      books: books[0],
    });
  });

  bookRouter.get('/:id', async (req, res) => {
    console.log(req.params.id);
    const book = await getBookById(req.params.id);
    const review = await getBookInfo();
    res.render('book', {
      book: book[0][0],
      review: review.data.reviews_widget,
    });
  });


  return bookRouter;
}

module.exports = router;
