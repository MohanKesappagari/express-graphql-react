import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";

import { buildSchema } from "type-graphql";
import { PersonResolver } from "./graphql/person/person.resolver";
import { AppDataSource } from "./typeorm-connect";
const PORT = 5000;

const main = async () => {
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PersonResolver],
      validate: false,
    }),
  });
  await apolloServer.start();
  const app = express();
  apolloServer.applyMiddleware({ app });
  app.get("/", (req, res) => res.send("hello world"));

  app.listen(PORT, () => console.log(`Running at ${PORT}`));
};

AppDataSource.initialize()
  .then(() => main())
  .catch((e) => console.log(e));
