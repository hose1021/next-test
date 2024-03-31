import * as React from 'react';
import { useEffect, useState } from 'react';

import { Icon } from '@iconify/react';
import { useTheme } from 'next-themes';

import { Button } from 'components/ui/button';

export function SwitchTheme() {
    const { setTheme, resolvedTheme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState(resolvedTheme);

    useEffect(() => {
        setCurrentTheme(resolvedTheme);
    }, [resolvedTheme]);

    const toggleTheme = () => {
        if (currentTheme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    };

    return (
        <Button
            variant={'ghost'}
            size={'icon'}
            className="rounded"
            onClick={toggleTheme}
        >
            <Icon
                icon={currentTheme === 'dark' ? 'tabler:moon' : 'tabler:sun'}
                className="text-xl"
            />
        </Button>
    );
}
