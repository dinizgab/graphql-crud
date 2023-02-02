import { ApolloServer, gql } from "apollo-server";

const corsConfigs = {
  origin: "https://studio.apollographql.com",
  credentials: true,
}
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello World",
  },
};

const app = new ApolloServer({ typeDefs, resolvers, cors: corsConfigs });

app.listen().then(({ url }) => console.log(`Server running: ${url}`));
