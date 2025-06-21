import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: (config: Configuration, { isServer }: { isServer: boolean }) => {
    if (!isServer) {
      config.resolve!.fallback = {
        ...config.resolve!.fallback,
        canvas: false,
      };
    }
    // SVG 파일을 React 컴포넌트로 사용할 수 있도록 설정
    config.module!.rules!.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    // PDF.js 워커 파일을 처리하기 위한 설정
    config.module!.rules!.push({
      test: /pdf\.worker\.(min\.)?js/,
      type: "asset/resource",
      generator: {
        filename: "static/chunks/[name].[hash][ext]",
      },
    });
    return config;
  },
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  },
};

export default nextConfig;
