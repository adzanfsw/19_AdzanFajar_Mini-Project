import { ApolloClient, InMemoryCache } from '@apollo/client';

const news = new ApolloClient({
  uri: 'https://epic-kid-43.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret':
      'Du1hBez7CSwOjnYqi3hWL6YaHqh2MsCcG8IozphwfWo6yM1wwaYzrywvzDVv6gm5',
  },
  cache: new InMemoryCache(),
});

export default news;
