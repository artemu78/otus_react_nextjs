import Link from "next/link";
import ImageSwitcher from "./ImageSwitcher";

export default async function RSCExample() {
    // Simulate a delay to show server-side work
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const time = new Date().toLocaleTimeString();

    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-4xl font-bold mb-4">React Server Component</h1>
            <p className="text-xl mb-8">
                This page is rendered on the server.
            </p>
            <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg shadow-md mb-8">
                <p className="text-lg">
                    Server Time: <span className="font-mono font-bold">{time}</span>
                </p>
            </div>

            <ImageSwitcher />

            <Link href="/" className="text-blue-500 hover:underline mt-8">
                Back to Home
            </Link>

            <Link href="/rsc-example/nested" className="text-purple-500 hover:underline mt-4">
                Visit Nested Route (Layer 2)
            </Link>
        </div>
    );
}
