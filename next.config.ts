import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  serverExternalPackages: ["mongoose", "mongodb"],
  experimental: {
    optimizePackageImports: [
      "@mui/material",
      "@mui/icons-material",
      "@mui/lab",
    ],
  },
  output: "standalone",
  images: {
    disableStaticImages: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/shared/styles")],
    silenceDeprecations: ["legacy-js-api", "import", "slash-div"],
  },
  webpack: (config, { dev, isServer }) => {
    config.resolve.alias["@variables"] = path.join(
      __dirname,
      "src/shared/styles/_variables.scss",
    );

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp|avif|ico|bmp)$/i,
      type: "asset/resource",
    });

    if (isServer) {
      const externals = config.externals;
      if (Array.isArray(externals)) {
        externals.push("mongoose", "mongodb");
      } else if (typeof externals === "function") {
        const nextExternals = externals;
        config.externals = [
          nextExternals,
          "mongoose",
          "mongodb",
        ];
      } else {
        config.externals = ["mongoose", "mongodb", externals].filter(Boolean);
      }
    }

    if (dev) {
      // Нативное отслеживание файлов быстрее polling (poll давал задержку до ~1 с на HMR).
      // На сетевых томах/Docker, если события не доходят, верните poll: 1000.
      config.watchOptions = {
        aggregateTimeout: 200,
        ignored: ["**/node_modules/**", "**/.git/**"],
      };
    }

    return config;
  },
};

export default nextConfig;
