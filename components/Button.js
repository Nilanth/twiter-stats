export default function Button({label, onClick}) {
    return (
        <button type="button"
                onClick={onClick}
                className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500
                hover:to-yellow-500 text-white font-semibold px-6 py-3 2xl:px-12 2xl:py-6 2xl:text-4xl rounded-md">
            {label}
        </button>
    )
}
