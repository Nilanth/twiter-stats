import useSWR from 'swr'
import {useRef, useState} from "react";
import {signOut} from "next-auth/react";
import Image from 'next/image'
import Button from "../components/Button";
import {UserGroupIcon} from "@heroicons/react/solid";
import ToggleButton from "../components/Toggle";
import AnimatePing from "../components/animatePing";
import HtmlToImage from "../components/HtmltoImage";

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Followers({session}) {
    const [loader, setLoader] = useState(false);
    const [isAutoRefresh, setIsAutoRefresh] = useState(false);
    const ref = useRef(null);

    const enableAutoRefresh = () => {
        setIsAutoRefresh(!isAutoRefresh);
    };
    const {data, error} = useSWR(session ? '/api/twitter/user' : null, fetcher,
        {refreshInterval: isAutoRefresh ? 30000 : 0, revalidateOnFocus: false}
    );

    if (data && data.error && data.error.errors[0] && data.error.errors[0].code === 89) {
        signOut();
    }

    function oauthSignOut() {
        if (!loader) {
            setLoader(!loader);
            signOut();
        }
    }

    if (!data) return <div> Loading... </div>;
    const userData = data.data;
    return (
        <>
            <figure className="md:flex bg-white rounded-xl p-8 md:p-0 shadow-xl" ref={ref}>
                <Image
                    src={session.user.image}
                    alt="Picture of the author"
                    className="w-24 h-24 md:w-64 md:h-auto rounded-tl-lg rounded-bl-lg mx-auto"
                    width={500}
                    height={500}
                />
                {isAutoRefresh && <AnimatePing/>}
                <div className="pt-6 md:p-4 text-center md:text-left space-y-4">
                    <div className="flex 2xl:pb-5 flex-col md:flex-row">
                        <div
                            className="flex bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg md:mr-10 p-4 mb-4 md:mb-0
                             justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1
                             hover:scale-110 hover:from-pink-500 hover:to-yellow-500">
                            <UserGroupIcon className="h-10 text-white"/>
                            <div className="text-4xl ml-4 align-middle font-semibold 2xl:text-6xl">
                                {userData.followersCount}
                            </div>
                        </div>
                        <div className="flex items-center md:justify-end w-full exclude-in-image justify-center">
                            <HtmlToImage imageRef={ref} userName={session.user.name}/>
                            <ToggleButton onChange={() => enableAutoRefresh()} isAutoRefresh={isAutoRefresh}/>
                        </div>
                    </div>
                    {userData &&
                    <figcaption className="font-medium 2xl:pb-5">
                        <a className="text-sky-500 2xl:text-4xl" target="_blank"
                           href={`https://twitter.com/${userData.twitterHandle}`}>
                            @{userData.twitterHandle}
                        </a>
                        <div className="text-gray-700 2xl:text-3xl">
                            {userData && userData.location}
                        </div>
                    </figcaption>
                    }
                    <blockquote>
                        <p className="text-lg font-medium 2xl:text-3xl">
                            {userData && userData.description}
                        </p>
                    </blockquote>
                </div>
            </figure>
            <div className="flex flex-wrap items-center justify-around max-w-4xl py-6 sm:w-full 2xl:py-12">
                <Button label="Logout" onClick={() => oauthSignOut()} loader={loader}>Sign out</Button>
            </div>
        </>
    )
}
