import '../styles/globals.css'
import {SessionProvider} from "next-auth/react"
import {ThemeProvider} from "next-themes";

export default function App({Component, pageProps: {session, ...pageProps},}) {
    return (
        <SessionProvider session={session} refetchInterval={5 * 60}>
            <ThemeProvider attribute="class" enableSystem={false}>
                <Component {...pageProps} />
            </ThemeProvider>
        </SessionProvider>
    )
}
