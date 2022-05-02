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
    }

    type Query {
        payments : [Payment!]!
    }
`;

export default typeDefs;