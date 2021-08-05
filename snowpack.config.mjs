/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    mount: {
        // public is served as /
        public: { url: '/', static: true },
        // mounted source folders point to dist bundle
        src: { url: '/dist' },
        types: { url: '/dist' },
    },
    env: {
        GRAPHQL_ENDPOINT_DEV: 'http://10.10.10.100:3000/api/graphql',
        GRAPHQL_ENDPOINT_PROD: 'TODO',
    },
    plugins: [
        '@snowpack/plugin-react-refresh',
        [
            '@snowpack/plugin-typescript',
            {
                /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
                // eslint-disable-next-line no-undef
                ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
            },
        ],
        [
            '@snowpack/plugin-webpack',
            {
                sourceMap: true,
            },
        ],
    ],
    devOptions: {
        // https://www.snowpack.dev/reference/configuration#devoptions
        hostname: '10.10.10.100',
        open: 'none',
        port: 7777,
    },
    routes: [
        /* SPA Fallback for Development:
          https://www.snowpack.dev/guides/routing#scenario-1-spa-fallback-paths */
        { match: 'routes', src: '.*', dest: '/index.html' },
    ],
    optimize: {
        /* TODO: Bundle your final build: */
        // "bundle": true,
    },
    packageOptions: {
        /* ... */
    },
    buildOptions: {
        /* ... */
    },
    alias: {
        /* ... */
    },
};
