export const metadata = {
    title: "PixelForge Studios | Tvoříme světy z pixelů",
    description:
        "PixelForge Studios je herní studio zaměřené na pixel art, poutavé příběhy a inovativní herní design. Objevte naše jedinečné hry a světy.",
    keywords:
        "PixelForge, pixel art, herní studio, nezávislé hry, retro hry, herní design, herní vývoj",
    author: "PixelForge Studios",
    og: {
        title: "PixelForge Studios | Tvoříme světy z pixelů",
        description:
            "Vydejte se na dobrodružství v jedinečných světech plných pixelového umění a nezapomenutelných příběhů. Tvoříme hry, které spojují tradici a inovaci.",
        url: "https://www.pixelforgestudios.com",
        image: "https://www.pixelforgestudios.com/images/og-image.webp",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="cs" translate="no" suppressHydrationWarning={true}>
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={metadata.description} />
            <meta name="keywords" content={metadata.keywords} />
            <meta name="author" content={metadata.author} />
            <meta property="og:title" content={metadata.og.title} />
            <meta property="og:description" content={metadata.og.description} />
            <meta property="og:url" content={metadata.og.url} />
            <meta property="og:image" content={metadata.og.image} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={metadata.og.title} />
            <meta name="twitter:description" content={metadata.og.description} />
            <meta name="twitter:image" content={metadata.og.image} />
            <link rel="canonical" href={metadata.og.url} />
            <link rel="icon" href="/favicon.ico" />
            <title>{metadata.title}</title>
        </head>
        <body>
        {children}
        </body>
        </html>
    );
}
