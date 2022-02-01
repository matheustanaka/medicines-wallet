import { mergeTypeDefs } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'
import path from "path";

//Adding a path that find all those files "modules", "**", "*.gql"
const typesArray = loadFilesSync(path.join(__dirname, "modules", "**", "*.gql"));
const typeDefs = mergeTypeDefs(typesArray);

//Return the typeDefs with type Users and Drugs

export default typeDefs;