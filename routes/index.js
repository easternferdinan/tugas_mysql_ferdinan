const express = require('express');
const Products = require('../app/model');
const router = express.Router();

// GET all data or the ones that match the query
router.get('/', async (req, res) => {
  try {
    const data = await Products.findAll({
      where: req.query
    });
    res.send(data);
  } catch(error) {
    res.send(error);
  }
});

// GET data based on id
router.get('/:id', async (req, res) => {
  try {
    const data = await Products.findAll({
      where: {
        id: req.params.id,
      }
    });
    res.send(data);
  } catch(error) {
    res.send(error);
  }
});

// POST and INSERT new data 
router.post('/', async (req, res) => {
  const { model, manufacturer, year} = req.body;  
  try {
    const store = await Products.create({ model, manufacturer, year });
    res.send(store);
  } catch(error) {
    res.send(error);
  }
});

// PUT UPDATE into the data based on id
router.put('/:id', async (req, res) => {
  try {
    const update = await Products.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
    res.send("Affected: " + update);
  } catch(error) {
    res.send(error);
  }
});

// DELETE data based on id
router.delete('/:id', async (req, res) => {
  try {
    await Products.destroy({
      where: {
        id: req.params.id
      }
    });
    res.sendStatus(200);
  } catch (error) {
    res.send(error);
  }
})

module.exports = router;
