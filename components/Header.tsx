'use client'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {useI18n} from "@/locales/client";
import {Switch} from "@/components/Switch";

export function Header() {
    let t = useI18n();

    return (
        <>
            <div className={"flex justify-between items-center"}>
                <h1 className="flex lg:flex-1 text-xl font-bold">MidDay</h1>

                <nav
                    className="hidden lg:flex gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link
                        href="#"
                        className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    <Link
                        href="#"
                        className="text-foreground transition-colors hover:text-foreground"
                    >
                        {t("header.download")}
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        {t("header.pricing")}
                    </Link>
                </nav>

                <div className={'lg:flex lg:justify-end lg:flex-1 space-x-4'}>
                    <Switch/>
                    <Link href={`/auth/login`}>
                        <Button variant="ghost">Login</Button>
                    </Link>
                    <Link href={`/auth/register`}>
                        <Button variant="default">Register</Button>
                    </Link>
                </div>
            </div>
        </>
    );
}
