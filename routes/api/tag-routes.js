const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  
  Tag.findAll({
    include: [
      { 
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      }
    ]
  })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id, {
    include: [
      { 
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      }
    ],
  })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then(addedTagData => res.json(addedTagData))
    .catch(err => {
      res.status(500).json(err);
    });
});
    
 


router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then(dbTagData => res.status.json(dbTagData))
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      res.status(500).json(err);
  });
});


module.exports = router;
