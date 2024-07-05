/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, //2回実行を防ぐ
    output: 'export',
    images: {
        unoptimized: true,
    },
    webpack(config, options) {
        config.module.rules.push({
          test: /\.mp3$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        });
        return config;
      },
    
};

export default nextConfig;