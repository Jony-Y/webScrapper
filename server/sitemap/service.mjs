import sitemap from 'sitemap';

export async function createSitemap(){
     return await sitemap.createSitemap ({
        hostname: 'https://en.wikipedia.org/wiki',
        cacheTime: 600000,        // 600 sec - cache purge period
        urls: [
            { url: '/Main_Page',  changefreq: 'daily', priority: 0.3 },
            { url: '/Portal:Contents',  changefreq: 'monthly',  priority: 0.7},
            { url: '/Dodd-Hinsdale_House'},    // changefreq: 'weekly',  priority: 0.5
            { url: '/Wikipedia:About'}
        ]
    });
}