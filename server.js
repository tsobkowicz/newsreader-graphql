import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import { typeDefs } from './typedefs';
import { resolvers } from './resolvers';
import datasources from './datasources';

dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    ...datasources,
  }),
});

server.listen().then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});
