const express = require('express');
const bookRouter = require('./routers/bookRouter');

const app = express();

app.use('/books', bookRouter());


app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(4000, () => console.log('Example app listening on port 3000!'));
