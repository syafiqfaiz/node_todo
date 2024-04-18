const express = require('express');
const router = express.Router();
var db = require('../db.js')


/* GET home page. */
router.get('/', async function(req, res, next) {
  const dbQuery = await db.query('SELECT * from todos')
  const todos = dbQuery.rows

  res.render('index', { title: 'Todo App',  todos });
});

module.exports = router;
