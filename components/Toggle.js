export default function ToggleButton({onChange, isAutoRefresh}) {
    return (
        <label htmlFor="toggleB" className="flex items-center cursor-pointer">
            <div className="relative">
                <input type="checkbox" id="toggleB" className="sr-only" onChange={onChange} checked={isAutoRefresh}/>
                <div className="block bg-indigo-500 w-14 h-8 2xl:w-20 2xl:h-12 rounded-full"/>
                <div className="dot absolute left-1 top-1 bg-white w-6 h-6 2xl:w-10 2xl:h-10 rounded-full transition"/>
            </div>
            <div className="ml-3 text-gray-700 font-medium 2xl:text-4xl dark:text-gray-400">
                Auto Refresh
            </div>
        </label>
    );
}
