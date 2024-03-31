import { getStaticParams } from 'locales/server';
import { setStaticParamsLocale } from 'next-international/server';



import { Header } from 'components/header';
import Pricing from 'components/home/pricing';
import { Button } from 'components/ui/button';


export function generateStaticParams() {
    return getStaticParams();
}

export default function Page({ params: { locale } }: { params: { locale: string } }) {
    setStaticParamsLocale(locale);

    return (
        <>
            <div
                className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div className="relative left-0 aspect-square rounded-full -translate-y-1/4 bg-gradient-to-b from-primary from-20% to-transparent to-90% opacity-20" />
            </div>
            <Header />
            <div
                className={
                    'relative max-w-7xl text-center mx-auto flex flex-col items-center justify-center gap-12 py-52'
                }
            >
                <h1 className={'text-6xl font-bold'}>
                    Simple, Smarter, Not Harder
                </h1>
                <h3 className={'w-2/3 mx-auto text-accent-foreground'}>
                    Midday provides you with greater insight into your business
                    and automates the boring tasks, allowing you to focus on
                    what you love to do instead.
                </h3>
                <div className={'flex space-x-4 w-max mx-auto'}>
                    <Button size="lg">Start building</Button>
                    <Button variant="secondary" size="lg">
                        Try out now!
                    </Button>
                </div>
            </div>
            <Pricing />
            <main className={'mx-auto w-max space-y-12 mt-32'}>
                <div className="mx-auto mt-0 sm:mt-16  flex flex-col items-center">
                    <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-primary sm:text-4xl sm:leading-[3.5rem]">
                        Proudly{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-sky-600 bg-clip-text text-transparent">
                            Open Source
                        </span>
                    </h2>
                    <p className="mt-3 mb-10 text-muted-foreground leading-7 sm:text-lg w-[80%] text-center">
                        Our source code is available on GitHub - feel free to
                        read, review, or contribute to it.
                    </p>
                </div>
            </main>
        </>
    );
}
