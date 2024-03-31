import Link from 'next/link';

import { getStaticParams } from 'locales/server';
import { setStaticParamsLocale } from 'next-international/server';

import { Button } from 'components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from 'components/ui/card';
import { Input } from 'components/ui/input';
import { Label } from 'components/ui/label';

export function generateStaticParams() {
    return getStaticParams();
}

export default function Page({ params: { locale } }: { params: { locale: string } }) {
    setStaticParamsLocale(locale);

    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Register</CardTitle>
                <CardDescription>
                    Enter your email below to register for an account.
                </CardDescription>
            </CardHeader>
            <CardContent>
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
                        </div>
                        <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full">
                        Register
                    </Button>
                    <div className="flex items-center gap-4">
                        <hr className="w-full" />
                        <span className="text-sm text-gray-500">or</span>
                        <hr className="w-full" />
                    </div>
                    <Button variant="outline" className="w-full">
                        Register with Google
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Already have an account?{' '}
                    <Link href={'/auth/login'} className="underline">
                        Login
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}
