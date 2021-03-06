/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

let refreshTokens = [];
async function registerUser({ body }, res) {
  try {
    const createdUser = await User.create(body);
    res.json(createdUser);
  } catch (error) {
    res.status(404);
    res.send(new Error('There is no users'));
  }
}
async function logOut({ body: { refreshToken } }, res) {
  refreshTokens = await refreshTokens.filter((current) => current !== refreshToken);
  res.send('Logout successful');
}

function createRefreshToken({ body: { refreshToken } }, res) {
  if (!refreshToken) {
    return res.sendStatus(401);
  }
  if (!refreshTokens.includes(refreshToken)) {
    return res.sendStatus(403);
  }
  return jwt.verify(refreshToken, process.env.JWT_SECRET, (err, { user }) => {
    if (err) {
      return res.sendStatus(403);
    }
    const data = { _id: user._id, email: user.email };

    const token = jwt.sign(
      { user: data },
      process.env.JWT_SECRET,
      { expiresIn: '60m' }
    );

    return res.json({
      token
    });
  });
}

async function logIn({ user }, res) {
  const data = { _id: user._id, email: user.email };

  const token = jwt.sign(
    { user: data },
    process.env.JWT_SECRET,
    { expiresIn: '60m' }
  );
  const refreshToken = jwt.sign(
    { user: data },
    process.env.JWT_SECRET
  );

  refreshTokens.push(refreshToken);

  return res.json({
    token,
    refreshToken,
    user
  });
}
module.exports = {
  registerUser, logOut, createRefreshToken, logIn
};
