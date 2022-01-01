import Head from 'next/head'

export default function Header() {
    return (
            <Head>
                <title>TwiterStats - Your Twitter Followers Tracker</title>
                <link rel="icon" href="/ts-logo.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="black-translucent"
                />
                <title>
                    TwiterStats - Your Twitter Followers Tracker
                </title>
                <meta
                    name="description"
                    content="TwiterStats - Track twitter followers count in realtime and profile"
                />
                <meta
                    name="keywords"
                    content="twiterstats, nilanth, twiter-stats,twitter follower counter, nextjs, next-auth, react, open source, github"
                />
                <link rel="apple-touch-icon" href="/cover-image.png" />
                <link rel="icon" href="/ts-logo.ico" />

                {/* Primary Meta Tags */}
                <meta
                    name="title"
                    content="TwiterStats - Your Twitter Followers Tracker"
                />
                <meta
                    name="description"
                    content="TwiterStats - Track twitter followers count in realtime and profile"
                />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="TwiterStats - Your Twitter Followers Tracker"
                />
                <meta
                    property="og:description"
                    content="TwiterStats - Track twitter followers count in realtime and profile"
                />
                <meta
                    property="og:image"
                    content="https://twiter-stats.vercel.app/cover-image.png"
                />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:title"
                    content="TwiterStats - Your Twitter Followers Tracker"
                />
                <meta
                    property="twitter:description"
                    content="TwiterStats - Track twitter followers count in realtime and profile"
                />
                <meta
                    property="twitter:image"
                    content="https://twiter-stats.vercel.app/cover-image.png"
                />
            </Head>
    )
}
