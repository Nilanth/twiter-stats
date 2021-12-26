import {useSession, signIn, signOut} from "next-auth/react"
import {useState} from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Followers from "../components/Followers";
import Image from "next/image";

export default function Home() {
    const [loader, setLoader] = useState(false);
    const {data: session, status} = useSession();

    function oauthSignOut() {
        if (!loader) {
            setLoader(!loader);
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
                <Followers session={session}/>
                <div className="flex flex-wrap items-center justify-around max-w-4xl py-6 sm:w-full 2xl:py-12">
                    <Button label="Logout" onClick={() => oauthSignOut()} loader={loader}>Sign out</Button>
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
            <Button label="Login with Twitter" onClick={() => oauthSignIn()} loader={loader}>
                Sign in
            </Button>
        </Layout>
    )
}

