export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://isekayrespawn.vercel.app',//CAMBIAR LUEGO
    }
}