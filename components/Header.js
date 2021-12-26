import Head from 'next/head'

export default function Header() {
    return (
            <Head>
                <title>TwiterStats - Your Twitter Followers Tracker</title>
                <link rel="icon" href="/ts-logo.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content="TwiterStats - Your Twitter Followers Tracker"/>
                <script
                    async
                    data-name="BMC-Widget" data-cfasync="false"
                    src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="nilanth"
                    data-description="Support me on Buy me a coffee!" data-message="" data-color="#5F7FFF"
                    data-position="Right" data-x_margin="18" data-y_margin="18">
                </script>
            </Head>
    )
}
