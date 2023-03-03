const Sequelize = require('sequelize');
require('dotenv').config();


/*const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: '127.0.0.1',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    }); */

    const sequelize = new Sequelize(
    
      'ecommerce_db',
      // User
      'root',
      // Password
      'Odinson!042920',
      {
        // Database location
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
      }
    );

module.exports = sequelize;
