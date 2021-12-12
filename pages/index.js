import {useSession, signIn} from "next-auth/react"
import Layout from "../components/Layout";
import Button from "../components/Button";
import Followers from "../components/Followers";
import Image from "next/image";


export default function Home() {
    const { data: session, status } = useSession();
    console.log(status)
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
            <Button label="Login with Twitter" onClick={() => signIn('twitter')}>Sign in</Button>
        </Layout>
    )
}

