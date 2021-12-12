export default function Button({label, onClick, loader}) {
    return (
        <button type="button"
                onClick={onClick}
                className="inline-flex items-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500
                hover:to-yellow-500 text-white font-semibold px-6 py-3 2xl:px-12 2xl:py-6 2xl:text-4xl rounded-md">
            {loader &&
            <svg className="motion-reduce:hidden animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                        strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
            </svg>
            }
            <span>{label}</span>
        </button>
    )
}
