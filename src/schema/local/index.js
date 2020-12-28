import { addMockFunctionsToSchema, makeExecutableSchema } from 'apollo-server';

import { typeDefs, mocks } from './mocks.js';

// * subschema
const subschema = makeExecutableSchema({
  typeDefs,
});

// * add mocks to subschema
addMockFunctionsToSchema({
  schema: subschema,
  mocks,
  preserveResolvers: true,
});

export default subschema;
