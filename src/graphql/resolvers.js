import { mergeResolvers } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'
import path from "path";

//Adding a path that find all those files "modules", "**", "resolvers.js"
const resolversArray = loadFilesSync(
  path.join(__dirname, "modules", "**", "resolvers.js")
);
const resolvers = mergeResolvers(resolversArray);


export default resolvers;