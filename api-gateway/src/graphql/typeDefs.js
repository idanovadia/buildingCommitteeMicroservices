import { gql } from "apollo-server";

const typeDefs = gql`
    type Payment {
        id: ID!
        amount: Int!
        description: String!
    }

    input Address {
        street: String!
        buildingNumber: String!
        apartmentNumber: String
        country: String!
        city: String!
    }

    input Group {
        name: String!
        address: Address!
    }

    input User {
        firstName: String!
        lastName: String!
        phone: String!
        password: String!
        email: String!
        username: String!
        groupID: ID
        address: Address!
    }

    input Manager {
        user: User!
        group: Group!
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
            user: User!
        ): String

        createManager(
            manager: Manager!
        ): String
    }

    type Query {
        payments : [Payment!]!
    }
`;

export default typeDefs;