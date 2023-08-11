import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    address: String
    city: String
    stateProvince: String
    country: String
    postalCode: String
    phoneNumber: String
  }

  input SignupInput {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    address: String
    city: String
    stateProvince: String
    country: String
    postalCode: String
    phoneNumber: String
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type AuthResponse {
    token: String!
    user: User!
  }

  type SwitchModel {
    _id: ID
    category: String
    brand: String
    product: String
    switchType: String
    quantity: Int
    price: Int
    imageURL: String
  }

  type Keyboard {
    _id: ID
    brand: String
    model: String
    color: String
    keycaps: String
    plate: String
    case: String
    switches: String
    hotswap: Boolean
    price: Int
    quantity: Int
    imageURL: String
  }
  type Keycap {
    _id: ID
    category: String
    brand: String
    model: String
    price: Int
    quantity: Int
    imageURL: String
  }

  type Deskmat {
    _id: ID
    category: String
    brand: String
    model: String
    price: Int
    quantity: Int
    imageURL: String
  }

  type Accessory {
    _id: ID
    category: String
    brand: String
    model: String
    price: Int
    quantity: Int
    imageURL: String
  }

  type Query {
    user(_id: ID!): User
    switches: [SwitchModel]
    keyboards: [Keyboard]
    keycaps: [Keycap]
    deskmats: [Deskmat]
    accessories: [Accessory]
  }

  type Mutation {
    signup(input: SignupInput!): User!
    login(email: String!, password: String!): AuthResponse
  }
`;

export default typeDefs;
