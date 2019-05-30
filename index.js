const express = require('express');
const { typeDefs, resolvers } = require('./schema');
const { ApolloServer } = require('apollo-server-express');

const app = express();

const server = new ApolloServer({ typeDefs, resolvers, cors: true });

server.applyMiddleware({ app });

app.listen(4000, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
});

