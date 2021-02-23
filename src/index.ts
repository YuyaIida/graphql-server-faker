import { ApolloServer } from "apollo-server";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { addResolversToSchema } from "@graphql-tools/schema";
import { resolvers } from './resolvers'
import { mocks } from './mock'

const schema = loadSchemaSync("src/graphql/schemas/*.graphql", {
  loaders: [new GraphQLFileLoader()]
})

const schemaWithResolver = addResolversToSchema({
  schema,
  resolvers
})

export const apolloServer = new ApolloServer({
  schema: schemaWithResolver,
  mocks
})

apolloServer.listen({ port: 8888 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})