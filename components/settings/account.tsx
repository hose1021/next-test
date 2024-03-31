'use client';

import { useAuth } from 'components/context/auth';
import { Avatar, AvatarFallback, AvatarImage } from 'components/ui/avatar';
import { Skeleton } from 'components/ui/skeleton';

import SettingsCard from './settings-card';

export default function SettingsAccount() {
    const { authUser } = useAuth();

    return (
        <SettingsCard className="h-[86px] px-3">
            <div className="flex gap-3 w-full items-center">
                <Avatar className="h-[50px] w-[50px]">
                    <AvatarImage
                        src={authUser.user_metadata?.avatar_url}
                        alt={authUser.user_metadata?.name}
                    />
                    <AvatarFallback className="font-medium text-pimary-foreground uppercase text-xl bg-accent">
                        {authUser.user_metadata?.name[0]}
                    </AvatarFallback>
                </Avatar>
                <div className="grid max-w-sm w-full">
                    <div
                        className="font-medium truncate pr-4"
                        title={authUser.user_metadata?.name ?? ''}
                    >
                        {authUser.user_metadata?.name ?? (
                            <Skeleton className="w-52 h-5 bg-accent mb-1.5" />
                        )}
                    </div>
                    <div
                        className="text-sm truncate pr-4 text-muted-foreground"
                        title={authUser.user_metadata?.email ?? ''}
                    >
                        {authUser.user_metadata?.email ?? (
                            <Skeleton className="w-36 h-5 bg-accent" />
                        )}
                    </div>
                </div>
            </div>
        </SettingsCard>
    );
}
