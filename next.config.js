import { TrendingUpDown } from "lucide-react";

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  // Export as a static website
  output: "export",

  // Disable Image Optimization
  images: {
    unoptimized: true,
  },

  reactStrictMode: true,

  /**
   * If you are using `appDir` then you must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  transpilePackages: ["geist"],
};

export default config;
