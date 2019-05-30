const OrderMutations = `
  createOrder(
    widgets: [OrderWidgetsInput!]
  ): ID!
`;

module.exports = OrderMutations;
