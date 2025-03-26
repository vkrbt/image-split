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
  transform: async (config, path) => {
    // Set different priorities for different pages
    const priorities = {
      '/': 1.0,
      '/instagram-guide': 0.8,
      '/ai-guide': 0.8,
    };

    // Set different change frequencies for different pages
    const changefreqs = {
      '/': 'daily',
      '/instagram-guide': 'weekly',
      '/ai-guide': 'weekly',
    };

    return {
      loc: path,
      changefreq: changefreqs[path] || config.changefreq,
      priority: priorities[path] || 0.6,
      lastmod: new Date().toISOString(),
    };
  },
} 