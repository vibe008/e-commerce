/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    
  },
  webpack: (config, { isServer }) => {
    // Add the file-loader to handle video files
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos/',
            outputPath: `${isServer ? '../' : ''}static/videos/`,
            name: '[name]-[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },
  
}


module.exports = nextConfig
