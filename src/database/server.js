import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'

const startServer = ({ typeDefs, resolvers }) => {
  mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@drugs-wallet.igbzq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
    );
  
  //Conecting database with mongoose
  const db = mongoose.connection
  db.on('error', (error) => console.error(error))
  db.once('open', () => console.log('Connected to the database'))

  const server = new ApolloServer({ typeDefs, resolvers })
  server
    .listen(4000)
    .then(({ url }) => console.log(`Server is running at ${url}`))
}

export default startServer;
