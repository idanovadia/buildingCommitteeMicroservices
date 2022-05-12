import { ApolloServer } from 'apollo-server-express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

import resolvers from "../graphql/resolvers/index.js";
import typeDefs from "../graphql/typeDefs.js";
import accessEnv from "../helpers/accessEnv.js";
import verifyToken from "../helpers/verifyToken.js";

const startApolloServer = async (typeDefs, resolvers) => {

    const PORT = accessEnv("PORT",7000);
    // Same ApolloServer initialization as before

    const getUser = token => {
      console.log(token);
      if(!token) return null;
      return verifyToken(token);
    };

    const server = new ApolloServer({ 
      typeDefs,
      resolvers,
      context: ({ req }) => ({ user: () => getUser(req.headers.authorization) })
    });
  
    // Required logic for integrating with Express
    await server.start();
  
    const app = express();

    app.use(cookieParser());

    app.use(cors({
        origin: (origin, cb) => cb(null,true),
        credentials: true
    }));
  
    server.applyMiddleware({app,cors: false, path: "/graphql"});

    app.listen(PORT, "0.0.0.0", () => {
        console.info(`API-GATEWAY listening on ${PORT}`);
    });
  }

const callStartApolloServer = () => {
  startApolloServer(typeDefs,resolvers);
}

export default callStartApolloServer;
