import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { expressMiddleware } from "@apollo/server/express4";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import config from "./config.js";
import resolvers from "./resolvers.js";
import typeDefs from "./type-definitions.js";
import seed from "./data-seed.js";

const { json } = bodyParser;

const app = express();

const serverPort = config.SERVER_PORT;

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
  {
    title: "The Dark Tower",
    author: "Steven King",
  },
];

await mongoose.connect(config.MONGO_URL);
console.log("MongoDB connected");
// Seeding initial data if needed
await seed();

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

await server.start();

console.log("Apollo server started");

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
// const { url } = await startStandaloneServer(server, {
//   listen: { port: 4000 },
// });

// console.log(`🚀  Server ready at: ${url}`);

app.use("/", cors(), json(), expressMiddleware(server));

app.listen(serverPort, () => {
  console.log(`Express app started and listening on port ${serverPort}`);
});
