const _  = require('lodash');

/* Schemas */
const Widget = require('./Widget/WidgetSchema');
const Order = require('./Order/OrderSchema');

/* Resolvers */
const widgetResolvers = require('./Widget/WidgetResolvers');
const orderResolvers = require('./Order/OrderResolvers');

const types = [];
const queries = [];
const mutations = [];
const inputs = [];
const schemas = [
  Order,
  Widget,
];

schemas.forEach((s) => {
  types.push(s.types);
  queries.push(s.queries);
  mutations.push(s.mutations);
  inputs.push(s.inputs);
});

module.exports.typeDefs = `
  ${types.join('\n')}

  ${inputs.join('\n')}

  type Query {
    ${queries.join('\n')}
  }

  type Mutation {
    ${mutations.join('\n')}
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports.resolvers = _.merge(
  orderResolvers,
  widgetResolvers,
);