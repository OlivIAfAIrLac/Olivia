/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        apiGateway: "http://ec2-34-203-248-72.compute-1.amazonaws.com:8080/api",
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
