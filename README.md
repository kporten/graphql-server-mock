# play-graphql-server-mock

Apollo GraphQL server mock with schema stitching

## Prepare

`.env`

```ini
PORT=4000 # start the server with mocks on this port
API_URL=https://swapi-graphql.netlify.app/.netlify/functions/index # your existing GraphQL API address
```

## Develop

```sh
yarn start # start the GraphQL server and the playground (default on http://localhost:4000/)
```

The following files should be modified by your requirements:
- `./src/schema/local/mocks.js`
- `./src/schema/local/generators.js`
