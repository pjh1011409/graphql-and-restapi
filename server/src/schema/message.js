import { gql } from "apollo-server-express";

const messageSchema = gql`
  type Message {
    id: ID!
    text: String!
    user: User!
    timeStamp: Float
  }
  extend type Query {
    message(cursor: ID): [Message!]!
    messages(id: ID!): Message!
  }

  extend type Mutation {
    createMessage(text: String!, userId: ID!): Message!
    update(id: ID!, text: String!, userId: ID!): Message!
    delete(id: ID!, userId: ID!): ID!
  }
`;

export default messageSchema;
