const axios = require('axios');

const isbn = 8172234988;
const url = `https://www.goodreads.com/book/isbn/${isbn}?format=json&key=hmiSj3sXiKWO1aIQvcJrZA`

function getBookInfo(id) {
  return axios.get(url);
}

getBookInfo();

module.exports = {
  getBookInfo,
};
