import Link from 'next/link'
import Layout from "../components/Layout";
import Button from "../components/Button";
import GitHubButton from "../components/GitHubButton";

export default function Error() {
    return (
        <Layout>
            <div className="text-4xl text-orange-700 font-medium text-center 2xl:text-6xl mb-10">
                You have not Authorized TwiterStats
            </div>
            <div className="flex flex-col md:flex-row">
                <Link href="/">
                    <a>
                        <Button label="Go to Home"/>
                    </a>
                </Link>
                <GitHubButton/>
            </div>
        </Layout>
    )
}

