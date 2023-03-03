// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


Product.belongsTo(Category, {
  // Product belongs to Category, associated by category_id
  foreignKey: 'category_id',
});

Category.hasMany(Product, {
  // Category has many Products, associated by category_id
  foreignKey: 'category_id'
})

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tagged_products'
});

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_tags'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
