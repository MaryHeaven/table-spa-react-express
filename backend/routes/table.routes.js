const router = require('express').Router();
// const { Op } = require('sequelize');
const { Table } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    console.log('rabotaet');
    const table = await Table.findAll();
    res.json(table);
  } catch (error) {
    res.json({ message: 'Произошла ошибка' });
  }
});

module.exports = router;
