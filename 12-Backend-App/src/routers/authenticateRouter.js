const express = require('express');
const singupController = require('../controllers/authenticateController');

const signupRouter = express.Router();

function router() {
  signupRouter.post('/', async (req, res) => {
    const result = await singupController(req.body);
    res.redirect(`/?message=${result.message}`);
  });

  
  return signupRouter;
}

module.exports = router;
