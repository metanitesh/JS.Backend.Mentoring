const axios = require('axios');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const isbn = 8172234988;
const url = `http://localhost:5000/handshake`

async function handshake() {
  const result = await axios.post(url, {
    firstName: 'Fred',
    lastName: 'Flintstone'
  });

  return result;
}



// async function signup(data) {
  
//   );

//   return result;
// }



module.exports = {
  handshake,
};
