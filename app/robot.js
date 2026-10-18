export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://isekairespawn.vercel.app',//CAMBIAR LUEGO
    }
}