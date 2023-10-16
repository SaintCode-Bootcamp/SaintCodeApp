import React from 'react';
import './globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <head>
                <link
                    rel="manifest"
                    href="/manifest.json"
                />
            </head>
            <main className="...">
                {children}
            </main>
        </>

    )
}