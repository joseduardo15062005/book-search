const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    bookCount: Int!
    savedBooks: [Book]
  }
  type Book {
    _id: ID!
    title: String
    bookId: String
    image: String
    link: String
    description: String
    authors: [String]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
  }

  input SaveBookInput {
    bookId: String!
    title: String
    description: String
    image: String
    link: String
    authors: [String]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: SaveBookInput!): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
