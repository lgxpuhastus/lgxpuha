/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ana.barqai.agency',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: 'public',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: ['/admin', '/admin/*'],
};
