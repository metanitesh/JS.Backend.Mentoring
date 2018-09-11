const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const warden = require('./service/warden');
const bookRouter = require('./routers/bookRouter');
const authorRouter = require('./routers/authorRouter');
const authenticateRouter = require('./routers/authenticateRouter');
const searchRoute = require('./routers/searchRoute');

const app = express();

// (async function () {
//   const response = await warden.handshake();
//   console.log(response.data);
// }());


// const result = await axios.post('http://localhost:5000/handshake', data


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: 'Mount blue session' }));

app.use(express.static('public'));


app.set('views', './src/views');
app.set('view engine', 'ejs');

app.post('/authenticate/signup', async (req, res) => {
  console.log('in signup');
  console.log(req.body);
  const result = await axios.post('http://localhost:5000/signup', req.body);

  console.log(result);
  res.redirect(`/?message=${result.data.message}`);
});


function authenticate(req, res, next) {
  console.log(req.cookies.JWT);
  if (!req.cookies.JWT) {
    console.log('failed');
    res.redirect('/unauthorized');
  } else {
    jwt.verify(req.cookies.JWT, 'mountblue', (err, decode) => {
      if (!decode || !decode.user || !decode.user.id) {
        res.redirect('/unauthorized');
      } else {
        req.user = decode.user;
        next();
      }
    });
  }
}


app.use('/books', authenticate, bookRouter());
app.use('/authors', authenticate, authorRouter());
// app.use('/authenticate', authenticateRouter());
app.use('/search', searchRoute());


app.get('/', (req, res) => {
  res.render('home', {
    message: req.query.message,
  });
});

app.get('/unauthorized', (req, res) => {
  res.render('unauthorized', {
    message: req.query.message,
  });
});


app.listen(4000, () => console.log('Example app listening on port 4000!'));
