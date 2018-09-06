const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const bookRouter = require('./routers/bookRouter');
const authorRouter = require('./routers/authorRouter');
const authenticateRouter = require('./routers/authenticateRouter');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/books', bookRouter());
app.use('/authors', authorRouter());
app.use('/authenticate', authenticateRouter());

app.set('views', './src/views');

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    message: req.query.message
  });
});

app.listen(4000, () => console.log('Example app listening on port 3000!'));
