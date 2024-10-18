import express from 'express';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import {expressMiddleware} from "@apollo/server/express4";
import axios from 'axios';



async function startServer(){
    const app = express();
    const server = new ApolloServer({
        typeDefs: `
  type User {
    id: ID!,
    name: String!,
    username: String!,
    email: String!,
    phone: String!,
    website: String!,
  }

  type Todo {
    id: ID!,
    title: String!,
    completed: Boolean
  }

  type Query {
    getTodos: [Todo]
    getAllUsers: [User]
    getUserByID(id: ID!): User
  }`
        ,
        resolvers : {
            Query : {
                getTodos : async ()=> (await axios.get("https://jsonplaceholder.typicode.com/todos")).data,
                getAllUsers : async ()=> (await axios.get("https://jsonplaceholder.typicode.com/users")).data,
                getUserByID : async (parent , {id})=> (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data
            }
        }
    })

    app.use(express.json());
    app.use(cors());

    await server.start();

    app.use("/graphql" , expressMiddleware(server));    

    app.listen(8000 , ()=> {console.log( "server started at port 8000")})
}

startServer();