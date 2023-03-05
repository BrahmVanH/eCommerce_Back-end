const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = Category.findAll({
      include: [{ model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
       
      }],
    });
    
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = Category.findByPk(req.params.id, {
      include: [{ model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      }],
    });
    
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id.'});
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = Category.create(req.body,{
      where: {
        id: req.params.id,
      }
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  try {
    const categoryData = Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    }); 
    

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id.'});
      return;
    } 

  res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id.'});
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
