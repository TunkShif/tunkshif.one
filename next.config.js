const { withPlaiceholder } = require("@plaiceholder/next")
const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}

module.exports = withContentlayer(withPlaiceholder(nextConfig))
