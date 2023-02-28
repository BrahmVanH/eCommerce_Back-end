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

Product.belongToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: //NEEDS TO ADD ALIAS for when data is retrieved
});

Tag.belongToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: // NEED TO ADD ALIAS FOR WHEN DATA IS RETRIEVED
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
