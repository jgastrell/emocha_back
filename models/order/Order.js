const Sequelize = require('sequelize');
const inventoryConnector = require('../../services/connectors');

const Order = inventoryConnector.define(
  'orders',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    widgets: Sequelize.STRING,
  },
  {
    tableName: 'orders',
  },
);

module.exports = Order;
