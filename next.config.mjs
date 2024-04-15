/** @type {import('next').NextConfig} */

import withPWAInit from "@ducanh2912/next-pwa";  
const nextConfig = withPWAInit({
  reactStrictMode: true,
  dest: 'public',
  register: true,
  skipWaiting: true,
});

export default nextConfig;
