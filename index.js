const fs = require('fs')
const { GraphQLServer, PubSub } = require('graphql-yoga');
const typeDefs = fs.readFileSync('./typeDefs.gql', 'utf8')
const resolvers = require('./resolvers');
const pubsub = new PubSub()
const server  = new GraphQLServer({
  typeDefs,
  resolvers,
  context:{
    pubsub
  }
})
const options = {
  port: 3000
};
server.start(options, ({ port }) => {
  console.log(
    `Graphql Server started, listening on port ${port} for incoming requests.`,
  )
})