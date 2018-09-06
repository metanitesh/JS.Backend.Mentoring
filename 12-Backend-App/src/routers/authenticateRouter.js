const express = require('express');
const { signin, signup } = require('../controllers/authenticateController');


const signupRouter = express.Router();

function router() {
  signupRouter.post('/signup', async (req, res) => {
    const result = await signup(req.body);
    res.redirect(`/?message=${result.message}`);
  });

  signupRouter.post('/signin', async (req, res) => {
    const result = await signin(req.body);
    console.log("sd", result);
    if (result.user) {
      req.session.user = result;
    }
    res.redirect(`/?message=${result.message}`);
  });

  signupRouter.post('/logout', async (req, res) => {
    req.session.destroy();
    res.redirect('/');
  });

  return signupRouter;
}

module.exports = router;
