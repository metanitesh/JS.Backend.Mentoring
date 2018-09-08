const express = require('express');
const jwt = require('jsonwebtoken');
const { signin, signup } = require('../controllers/authenticateController');


const signupRouter = express.Router();

function router() {
  signupRouter.post('/signup', async (req, res) => {
    const result = await signup(req.body);
    res.redirect(`/?message=${result.message}`);
  });

  signupRouter.post('/signin', async (req, res) => {
    const result = await signin(req.body);
    let token;
    if (result.user) {
      token = jwt.sign({ user: result }, 'mountblue');
      res.cookie('JWT', token, { maxAge: 900000 });
    } else {
      res.cookie('JWT', 'invalid', { maxAge: -1000 });
    }
    res.redirect(`/?message=${token}`);
  });

  signupRouter.post('/logout', async (req, res) => {
    req.user = undefined;
    res.cookie('JWT', 'invalid', { maxAge: -1000 });
    res.redirect('/');
  });

  return signupRouter;
}

module.exports = router;
