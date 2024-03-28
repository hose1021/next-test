import {getStaticParams} from "@/locales/server";
import {setStaticParamsLocale} from "next-international/server";
import {Header} from "@/components/Header";
import {Button} from "@/components/ui/button";
import {Pricing} from "@/components/Pricing";

export function generateStaticParams() {
    return getStaticParams();
}

export default function Page({
                                 params: {locale},
                             }: {
    params: { locale: string };
}) {
    setStaticParamsLocale(locale);

    return (
        <>
            <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                 aria-hidden="true">
                <div
                    className="relative left-0 aspect-square rounded-full -translate-y-1/4 bg-gradient-to-b from-primary from-20% to-transparent to-90% opacity-20"
                />
            </div>
            <Header/>
            <div className={'text-center space-y-8 mt-32 w-2/3 mx-auto'}>
                <h1 className={'text-7xl font-light'}>
                    Build website in minutes without writing any code
                </h1>
                <h3 className={'text-xl text-accent-foreground'}>
                    Midday provides you with greater insight into your business and automates the boring tasks, allowing
                    you to focus on what you love to do instead.
                </h3>
                <div className={'flex space-x-4 w-max mx-auto'}>
                    <Button size="lg">Start building</Button>
                    <Button variant="secondary" size="lg">Try out now!</Button>
                </div>
            </div>
            <main className={'mx-auto w-max space-y-12 mt-32'}>
                <Pricing/>
            </main>
        </>
    );
}
