const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const PlanetAPI = require('./datasources/planet');
const StationAPI = require('./datasources/station');

// set up any dataSources our resolvers need
const dataSources = () => ({
    planetAPI: new PlanetAPI(),
    stationAPI: new StationAPI()
});

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources
});

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`);
});

// export all the important pieces for integration/e2e tests to use
module.exports = {
    dataSources,
    typeDefs,
    resolvers,
    ApolloServer,
    PlanetAPI,
    StationAPI,
    server,
  };