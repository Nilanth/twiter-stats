import Head from 'next/head'

function addAppJsonLd() {
    return {
        __html: `{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Twitter Followers Count Tracker",
          "description": "Track your Twitter followers count easily with our Twitter Followers Count Tracker. Get real-time insights and analyze your followers' growth with this simple and effective tool. Start tracking your Twitter followers today!",
          "url": "https://twiter-stats.vercel.app",
          "applicationCategory": "Social Media",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "USD"
          },
        }
        `,
    };
}

export default function Header() {
    return (
            <Head>
                <title>Twitter Followers Count Tracker | Track Your Twitter Followers Easily | Nilanth</title>
                <link rel="icon" href="/ts-logo.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="black-translucent"
                />
                <link rel="apple-touch-icon" href="/cover-image.png" />
                <link rel="icon" href="/ts-logo.ico" />

                {/* Primary Meta Tags */}
                <meta
                    name="title"
                    content="Twitter Followers Count Tracker | Track Your Twitter Followers Easily | Nilanth"
                />
                <meta
                    name="description"
                    content="Track your Twitter followers count easily with our Twitter Followers Count Tracker. Get real-time insights and analyze your followers' growth with this simple and effective tool. Start tracking your Twitter followers today!"
                />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Twitter Followers Count Tracker | Track Your Twitter Followers Easily | Nilanth"
                />
                <meta
                    property="og:description"
                    content="Track your Twitter followers count easily with our Twitter Followers Count Tracker. Get real-time insights and analyze your followers' growth with this simple and effective tool. Start tracking your Twitter followers today!"
                />
                <meta
                    property="og:image"
                    content="https://twiter-stats.vercel.app/cover-image.png"
                />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:title"
                    content="Twitter Followers Count Tracker | Track Your Twitter Followers Easily | Nilanth"
                />
                <meta
                    property="twitter:description"
                    content="Track your Twitter followers count easily with our Twitter Followers Count Tracker. Get real-time insights and analyze your followers' growth with this simple and effective tool. Start tracking your Twitter followers today!"
                />
                <meta
                    property="twitter:image"
                    content="https://twiter-stats.vercel.app/cover-image.png"
                />
                <meta name="google-site-verification" content="7X7mA-zdieQs5Sl4sBkZeZEnGGpQNauPStp1fgcA0vM" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={addAppJsonLd()}
                    key="app-jsonld"
                />
            </Head>
    )
}
