import { getCollection } from 'astro:content';

export async function GET() {
  // Get all blog posts
  const posts = await getCollection('blog');

  // Define static pages
  const staticPages = [
    '',
    'about',
    'projects',
    'blog',
    'privacy-policy',
    'terms-of-service',
    'disclaimer'
  ];

  // Get current date for lastmod
  const currentDate = new Date().toISOString().split('T')[0];

  // Base URL - update this with your actual domain
  const baseUrl = 'https://yayandeka.com';

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `
  <url>
    <loc>${baseUrl}/${page}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page === '' ? 'weekly' : page === 'blog' ? 'daily' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : page === 'blog' ? '0.9' : '0.8'}</priority>
  </url>`).join('')}
  
  ${posts.map(post => `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.data.updatedDate ? post.data.updatedDate.toISOString().split('T')[0] : post.data.pubDate.toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
  
  <url>
    <loc>${baseUrl}/blog/category/development</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/blog/category/design</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/blog/category/tutorial</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
