export default async function ServerContent() {
    console.log('ServerContent rendered on server');

    // Simulate some async operation
    await new Promise(resolve => setTimeout(resolve, 100));

    return (
        <div className="p-4 border border-blue-500 rounded-lg my-4 bg-blue-50">
            <h2 className="text-xl font-bold text-blue-700">Server Component</h2>
            <p className="text-gray-700">
                This content is rendered on the server. You can check your server terminal for a log message.
            </p>
            <p className="text-sm text-gray-500 mt-2">
                Generated at: {new Date().toLocaleTimeString()}
            </p>
        </div>
    );
}
