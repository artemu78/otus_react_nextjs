
export default function Loading() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"></div>
            <p className="mt-4 text-lg font-mono text-purple-600 dark:text-purple-400">Loading Nested Route...</p>
        </div>
    );
}
