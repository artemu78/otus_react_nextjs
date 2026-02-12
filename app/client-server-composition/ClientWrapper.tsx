'use client';

import { useState } from 'react';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const [count, setCount] = useState(0);

    return (
        <div className="p-6 border-2 border-green-500 rounded-xl bg-white shadow-lg">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Client Component Wrapper</h2>

            <div className="mb-6 flex items-center gap-4">
                <p className="text-gray-700 font-medium">
                    Interactivity check (Client-side state):
                </p>
                <button
                    onClick={() => setCount(c => c + 1)}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                >
                    Count: {count}
                </button>
            </div>

            <div className="border-t pt-4">
                <p className="text-sm text-gray-500 mb-2">
                    The content below is passed as <code>children</code> from the Server Component parent:
                </p>
                {children}
            </div>
        </div>
    );
}
