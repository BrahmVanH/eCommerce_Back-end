// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


Product.belongsTo(Category, {
  // Creating association between Category and Product classes through the 
  // 'category_id' property
  foreignKey: 'category_id',
});

Category.hasMany(Product, {
  // Creating association between Category and Product classes through the 
  // 'category_id' property
  foreignKey: 'category_id'
})

Product.belongsToMany(Tag, {
  //Creating association between Product and Tag classes, linking
  // them through the ProductTag class and tag_id property
  through: {
    model: ProductTag,
    unique: false
  },
  foreignKey: 'product_id'
});

Tag.belongsToMany(Product, {
  // Creating association between Tag and Product classes, linking the tables
  // through the ProductTag class and tag_id property
  through: {
    model: ProductTag,
    unique: false
  },
  foreignKey: 'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
