/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jtr6vvwzqvphjthn.public.blob.vercel-storage.com"
      }
    ]
  } 
}

module.exports = nextConfig
