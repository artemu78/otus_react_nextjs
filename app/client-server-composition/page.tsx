import ClientWrapper from './ClientWrapper';
import ServerContent from './ServerContent';

export default function CompositionPage() {
    return (
        <main className="min-h-screen p-8 bg-gray-50">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
                Client & Server Composition Pattern
            </h1>

            <div className="max-w-2xl mx-auto">
                <p className="mb-6 text-gray-600 text-center">
                    This page demonstrates how to compose Server Components inside Client Components
                    by passing them as <code>children</code>. This allows the Server Component to run on the server
                    even though it's wrapped by a Client Component.
                </p>

                {/* 
          Composition Pattern:
          ClientWrapper is a Client Component.
          ServerContent is a Server Component.
          
          By passing ServerContent as a child to ClientWrapper, Next.js can resolve
          ServerContent on the server first, and pass the resulting HTML/JSON 
          into the ClientWrapper as a prop.
        */}
                <ClientWrapper>
                    <ServerContent />
                </ClientWrapper>
            </div>
        </main>
    );
}
