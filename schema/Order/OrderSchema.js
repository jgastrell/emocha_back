const OrderTypes = require('./OrderTypes');
const OrderQueries = require('./OrderQueries');
const OrderMutations = require('./OrderMutations');
const OrderInputs = require('./OrderInput');

module.exports.mutations = OrderMutations;
module.exports.types = OrderTypes;
module.exports.queries = OrderQueries;
module.exports.inputs = OrderInputs;
