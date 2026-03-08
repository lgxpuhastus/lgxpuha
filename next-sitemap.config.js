/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://lgxpuhastus.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
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
  
  // Simple transform - hreflang is handled in HTML head via Next.js metadata
  transform: async (config, path) => {
    // Determine priority based on path
    const isHomepage = path === '/' || path === '/en' || path === '/fi' || path === '/et';
    
    return {
      loc: path,
      changefreq: 'weekly',
      priority: isHomepage ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    };
  },
};
