export default function Loading() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
            <h2 className="text-2xl font-bold mb-4">Loading RSC Example...</h2>
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-500">Please wait while the server prepares the content.</p>
        </div>
    );
}
