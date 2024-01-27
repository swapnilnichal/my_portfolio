/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["www.allschoolscolleges.com"
        ,"www.kulguru.com",
        "www.w3.org",
        "upload.wikimedia.org",
        "www.seekpng.com",
        "www.pinpng.com",
        "www.budventure.technology",
        "www.postgresql.org"
      ],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "www.allschoolscolleges.com",
        },
        {
          protocol: "https",
          hostname: "www.kulguru.com",
        },
        {
          protocol: "https",
          hostname: "www.w3.org",
        },
        {
          protocol: "https",
          hostname: "upload.wikimedia.org",
        },
        {
          protocol: "https",
          hostname: "www.seekpng.com",
        },
        {
          protocol: "https",
          hostname: "www.pinpng.com",
        },
        {
          protocol: "https",
          hostname: "www.budventure.technology",
        },
        {
          protocol: "https",
          hostname: "www.postgresql.org",
        },
      ],
    },
  };

module.exports = nextConfig
