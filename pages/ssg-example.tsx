import { GetStaticProps } from 'next';
import Link from 'next/link';

interface SSGPageProps {
    buildTime: string;
}

export default function SSGPage({ buildTime }: SSGPageProps) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-white dark:bg-black text-black dark:text-white">
            <h1 className="text-4xl font-bold mb-8">Static Site Generation Example</h1>

            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl w-full">
                <p className="mb-4 text-lg">
                    This page was statically generated at build time using <code className="font-mono bg-green-200 dark:bg-green-900 px-1 rounded">getStaticProps</code>.
                </p>

                <div className="space-y-4">
                    <div className="p-4 border border-gray-300 dark:border-gray-700 rounded">
                        <h2 className="font-semibold text-xl mb-2">Build Time</h2>
                        <p className="font-mono text-lg">{buildTime}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                            (This timestamp will not change on refresh in production)
                        </p>
                    </div>
                </div>

                <div className="mt-8 text-center flex gap-4 justify-center">
                    <Link href="/" className="text-blue-500 hover:text-blue-700 underline">
                        ← Back to Home (App Router)
                    </Link>
                    <Link href="/ssr-example" className="text-blue-500 hover:text-blue-700 underline">
                        Go to SSR Example →
                    </Link>
                </div>
            </div>
        </div>
    );
}

export const getStaticProps: GetStaticProps<SSGPageProps> = async () => {
    const buildTime = new Date().toISOString();

    console.log('[SSG] Generating page at build time:', buildTime);

    return {
        props: {
            buildTime,
        },
        // Optional: Revalidate every 60 seconds (ISR)
        // revalidate: 60, 
    };
};
