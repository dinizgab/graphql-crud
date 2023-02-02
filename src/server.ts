import { ApolloServer, gql } from "apollo-server";
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typeDefs";

const corsConfigs = {
  origin: "https://studio.apollographql.com",
  credentials: true,
}

const app = new ApolloServer({ typeDefs, resolvers, cors: corsConfigs });

app.listen().then(({ url }) => console.log(`Server running: ${url}`));
