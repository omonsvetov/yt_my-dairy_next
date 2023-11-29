/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            allowedOrigins:["localhost", "localhost:3001", "127.0.0.1:3001", "127.0.0.1"]
        }
    }
}

module.exports = nextConfig
