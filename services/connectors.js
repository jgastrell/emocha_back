const Sequelize = require('sequelize');
const envFile = require('../config/env');
const operatorAliazes = require('./sequalize-operators');

const inventoryConnector = new Sequelize(
  envFile.DATABASE.INVENTORY.MASTER.NAME,
  envFile.DATABASE.INVENTORY.MASTER.USER,
  envFile.DATABASE.INVENTORY.MASTER.PASS,
  {
    host: envFile.DATABASE.INVENTORY.MASTER.HOST,
    port: 3306,
    dialect: 'mysql',
    operatorAliases: operatorAliazes,
    define: {
      timestamps: false,
      freezeTableName: true,
    },
  }
);

module.exports = inventoryConnector;

