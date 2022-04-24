import { gql } from "apollo-server";

const typeDefs = gql`
    type Payment {
        id: ID!
        amount: Int!
        description: String!
    }

    type Query {
        payments : [Payment!]!
    }
`;

export default typeDefs;