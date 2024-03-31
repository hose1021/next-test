import React from 'react';



import type { Metadata, Viewport } from 'next';
import { Noto_Sans } from 'next/font/google';



import 'styles/global.css';


export const metadata: Metadata = {
    metadataBase: new URL('https://hire.az'),
    title: 'Hire.az',
    description:
        'Testing the metadata for the Hire.az website. Hire.az is a job board for the modern web.',
};

const notoSans = Noto_Sans({
    subsets: ['latin'],
    variable: '--font-sans',
});

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#000000' },
    ],
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover',
};

export default async function RootLayout({
    children,
    params: { locale = 'en' },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    return (
        <html lang={locale} className="h-full" suppressHydrationWarning>
            <body
                className={`${notoSans.className} bg-background relative flex min-h-screen flex-col`}
            >
                {children}
            </body>
        </html>
    );
}
