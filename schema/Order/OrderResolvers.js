const Order = require('../../models/order/Order');

const orderResolvers = {
  Query: {
    orders: async () => {
      const orders = await Order.findAll();
      const result = orders.map(order => {
        const { id, widgets } = order.dataValues;
        return {
          id,
          widgets,
        }
      });
      return result;
    },
  },
  Mutation: {
    createOrder: async (obj, args) => {
      const { widgets } = args;
      const stringifiedWidgets = JSON.stringify(widgets);
      const result = await Order.create({ widgets: stringifiedWidgets });
      const { id } = result.dataValues;
      return id;
    },
  }
};

module.exports = orderResolvers;