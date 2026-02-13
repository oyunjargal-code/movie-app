import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    baseUrl: process.env.baseUrl ?? "baihgui",
    TOKEN: process.env.TOKEN,
  },
};

export default nextConfig;
