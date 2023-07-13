/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        apiGateway: "http://localhost:8080/api",
        jwtSecret: "secret"
    }
}

module.exports = nextConfig
