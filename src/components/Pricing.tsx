import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

export const Pricing = () => {
    return (
        <section>
            <div className={'text-center'}>
                <h2 className={'text-3xl'}>Pricing</h2>
                <p className={'text-xl text-accent-foreground'}>Choose a plan that works for you</p>
            </div>
            <div className={'flex space-x-2'}>
                <Card
                    className={cn(`w-72 flex flex-col justify-between py-1 border-zinc-700 mx-auto sm:mx-0`,
                        "animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors")}>
                    <div>
                        <CardHeader className="pb-8 pt-4">
                            <div className="flex justify-between">
                                <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">Title</CardTitle>
                                <div
                                    className={cn("px-2.5 rounded-xl h-fit text-sm py-1 bg-zinc-200 text-black dark:bg-zinc-800 dark:text-white",
                                        "bg-gradient-to-r from-orange-400 to-rose-400 dark:text-black")}>
                                    Save
                                </div>
                            </div>
                            <div className="flex gap-0.5">
                                <h3 className="text-3xl font-bold">Custom</h3>
                                <span className="flex flex-col justify-end text-sm mb-1"></span>
                            </div>
                            <CardDescription className="pt-1.5 h-12">card description</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-2">

                        </CardContent>
                    </div>
                    <CardFooter className="mt-2">
                        <Button
                            className="relative inline-flex w-full items-center justify-center rounded-md bg-black text-white dark:bg-white px-6 font-medium  dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <div
                                className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur"/>
                            Buy
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </section>
    );
};
