import Link from 'next/link';



import { Icon } from '@iconify/react';
import { getStaticParams } from 'locales/server';
import { setStaticParamsLocale } from 'next-international/server';



import { Button } from 'components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'components/ui/card';
import { Input } from 'components/ui/input';
import { Label } from 'components/ui/label';


export function generateStaticParams() {
    return getStaticParams();
}

export default function Page({ params: { locale } }: { params: { locale: string } }) {
    setStaticParamsLocale(locale);

    return (
        <Card className="mx-auto w-2/3">
            <CardContent className={'p-12'}>
                <div className={'grid grid-cols-2 gap-2'}>
                    <Button variant={'outline'}>asd</Button>
                </div>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            <Link
                                href="#"
                                className="ml-auto inline-block text-sm underline"
                            >
                                Forgot your password?
                            </Link>
                        </div>
                        <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{' '}
                    <Link href={'/auth/register'} className="underline">
                        Sign up
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}
