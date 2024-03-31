'use client';

import Link from 'next/link';

import { useI18n } from 'locales/client';

import { SwitchLanguage } from 'components/switch-language';
import { SwitchTheme } from 'components/switch-theme';
import { Button } from 'components/ui/button';


export function Header() {
    let t = useI18n();

    return (
        <div className={'flex justify-between items-center'}>
            <h1 className="flex lg:flex-1 text-xl font-bold">Hire.az</h1>

            <div className={'lg:flex lg:justify-end lg:flex-1 space-x-4'}>
                <SwitchTheme />
                <SwitchLanguage />
                <Link href={`/auth/login`}>
                    <Button variant="ghost">Login</Button>
                </Link>
                <Link href={`/auth/register`}>
                    <Button variant="default">Register</Button>
                </Link>
            </div>
        </div>
    );
}
