const express = require('express');
const router = express.Router();
const db = require('./database/knex')

router.get('/database/signups', async (req, res, next) => {
  const signups = await db('signup')
  res.json(signups)
});

module.exports = router
