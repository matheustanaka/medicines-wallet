import startServer from "./database/server";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import dotenv from "dotenv";

dotenv.config();
startServer({ typeDefs, resolvers});