'use client';

import { useState } from 'react';

import { QuestionMarkCircledIcon } from '@radix-ui/react-icons';

import { Tooltip, TooltipContent, TooltipTrigger } from 'components/ui/tooltip';

import { cn } from 'lib/utils';

export default function PlanTooltip({
    text,
    className,
    type,
}: {
    text: string;
    className?: string;
    type?: string;
}) {
    const [open, setOpen] = useState(false);
    return (
        <Tooltip open={open} onOpenChange={setOpen}>
            <TooltipTrigger
                className={cn(`cursor-pointer`, className)}
                onClick={() => {
                    setOpen(true);
                }}
                onBlur={() => {
                    setOpen(false);
                }}
                asChild
            >
                {type ? (
                    <span className="text-muted-foreground">{type}</span>
                ) : (
                    <QuestionMarkCircledIcon className="w-3.5 h-3.5 ml-1.5 cursor-pointer text-muted-foreground" />
                )}
            </TooltipTrigger>
            <TooltipContent
                side="top"
                className="text-white dark:text-black max-w-[300px]"
            >
                {text}
            </TooltipContent>
        </Tooltip>
    );
}
