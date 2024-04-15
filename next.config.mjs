/** @type {import('next').NextConfig} */

import withPWAInit from "@ducanh2912/next-pwa";  
const pwaConfig = withPWAInit({
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === "development",
  workboxOptions: {
    disableDevLogs: true,
  }
});

export default pwaConfig({
  reactStrictMode: true
});
