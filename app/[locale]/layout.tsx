import type { ReactNode } from 'react';



import { Provider } from './provider';


export default function Layout({
    params: { locale },
    children,
}: Readonly<{
    children: ReactNode;
    params: { locale: string };
}>) {
    return (
        <Provider locale={locale}>
            <main className="flex flex-col mx-auto w-full homepage">
                <div className="flex after:bg-grid sm:max-w-4xl py-5 mx-auto flex-col w-full h-fit px-4">
                    {children}
                </div>
            </main>
        </Provider>
    );
}
