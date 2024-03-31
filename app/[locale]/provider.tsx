'use client';

import type { ReactNode } from 'react';



import { usePathname } from 'next/navigation';



import { I18nProviderClient } from 'locales/client';



import { ThemeProvider } from 'components/theme-provider';


type ProviderProps = {
    locale: string;
    children: ReactNode;
};

export function Provider({ locale, children }: ProviderProps) {
    const pathname = usePathname();

    return (
        <I18nProviderClient locale={locale}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                forcedTheme={pathname.includes('engine') ? 'dark' : undefined}
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </I18nProviderClient>
    );
}
