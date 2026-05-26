/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // googleapis (and its google-auth-library / jws / jwa / buffer-equal-constant-time
    // chain) are CJS packages that crash when Next 14's webpack tries to bundle them
    // for server components. Marking them as external tells Next to leave the imports
    // as runtime require()s on the server, letting Node load them normally.
    serverComponentsExternalPackages: ['googleapis', 'google-auth-library'],
  },
}

export default nextConfig
