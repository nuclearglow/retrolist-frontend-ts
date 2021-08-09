import {
    ApolloClient,
    ApolloLink,
    HttpLink,
    InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/link-error';

const client = new ApolloClient({
    // combine a few ApolloLinks into one additive composition
    // --> Error handler (graphql and network errors)
    // https://www.apollographql.com/docs/react/api/link/introduction/#additive-composition
    link: ApolloLink.from([
        // https://www.npmjs.com/package/apollo-link-error
        onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors)
                graphQLErrors.forEach(({ message, locations, path }) =>
                    console.log(
                        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                    ),
                );
            if (networkError)
                console.log(
                    `[Network error]: ${networkError}. Backend is unreachable. Is it running?`,
                );
        }),
        new HttpLink({
            // Snowpack Env: https://www.snowpack.dev/reference/environment-variables
            uri:
                import.meta.env.MODE === 'development'
                    ? import.meta.env.GRAPHQL_ENDPOINT_DEV
                    : import.meta.env.GRAPHQL_ENDPOINT_PROD,
            // send cookies
            fetchOptions: {
                credentials: 'include',
            },
        }),
    ]),
    // Apollo Caching: https://www.apollographql.com/docs/react/caching/advanced-topics/#gatsby-focus-wrapper
    // cache in the browser
    cache: new InMemoryCache({
        // Cache config: https://www.apollographql.com/docs/react/caching/cache-configuration/#typepolicy-fields
        typePolicies: {
            Query: {
                // cached fields config
                // https://www.apollographql.com/docs/react/caching/cache-field-behavior/
                fields: {
                    // TODO: We will add this together!
                    // allProducts: paginationField(),
                },
            },
            // custom merge for deleted lists -> always take the server side
            User: {
                fields: {
                    lists: {
                        merge(existing, incoming) {
                            return incoming;
                        },
                    },
                },
            },
        },
    }),
});

export default client;
