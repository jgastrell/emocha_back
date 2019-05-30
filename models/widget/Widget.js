const Sequelize = require('sequelize');
const inventoryConnector = require('../../services/connectors');

const Widget = inventoryConnector.define(
  'widget',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    size: Sequelize.STRING,
    color: Sequelize.STRING,
    type: Sequelize.STRING,
    quantity:  Sequelize.STRING,
  },
  {
    tableName: 'widget',
  },
);

module.exports = Widget;
