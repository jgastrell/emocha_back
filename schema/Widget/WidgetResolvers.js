const Widget = require('../../models/widget/Widget');

const widgetResolvers = {
  Query: {
    widgets: async () => {
      const response =  await Widget.findAll();
      return response;
    },
  }
};

module.exports = widgetResolvers;