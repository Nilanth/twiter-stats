import {useSession, signIn} from "next-auth/react"
import {useState} from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Followers from "../components/Followers";
import Image from "next/image";


export default function Home() {
    const [loader, setLoader] = useState(false);
    const {data: session, status} = useSession();

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

