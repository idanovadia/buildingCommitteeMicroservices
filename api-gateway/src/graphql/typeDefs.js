import { gql } from "apollo-server";

const typeDefs = gql`
    type Payment {
        id: ID!
        amount: Int!
        description: String!
    }

    type Mutation {
        createPayment(
            amount: Int!
            description: String!
            eventID: Int!
            userID: Int!
            statusID: Int!
        ): Payment!

        createUser(
            firstName: String!
            lastName: String!
            phone: String!
            addressID: ID!
            password: String!
            email: String!
            username: String!
            groupID: ID!
        ): String
    }

    type Query {
        payments : [Payment!]!
    }
`;

export default typeDefs;