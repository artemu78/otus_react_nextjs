import { GetServerSideProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import exampleImage from '../public/629323623.jpg';

interface SSRPageProps {
    serverTime: string;
    userAgent: string;
}

export default function SSRPage({ serverTime, userAgent }: SSRPageProps) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-white dark:bg-black text-black dark:text-white">
            <h1 className="text-4xl font-bold mb-8">Server-Side Rendering Example</h1>

            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl w-full flex flex-col items-center">
                <p className="mb-4 text-lg text-center">
                    This page was rendered on the server using <code className="font-mono bg-yellow-200 dark:bg-yellow-900 px-1 rounded">getServerSideProps</code>.
                </p>

                <div className="mb-6">
                    <Image
                        src={exampleImage}
                        alt="Example optimized image"
                        placeholder="blur"
                        className="rounded-lg shadow-md"
                        width={500}
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                        }}
                    />
                </div>

                <div className="space-y-4 w-full">
                    <div className="p-4 border border-gray-300 dark:border-gray-700 rounded">
                        <h2 className="font-semibold text-xl mb-2">Server Time</h2>
                        <p className="font-mono text-lg">{serverTime}</p>
                    </div>

                    <div className="p-4 border border-gray-300 dark:border-gray-700 rounded">
                        <h2 className="font-semibold text-xl mb-2">User Agent</h2>
                        <p className="font-mono text-sm break-all">{userAgent}</p>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <Link href="/" className="text-blue-500 hover:text-blue-700 underline">
                        ← Back to Home (App Router)
                    </Link>
                </div>
            </div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps<SSRPageProps> = async (context) => {
    const serverTime = new Date().toISOString();
    const userAgent = context.req.headers['user-agent'] || 'Unknown';

    console.log('[SSR] Rendering page on server at:', serverTime);

    return {
        props: {
            serverTime,
            userAgent,
        },
    };
};
