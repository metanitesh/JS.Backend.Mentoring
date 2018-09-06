const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');


async function signup(data) {
  const { username, password } = data;
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
      return {
        success: 'fail',
        message: 'user already defined',
      };
    }

    const hashPassword = bcrypt.hashSync(password, 10);
    user = { username, hashPassword };

    const results = await col.insertOne(user);
    console.log(results.ops[0]);

    return {
      user: results.ops[0]._id,
      success: true,
      message: 'User defined',
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: 'failed',
    };
  }
}

async function signin(data) {
  console.log(data);
  const { username, password } = data;
  const url = 'mongodb://localhost:27017';
  const dbName = 'mountblue-users';

  let user;
  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const col = await db.collection('users');

    user = await col.findOne({
      username,
    });

    if (!user) {
      return {
        message: 'user not found',
      };
    }

    if (user) {
      const result = bcrypt.compareSync(password, user.hashPassword);

      if (!result) {
        return {
          message: 'incorrect password',
        };
      }

      return {
        user: user.username,
        id: user._id,
        message: 'user loggedin'
      };
    }

  } catch (error) {
    console.log(error);
  }

  return {
    message: 'failed',
  };
}

module.exports = {
  signup,
  signin,
};
