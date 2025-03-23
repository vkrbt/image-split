/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.worker\.(js|ts)$/,
      use: { 
        loader: 'worker-loader',
        options: { 
          filename: 'static/[hash].worker.js',
          publicPath: '/_next/'
        }
      }
    })
    return config
  }
}

module.exports = nextConfig 