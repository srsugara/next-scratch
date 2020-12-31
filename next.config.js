module.exports = {
    // pageExtensions: ['page.js', 'jsx', 'ts', 'tsx']
    serverRuntimeConfig: {
        // Will only be available on the server side
        secretKey: process.env.SECRET_KEY, // Pass through env variables
    },
}