const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  try {
    const categoryData = Category.findAll({
      include: [{ model: Product }],
    });
    
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  try {
    const categoryData = Category.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Product }],
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

router.post('/', (req, res) => {
  // create a new category
  try {
    const categoryData = Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  try {
    const categoryData = Category.update({
      category_name: req.body.category_name 
    },
      { where: { id: req.body.id, }
    }
  );

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
