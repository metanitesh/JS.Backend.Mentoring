import express from 'express';
import jwt from 'jsonwebtoken';
// import authenticateRouter from 'routers/authenticateRouter';
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.post('/handshake', (req, res) => {
  console.log(req.body);
  res.send({
    data: {
      text: 'warden',
    },
  });
});

app.post('/signup', async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  const url = 'mongodb://localhost:27017';
  const dbName = 'mountblue-users';

  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const col = db.collection('users');

    let user = await col.findOne({
      username,
    });

    if (user) {
      res.json({
        success: 'fail',
        message: 'user already defined',
      });
    }

    const hashPassword = bcrypt.hashSync(password, 10);
    user = { username, hashPassword };

    const results = await col.insertOne(user);
    console.log(results.ops[0]);

    res.json({
      user: results.ops[0]._id,
      success: true,
      message: 'User defined',
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: 'failed',
    });
  }
});

app.post('/authenticate', async (req, res) => {
  // const result = await (req.body);
  // let token;
  // if (result.user) {
  //   token = jwt.sign({ user: result }, 'mountblue');
  //   res.cookie('JWT', token, { maxAge: 900000 });
  // } else {
  //   res.cookie('JWT', 'invalid', { maxAge: -1000 });
  // }
  // res.redirect(`/?message=${token}`);
});


app.listen(5000, () => console.log('Warden is listening on port 5000!'));
