import { gql } from "apollo-server";

const typeDefs = gql`
    type Payment {
        id: ID!
        amount: Int!
        description: String!
    }
    
    type UserSession {
        token: String!
    }

    type UserDetails {
        firstName: String!
        lastName: String!
        phone: String!
        password: String!
        email: String!
        username: String!
        groupID: ID!
        groupName: String!
        address: Address!
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

    input UserLogin {
        username: String!
        password: String!
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
        payments: [Payment!]!
        login(userLogin: UserLogin!): UserSession!
        userDetails: UserDetails!
    }
`;

export default typeDefs;