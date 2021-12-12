import Header from "./Header";
import Image from "next/image";


export default function Layout(props) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
            <Header/>
            <div className="flex text-3xl font-bold text-sky-500 mt-14 mb-4 2xl:text-4xl">
                <Image
                    src="/ts-logo.png"
                    alt="Picture of the author"
                    width={35}
                    height={25}
                />  &nbsp;TwiterStats
            </div>
            <div className="text-4xl text-slate-900 font-medium py-4 text-center 2xl:text-6xl">Your Twitter Followers Tracker</div>
            <main className="flex flex-col items-center justify-center w-full flex-1 xl:px-60 lg:px-10 md:px-10 text-center">
                {props.children}
            </main>
            <footer className="flex items-center justify-center w-full h-24 border-t">
                <a
                className="flex items-center justify-center"
                href="https://twitter.com/nilanth"
                target="_blank"
                rel="noopener noreferrer"
                >
                    Developed by&nbsp;<span className="text-sky-500">@Nilanth</span>
                </a>
            </footer>
        </div>
    )
}
