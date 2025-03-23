/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://image-split.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  changefreq: 'daily',
  priority: 1.0,
  sitemapSize: 7000,
  exclude: ['/404', '/500'],
} 