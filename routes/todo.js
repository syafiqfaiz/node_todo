const express = require('express');
const router = express.Router();
const db = require('../db')

/* GET home page. */
router.post('/', async function(req, res, next) {
  const item = req.body.todo
  await db.query(
    'INSERT INTO todos(item) VALUES($1)',
    [item]
  )

  res.redirect('/')
});

router.post('/:id', async function(req, res, next) {
  const id = req.params.id

  await db.query('DELETE FROM todos WHERE id = $1', [id])

  res.redirect('/')
});

module.exports = router;
