const Order = require('../../models/order/Order');
const Widget = require('../../models/Widget/Widget');

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
      widgets.map(item => {
        const { id, quantity } = item;
        Widget.findByPk(parseInt(id)).then(widget => {
          return widget.decrement('quantity', {by: quantity})
        })
      });
      const stringifiedWidgets = JSON.stringify(widgets);
      const result = await Order.create({ widgets: stringifiedWidgets });
      const { id } = result.dataValues;
      return id;
    },
  }
};

module.exports = orderResolvers;