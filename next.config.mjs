/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
      'googleapis',
      'google-auth-library',
      'gtoken',
      'jws',
      'jwa',
      'buffer-equal-constant-time',
      'gaxios',
      'gcp-metadata',
    ],
  },
}

export default nextConfig
