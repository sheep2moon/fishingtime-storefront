const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")
const withPWA = require("next-pwa")

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
})

module.exports = withStoreConfig({
  features: store.features,
  reactStrictMode: false,
  images: {
    domains: [
      "fishing-medusa-storage.s3.eu-central-1.amazonaws.com",
      "localhost",
    ],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
