import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

export const Pricing = () => {
    return (
        <section>
            <div className={'text-center'}>
                <h2 className={'text-3xl'}>Pricing</h2>
                <p className={'text-xl text-accent-foreground'}>Choose a plan that works for you</p>
            </div>
            <div className={'flex space-x-2'}>
                <Card
                    className={'w-72 flex flex-col justify-between py-1 border-zinc-700 mx-auto sm:mx-0'}>
                    <div>
                        <CardHeader className="pb-8 pt-4">
                            <div className="flex justify-between">
                                <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">Title</CardTitle>
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
                        <Button>
                            <span>Choose plan</span>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </section>
    );
};
