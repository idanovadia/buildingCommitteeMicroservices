import { gql } from "apollo-server";

const typeDefs = gql`
    type Payment {
        id: ID!
        amount: Int!
        description: String!
    }

    input Address{
        street: String!
        buildingNumber: String!
        apartmentNumber: String
        country: String!
        city: String!
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
            password: String!
            email: String!
            username: String!
            groupID: ID!
            address: Address!
        ): String
    }

    type Query {
        payments : [Payment!]!
    }
`;

export default typeDefs;