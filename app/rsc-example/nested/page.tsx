
import Link from 'next/link';

export default async function NestedRSC() {
    // Simulate a delay to show server-side work
    await new Promise((resolve) => setTimeout(resolve, 500));

    const renderTime = new Date().toLocaleTimeString();

    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-zinc-50 dark:bg-zinc-900">
            <h1 className="text-4xl font-bold mb-4">Nested Server Component</h1>
            <p className="text-xl mb-8">
                This page demonstrates nested routing in the App Router.
            </p>

            <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg mb-8 border border-zinc-200 dark:border-zinc-800">
                <p className="text-lg">
                    Rendered at: <span className="font-mono font-bold text-green-600 dark:text-green-400">{renderTime}</span>
                </p>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                    This component is completely server-rendered.
                </p>
            </div>

            <div className="flex gap-4">
                <Link
                    href="/rsc-example"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                    Back to Parent
                </Link>
                <Link
                    href="/"
                    className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                    Home
                </Link>
            </div>
        </div>
    );
}
