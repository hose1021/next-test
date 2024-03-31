'use client';

import { Icon } from '@iconify/react';
import { useChangeLocale } from 'locales/client';

import { Button } from 'components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from 'components/ui/dropdown-menu';

export function SwitchLanguage() {
    const changeLocale = useChangeLocale();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'ghost'} size={'icon'} className="rounded">
                    <Icon icon={'tabler:language'} className="text-xl" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={'center'}>
                <DropdownMenuItem
                    onClick={() => changeLocale('ru')}
                    className={'cursor-pointer'}
                >
                    <Icon
                        icon={'twemoji:flag-united-states'}
                        className={'mr-2'}
                    />
                    <span>English</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={() => changeLocale('ru')}
                    className={'cursor-pointer'}
                >
                    <Icon icon={'twemoji:flag-russia'} className={'mr-2'} />
                    <span>Russian</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
