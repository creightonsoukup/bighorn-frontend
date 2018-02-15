const express = require('express');
const router = express.Router();
const db = require('./database/queries')

router.post('/signups', async (req, res, next) => {
  console.log('hi')
  console.log(req)

  res.send('success')
});

module.exports = router


const signups = await db('signup')
