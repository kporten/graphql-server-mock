import { MockList, gql } from 'apollo-server';
import casual from 'casual';

import './generators.js';

// TODO add your type definitions (https://www.apollographql.com/docs/apollo-server/testing/mocking/)
export const typeDefs = gql`
  scalar DateTime

  type Query {
    hello: String
    user(id: ID!): User
    users: [User]
  }

  type Mutation {
    updateUser(id: ID!): User
  }

  type User {
    id: ID!
    name: String!
    age: Int!
    createdAt: DateTime!
  }
`;

// TODO add your mocks (https://www.apollographql.com/docs/apollo-server/testing/mocking/)
export const mocks = {
  DateTime: () => casual.date('YYYY-MM-DDTHH:mm:ssZ'),
  Query: () => ({
    users: () => new MockList([1, 3]),
  }),
  User: (parent, args) => casual.user(args.id),
};
