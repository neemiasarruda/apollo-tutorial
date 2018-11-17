const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const LaunchAPI = require('./datasources/launch');

const dataSources = () => ({
  launchAPI: new LaunchAPI()
});

const server = new ApolloServer({
  typeDefs,
  dataSources
});

server.listen().then( ({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
})