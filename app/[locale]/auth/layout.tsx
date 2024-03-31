import type { ReactElement } from 'react';

import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import Link from 'next/link';

import 'styles/global.css';

export const metadata: Metadata = {
    metadataBase: new URL('https://midday.ai'),
    title: 'Midday | Run your business smarter',
    description:
        'Midday provides you with greater insight into your business and automates the boring tasks, allowing you to focus on what you love to do instead.',
};

const notoSans = Noto_Sans({
    subsets: ['latin'],
    variable: '--font-sans',
});

export const viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)' },
        { media: '(prefers-color-scheme: dark)' },
    ],
};

export default function Layout({
    children,
    params: { locale = 'en' },
}: {
    children: ReactElement;
    params: { locale: string };
}) {
    return (
        <>
            <div className="w-full h-screen flex flex-col items-center justify-center px-4 space-y-4">
                <Link href="/">
                    <h1 className="text-3xl font-medium">Hire</h1>
                </Link>
                {children}
            </div>
        </>
    );
}
