import { introspectSchema } from '@graphql-tools/wrap';
import { fetch } from 'cross-fetch';
import { print } from 'graphql';

// * remote executor
const remoteExecutor = async ({ document, variables }) => {
  const query = print(document);

  const fetchResult = await fetch(process.env.API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });

  return fetchResult.json();
};

// * subschema
const subschema = {
  schema: await introspectSchema(remoteExecutor),
  executor: remoteExecutor,
};

export default subschema;
