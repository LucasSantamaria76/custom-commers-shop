/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['lucide-react'],
    images: {
      domains: ['res.cloudinary.com'],
    }
}

module.exports = nextConfig
