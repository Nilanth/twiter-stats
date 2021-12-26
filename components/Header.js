import Head from 'next/head'

export default function Header() {
    return (
            <Head>
                <title>TwiterStats - Your Twitter Followers Tracker</title>
                <link rel="icon" href="/ts-logo.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content="TwiterStats - Your Twitter Followers Tracker"/>
            </Head>
    )
}
