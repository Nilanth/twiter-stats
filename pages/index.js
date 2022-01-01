import {useSession, signIn, signOut} from "next-auth/react"
import {useEffect, useState} from "react";
import Confetti from 'react-confetti';
import {useTimeout, useWindowSize, useLocalStorage} from 'react-use';
import Layout from "../components/Layout";
import Button from "../components/Button";
import Followers from "../components/Followers";
import Image from "next/image";
import GitHubButton from "../components/GitHubButton";

export default function Home() {
    const [loader, setLoader] = useState(false);
    const {width, height} = useWindowSize();
    const [isConfettiCompleted, setConfettiCompleted, remove] = useLocalStorage('confettiCompleted', false);

    const {data: session, status} = useSession();
    const [isComplete] = useTimeout(5000);

    useEffect(() => {
        console.info('%cTwiterStats - Your Twitter Followers Tracker', "color: rgba(14, 165, 233, 1); font-size: 24px;");
    }, []);

    function oauthSignOut() {
        if (!loader) {
            setLoader(!loader);
            setConfettiCompleted(false)
            signOut();
        }
    }

    if (status === 'loading') return <Layout> Loading... </Layout>;

    function oauthSignIn() {
        if (!loader) {
            setLoader(!loader);
            signIn('twitter');
        }
    }

    if (session) {
        return (
            <Layout>
                {
                    !isConfettiCompleted &&
                    <Confetti
                        run={!isConfettiCompleted}
                        width={width}
                        height={height}
                        recycle={!isComplete()}
                        numberOfPieces={300}
                        onConfettiComplete={() => setConfettiCompleted(true)}
                    />
                }
                <Followers session={session}/>
                <div className="flex flex-col md:flex-row flex-wrap items-center justify-center max-w-4xl py-6 sm:w-full 2xl:py-12">
                    <Button label="Logout" onClick={() => oauthSignOut()} loader={loader}>Sign out</Button>
                    <GitHubButton/>
                </div>
            </Layout>
        )
    }
    return (
        <Layout>
            <div className="mb-10">
                <Image
                    src="/cover-logo.png"
                    alt="Picture of the author"
                    width={800}
                    height={300}
                />
            </div>
            <div className="flex flex-col md:flex-row">
                <Button label="Login with Twitter" onClick={() => oauthSignIn()} loader={loader}>
                    Sign in
                </Button>
                <GitHubButton/>
            </div>
        </Layout>
    )
}

