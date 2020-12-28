import { stitchSchemas } from '@graphql-tools/stitch';
import { ApolloServer } from 'apollo-server';

import apiSubschema from './schema/api/index.js';
import localSubschema from './schema/local/index.js';

const schema = stitchSchemas({
  subschemas: [apiSubschema, localSubschema],
});

const server = new ApolloServer({
  schema,
  stopOnTerminationSignals: false,
});

const { url } = await server.listen(process.env.PORT);

console.info(`🚀 Server ready at ${url}`);
