export default function AnimatePing() {
    return (
            <span className="absolute md:relative inline-flex ping">
                        <span className="flex absolute h-5 w-5 2xl:h-10 2xl:w-10 top-0 right-0 -mt-1 -mr-1 2xl:-mr-2 2xl:-mt-2">
                         <span
                             className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r bg-indigo-500 opacity-75"/>
                        <span className="relative inline-flex rounded-full h-5 w-5 2xl:h-10 2xl:w-10 bg-gradient-to-r bg-indigo-500"/>
                        </span>
                </span>
    );

}
