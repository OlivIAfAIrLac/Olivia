/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        apiGateway: "http://localhost:8080/api",
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/dashboard',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
